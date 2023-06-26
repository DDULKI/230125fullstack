package bbs;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class BbsDAO {
	private Connection conn;
	private PreparedStatement ps;
	private ResultSet rs;
	
	public BbsDAO() {
		try {
			String DBURL = "jdbc:mysql://localhost:3306/bbs";			
			String DBID = "root";
			String DBPW = "1234";
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection(DBURL, DBID, DBPW);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
	
	
	public String getDate() {
		String SQL = "SELECT now()";
		try {
			PreparedStatement ps = conn.prepareStatement(SQL);
			rs = ps.executeQuery();
			if(rs.next()) {
				return rs.getString(1);
			}
			
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}	
			return ""; // 데이터베이스 오류 
	}
	
	// 게시글 번호 
	public int getNumber() {
		// 마지막글번호+1
		String SQL = "SELECT bbsId FROM bbs ORDER BY bbsId DESC";

		try {
			PreparedStatement ps = conn.prepareStatement(SQL);
			rs = ps.executeQuery();
			if(rs.next()) {
				return rs.getInt(1) + 1; // 글번호 증가
			}
			return 1; // 첫번째 입력할 글번호 측 => 저장된 게시글이 한개도 없을 때 ,, ,, 
		} catch (Exception e) {
			e.printStackTrace();
		}
		return -1; // 데이터베이스 오류
	}
	
	
	
	// 게시판 글쓰기(Write) 메서드 
	public int write(String userId, String subject, String content) {
		String SQL = "INSERT INTO bbs VALUES(?,?,?,?,?,?)";

		try {
			 PreparedStatement ps = conn.prepareStatement(SQL);
//			 ps.setInt(1, num1);	  // 글번호(마지막글번호+1 getNumber)
			 ps.setInt(1, getNumber());	  // 글번호(마지막글번호+1 getNumber)
			 ps.setString(2, userId);  // 작성자
			 ps.setString(3, subject);  // 제목 
			 ps.setString(4, content);  // 내용
			 ps.setString(5, getDate());  // 작성일(현재날짜 가져오기 함수)
//			 ps.setString(5, "2023-06-22");  // 작성일(현재날짜 가져오기 함수)
			 ps.setInt(6, 1);  // 삭제여부기본값입력(1) (0은삭제)
			 return ps.executeUpdate();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return -1; // 데이터베이스 오류 
	}

	

	// 게시글 리스트(목록) 메서드 
	// 페이지네이션 
	// 1. 매개변수로 글번호 bbsId deleteOk = 1 사용가능한 목록만 글번호 bbsId 내림차순 그리고 5개씩 출력
	public ArrayList<BbsDTO> getList(int pageNumber){
		String SQL = "SELECT * FROM bbs WHERE bbsId < ? AND deleteOk=1 ORDER BY bbsId DESC LIMIT 5";
		ArrayList<BbsDTO> list = new ArrayList<BbsDTO>();
		try {
			PreparedStatement ps = conn.prepareStatement(SQL);
			ps.setInt(1, getNumber() - (pageNumber-1) * 5);
			rs = ps.executeQuery();
			while(rs.next()) {
				BbsDTO bbsDTO = new BbsDTO();
				bbsDTO.setBbsId(rs.getInt(1));
				bbsDTO.setUserId(rs.getString(2));
				bbsDTO.setSubject(rs.getString(3));
				bbsDTO.setContent(rs.getString(4));
				bbsDTO.setWriteDate(rs.getString(5));
				bbsDTO.setDeleteOK(rs.getInt(6));
				list.add(bbsDTO);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	
	// 다음 페이지 함수 리턴값은 다음페이지 유무 true(다음페이지존재함) or false(다음페이지없음)
	// 다음 페이지 카운트 함수
	public boolean nextPage(int pageNumber) {
		String SQL = "SELECT * FROM bbs WHERE bbsId < ? AND deleteOk=1";
		try {
			PreparedStatement ps = conn.prepareStatement(SQL);
			ps.setInt(1, getNumber() - (pageNumber-1) * 5);
			rs = ps.executeQuery();
			while(rs.next()) {
				return true; 
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return false;
	}
	
	// 전체 레코드수 카운트 함수 
	public int totalRecordsMethod() {
		int totalRecords=0;
		String SQL = "SELECT MAX(bbsId) AS mx FROM bbs WHERE deleteOk=1";
		try {
			PreparedStatement ps = conn.prepareStatement(SQL);
			rs = ps.executeQuery();
			while(rs.next()) {
				return totalRecords=rs.getInt(1);
			}
			
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
		return totalRecords;
	}
	
	
	// 글보기 하나의 글목록 내용을 전달해준다. 
	public BbsDTO getView(int bbsId) {
		String SQL = "SELECT * FROM bbs WHERE bbsId = ?";
		try {
			PreparedStatement ps = conn.prepareStatement(SQL);
			ps.setInt(1, bbsId);
			rs = ps.executeQuery();
			while(rs.next()) {
				BbsDTO bbsDTO = new BbsDTO();
				bbsDTO.setBbsId(rs.getInt(1));
				bbsDTO.setUserId(rs.getString(2));
				bbsDTO.setSubject(rs.getString(3));
				bbsDTO.setContent(rs.getString(4));
				bbsDTO.setWriteDate(rs.getString(5));
				bbsDTO.setDeleteOK(rs.getInt(6));
				return bbsDTO;
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
		return null;
	}

	
}
