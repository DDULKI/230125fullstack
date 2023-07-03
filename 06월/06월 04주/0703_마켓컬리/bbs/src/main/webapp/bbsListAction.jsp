<%@page import="com.mysql.cj.protocol.a.NativeConstants.IntegerDataType"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import = "bbs.BbsDAO" %> 
<%@ page import = "bbs.BbsDTO" %> 
<%@ page import = "java.util.ArrayList" %> 
<%
	request.setCharacterEncoding("UTF-8");
%> 
    
<jsp:useBean id="BbsDTO" class="bbs.BbsDTO" scope="page"/> 
<jsp:setProperty name='BbsDTO'  property="userId"/>
<jsp:setProperty name='BbsDTO'  property="subject"/>
<jsp:setProperty name='BbsDTO'  property="content"/>    
    
     
     
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>게시판 메인</title>

	
</head>
<body>

	<%
	// 다음버튼 클릭 이벤트 잠시 붙여넣기 해놓음. 
	//bbsDAO.nextPage(pageNumber+1);
	
	// 로그인 정보 => 세션 가져오기
	String userId = null;
	if(session.getAttribute("userId")!=null){ // 세션값이 비어있지 않으면 세션아이디 변수에 저장
		userId = (String)session.getAttribute("userId");
	}
	%>

	<header id='header'>
		<div class='container'>
			<div class='left'>
				<h1>BBS Board</h1>
				<a href='./admin.jsp'>HOME</a>
				<a href='./bbsListAction.jsp'>게시판</a>
			</div>
			<div class='right'>
			<%
				if(userId==null){
			%>
				<a href='./signup.jsp'>Signup</a>
				<a href='./login.jsp'>Login</a>
			<%
				}
				else{
			%>
				<a href='./logoutAction.jsp'>Logout</a>
			<%
				}
			%>	
			</div>
		</div>
	</header>




<div id="bbsList">
	<div class='container'>
	<table>
		<caption>BBS BOARD</caption>
		<thead>
			<tr>
				<th>번호</th>
				<th>제목</th>
				<th>작성자</th>
				<th>작성일</th>
				<th>조회수</th>
			</tr>			
		</thead>
		
		<tbody>
		<%
			int pageNumber = 1; // 첫페이지 
			// 다음페이지 클릭하면 보내진 쿼리스트링의 겟파라미터 키 pageNumber 
			// 파라미터가 비어있지 않으면 파라미터값을 가져와서 
			// pageNumber 변수에 값을 저장한다. 
			if(request.getParameter("pageNumber") !=null){
				pageNumber = Integer.parseInt(request.getParameter("pageNumber"));
			}
			
			BbsDAO bbsDAO = new BbsDAO(); 
		    ArrayList<BbsDTO> list = bbsDAO.getList(pageNumber);
			for(int i=0; i<list.size(); i++){
		%>

			<tr>
				<td><%=list.get(i).getBbsId() %></td>
				<td><a href="viewAction.jsp?bbsId=<%=list.get(i).getBbsId() %>"><%=list.get(i).getSubject() %></a></td>
				<td><%=list.get(i).getUserId() %></td>
				<td><%=list.get(i).getWriteDate() %></td>
				<td><%=list.get(i).getHit() %></td>
			</tr>
						
		<%
			}
		%>
		</tbody>
	</table>
	
	<div class="pagebtn-box" style='text-align:center;'>
	
	<% 
		if(cnt>1){
	%>
			<a class="prev-btn" href='./bbsListAction.jsp?cnt=<%=cnt-1%>'>이전</a>
	<%	
		}
	%>
		
	
	<%
	// 전체 레코드수 23
	// 한페이지에 보여지는 목록의 개수 5 
	// 버튼 개수 2개씩 보이기(버튼 그룹) 31/3= 11/2 = 6개 그룹 
	// 1개 그룹이 2개씩 보임 버튼 2개만 보이게 한다.. 
	
		int totalRecords = bbsDAO.totalRecordsMethod();
		//int totalRecords = 23;
		int viewList = 3; 
		int viewBtnGroup = 2;
		int pages = (int)Math.ceil(totalRecords/(double)viewList); // ....
		int groups = (int)Math.ceil(pages/(double)viewBtnGroup); // 과연? 나는 몇개가 나올깡
		int cnt = 1; 
		int startNum = (cnt-1)*viewBtnGroup; // 0 2 4 6
		int endNum =startNum + viewBtnGroup; // 2 4 6 8
	%>	
		<a href='#'>이전그룹</a>
		
	<%
	
		if(request.getParameter("pageNumber")!=null){
			pageNumber = Integer.parseInt(request.getParameter("cnt"));
		}
		startNum = (cnt-1)*viewBtnGroup;
		endNum =startNum + viewBtnGroup;
	%>
		
	<%
		for(int i=0; i<=pages; i++){ // 0 ~ 1 / 2 ~ 3 //4 ~ 5 // 6 ~ 7  
	%>
			<a class='page-btn' href='./bbsListAction.jsp?pageNumber=<%=i+1%>'><%=i+1%></a>
	<%	
		}
	%>
	

		<a href='#'>다음그룹</a>
								
	<%
		if(bbsDAO.nextPage(pageNumber+1)){
	%>
			<a class='next-btn' href='./bbsListAction.jsp?cnt=<%=cnt+1%>'>다음</a>
	<%	
		}
	%>
	
	</div>
		
		
	<%
		if(userId!=null){
	%>
		  <div class="button-box" style="text-align:center">
		       <a href='./write.jsp'>글쓰기</a>
		  </div>
	<%
		}
	%>
	
</div>
	
	<style type="text/css">
		* {margin:0; padding:0; vertical-align:center;box-sizing:border-box;}
		ul {list-style:none;}
		a {color:#333;text-decoration:none;}
	
		#header {width:100%;height:80px;background:#f7f7f7;border-bottom:1px solid #ccc;}
		#header .container {
			width:100%;max-width:80%;margin:0 auto;
			height:100%;
			display:flex;
			align-items:center;		
			justify-content:space-between;
			font-weight:600;
		}	
		#header .container .left  {width:50%;}
		#header .container .left  h1 {font-size:24px;display:inline-block;color:#5f0080;margin:0 20px; 0 0;}
		#header .container .left  a  {foant-size:17px;color:#333;margin:0 10px;}
		#header .container .left  a:hover  {color:#5f0080;}
		#header .container .right {width:50%;text-align:right;}
		#header .container .right a  {foant-size:17px;color:#333;margin:0 10px;}
		#header .container .right a:hover  {color:#5f0080;}
		
		


		
		#bbsList {width:100%;padding:60px 0 100px 0; text-align:center;}
		#bbsList .container {width:100%; max-width: 80%; margin: 0 auto; padding: 50px; background:#f3f3f3;}
		#bbsList table {width:100%;border-collapse:collapse; background: #f3f3f3;}
		#bbsList table caption {width:100%;padding: 0 0 60px 0;font-size:24px;font-weight:600}
				
		#bbsList table th,td {border-bottom:1px solid #eee;}		
		#bbsList table th {height:60px;background:#f4f4f4;color:#222;font-size:16px;}
		#bbsList table td {height:50px;background:#fff;color:#444;font-size:15px;text-align:center;}		
		#bbsList table th:nth-child(1) {min-width:60px; width:20%;}
		#bbsList table th:nth-child(2) {min-width:200px; width:55%;}	
		#bbsList table th:nth-child(3) {min-width:100px; width:10%;}
		#bbsList table th:nth-child(4) {min-width:120px; width:14%;}
		#bbsList table th:nth-child(5) {min-width:80px; width:10%;}
		#bbsList table tr:nth-child(even) td {background:#fcfcfc;}
		#bbsList table th {border-top:2px solid #444;border-bottom:1px solid #444;}		
		

		#bbsList table td:nth-child(2) {text-align:left;}			
		#bbsList table td:nth-child(4) {font-size:14px;color:#999;}			
		#bbsList table td a {			
			padding: 0 0 0 20px;
			white-space:nowrap;
			overflow: hidden;			
			display:block;			
			max-width:590px;
			text-overflow:ellipsis;
			transition: all 0.3s;			
		}
		#bbsList table td a:hover {color:#5f0080;}
		
		#bbsList .button-box {
			padding: 50px 0 0 0;
		}
		#bbsList .button-box a {
			display:flex;
			margin:auto;
			align-items: center;
			justify-content:center;
			width:200px;height:48px;font-size:17px;color:#fff;border-radius:3px;border:0;
			background:#333;cursor:pointer;		
			transition: all 0.3s;
			
		}
		#bbsList .button-box a:hover {background:#111;}
		#bbsList .pagebtn-box {padding: 30px 0; text-align:center;}
		#bbsList .pagebtn-box a {
			display:inline-flex;width:30px;height:30px;border:1px solid #ddd;color:#555;
			font-size:14px;align-items:center;justify-content:center;border-radius:3px;		
		}
		#bbsList .pagebtn-box a.page-btn {margin: 0 1px;}
		#bbsList .pagebtn-box a.prev-btn {width:50px; margin:0 10px 0 0; border:0 solid #fff; color:#666;}
		#bbsList .pagebtn-box a.next-btn {width:50px; margin:0 0 0 10px; border:0 solid #fff; color:#666;}
		
	</style>

</body>
</html>