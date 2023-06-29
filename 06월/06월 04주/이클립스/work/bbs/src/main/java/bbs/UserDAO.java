package bbs;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import bbs.BbsDTO;


public class UserDAO {
	// ctrl + shift + o
		private Connection conn;
		private PreparedStatement ps;
		private ResultSet rs;
		
		public UserDAO() {
			try {
				String DBURL = "jdbc:mysql://localhost:3306/bbs";		// 이게 데이터베이스 이름이야. 너 이거로 안되어있지 않아? user 아냐 ? 아니 table 말고 database 혹시 모르니까 BBS로 해봐 	
				String DBID = "root";
				String DBPW = "1234";
				Class.forName("com.mysql.jdbc.Driver");
				conn = DriverManager.getConnection(DBURL, DBID, DBPW);
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
		}
		
		// 입력값을 모두 받아서 처리한다. 
		// 관리자 회원가입 
		public int signup(UserDTO userDTO) {
			// SQL INSERT INTO user
			String SQL = "INSERT INTO user(userId, userPw, userName, userEmail) VALUES(?, ?, ?, ?)";
			try {
				PreparedStatement ps = conn.prepareStatement(SQL);
				ps.setString(1, userDTO.getUserId() );
				ps.setString(2, userDTO.getUserPw() );
				ps.setString(3, userDTO.getUserName() );
				ps.setString(4, userDTO.getUserEmail() );
				return ps.executeUpdate();
			} catch (Exception e) {
				e.printStackTrace();
				// TODO: handle exception
			}
			return -1; // 이미 가입된 아이디입니다. 
		}
		
		
		
		// 로그인 => 아이디, 비밀번호 입력받아서 처리
		// login()  
		// 1 로그인 성공
		// 0 비밀번호 불일치
		//-1 아이디 불일치
		//-2 데이터베이스 오류
		// 아이디 입력값 받아서 비교하고 
		// 아이디가 맞으면 그다음 비밀번호를 비교한다. 그리고 로그인 구현
		public int login(String userId, String userPw) {
			String SQL = "SELECT userPw FROM user WHERE userId = ?";
			try {
				ps = conn.prepareStatement(SQL);
				ps.setString(1, userId);
				rs = ps.executeQuery();
				if(rs.next()) { // 아이검증 통과 
					if(rs.getString(1).equals(userPw)) {
						return 1; //비밀번호 일치 => 로그인 성공 리턴값 1
					}
					else {
						return 0; //비밀번호 불일치
					}
				}
				return -1;
			} catch (Exception e) {
				e.printStackTrace();
			}
			return -2; // 데이터베이스 오류
		}
		
		// 아이디찾기 메서드
		// 1차 검색 이름 
		// 1차 검색 결과를 이용하여 반복문 WHILE 사용 이메일을 검색  
		public UserDTO idSearch(String userName, String userEmail) {
			String SQL = "SELECT userEmail, userId FROM user WHERE userName = ?";
			try {
				PreparedStatement ps = conn.prepareStatement(SQL);
				ps.setString(1,  userName);
				rs = ps.executeQuery();
				while(rs.next()) {
					// userEmail 비교 
					if(rs.getString(1).equals(userEmail)) {
						UserDTO userDTO = new UserDTO();
						// 이메일이 일치하면 검색 정보 아이디를 반환한다. 
						userDTO.setUserId(rs.getString(2)); //SQL 조회된 아이디를 반환 
						return userDTO;
					}
						// return 이메일 틀림 
				}
			} catch (Exception e) {
				// TODO: handle exception
			}
			return null;
		}
		
		
		// 비밀번호찾기  메서드
		// 1차 검색 아이디
		// 1차 검색 결과를 이용하여 반복문 WHILE 사용 이메일을 검색  
		public UserDTO pwSearch(String userId, String userEmail) {
			String  SQL ="SELECT userEmail, userPw FROM user WHERE userId =?";
			try {
				PreparedStatement ps = conn.prepareStatement(SQL);
				ps.setString(1,  userId);
				rs = ps.executeQuery();
				while(rs.next()) {
					// userEmail 비교 
					if(rs.getString(1).equals(userEmail)) {
						UserDTO userDTO = new UserDTO();
						// 이메일이 일치하면 검색 정보 비밀번호를 반환한다. 
						userDTO.setUserPw(rs.getString(2)); //SQL 조회된 비밀번호를 반환 
						return userDTO;
					}
					// return 이메일 틀림 
				}
			} catch (Exception e) {
				// TODO: handle exception
			}
			return null;
		}
		
}
