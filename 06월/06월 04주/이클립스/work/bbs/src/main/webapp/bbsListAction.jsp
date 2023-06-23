<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import = "bbs.BbsDAO" %>
<%@ page import = "bbs.BbsDTO" %>
<%@ page import = "bbs.UserDAO" %>
<%@ page import = "java.util.ArrayList" %>

<%
	request.setCharacterEncoding("UTF-8");
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>게시판 메인</title>

	<style type="text/css">
			* {margin: 0; padding: 0; vertical-align:center; box-sizing:border-box;}
			ul {list-style: none;}
			a {color:#333; text-decoration:none;}
			#bbsList {width:100%; padding: 100px 0; text-align:center;}
	
			#bbsList table {width: 100%;max-width: 1000px; margin: 0 auto; border-collapse:collapse;}
			#bbsList table caption{ font-size:24px; font-weight: 600; padding: 0 0 60px 0; width: 100%;}
			#bbsList table th{border-bottom:1px solid #ccc; height: 60px; text-align:center; background: #f9f9f9; color: #222; font-size: 16px;border: 1px solid #000}
			#bbsList table th,td{border-bottom:1px solid #ccc; height: 60px; text-align:center; background: #f9f9f9; color: #222; font-size: 16px;border: 1px solid #000}
			#bbsList table td{height: 60px; text-align:center; background: #fff; color: #222; font-size: 16px;}
			#bbsList table th:nth-child(1){width: 80px; }
			#bbsList table th:nth-child(2){width:650px; }
			#bbsList table th:nth-child(3){width: 120px;}
			#bbsList table th:nth-child(4){width: 150px;}
			#bbsList table th:nth-child(even) td {background: #fafafa; }
			
				
			#bbsList table td:nth-child(2)  {text-align:left;}
			#bbsList table td:nth-child(4)  {font-size:14px; color:#999}
			#bbsList table td a { 
				display:block; 
				white-space: nowrap;
				max-width: 590px;
				overflow: hidden;
				padding: 0 0 0 20px;	
				text-overflow: ellipsis; 
				transition: all 0.3s;
			}
			
			#bbsList table td a:hover {color: #5f0080;}
	</style>
</head>
<body>

	<div id="bbsList">
		
		<table>
		<caption>BBS</caption>
			<thead>
				<tr>
					<th>글번호</th>
					<th>제목</th>
					<th>작성자</th>
					<th>작성일</th>
				</tr>
			</thead>
			
			<tbody>
			
			<%
				BbsDAO bbsDAO = new BbsDAO();
				ArrayList<BbsDTO> list = bbsDAO.getList(); // 리스트 메서드 
				for (int i=0; i<list.size(); i++){
			%>
				<tr>
					<td><%=list.get(i).getBbsId()%></td>
					<td><a href="viewAction.jsp?bbsId=<%=list.get(i).getBbsId()%>"><%=list.get(i).getSubject()%></a></td>
					<td><%=list.get(i).getUserId()%></td>
					<td><%=list.get(i).getWriteDate()%></td>
				</tr>
			<%
				//반복문 끝 
				}
			%>
			</tbody>
		</table>
		
			
		
	</div>

</body>
</html>