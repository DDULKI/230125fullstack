<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import = "bbs.BbsDAO" %>
<%@ page import = "bbs.BbsDTO" %>

<%
	request.setCharacterEncoding("UTF-8");
%> 

<jsp:useBean id="BbsDTO" class="bbs.BbsDTO" scope="page"/> 
<jsp:setProperty name='BbsDTO'  property="userId"/>
<jsp:setProperty name='BbsDTO'  property="subject"/>
<jsp:setProperty name='BbsDTO'  property="content"/>  

<%
// 로그인 정보 => 세션 가져오기
String userId = null;
if(session.getAttribute("userId")!=null){ // 세션값이 비어있지 않으면 세션아이디 변수에 저장
	userId = (String)session.getAttribute("userId");
}
%>

	<script>	
		alert(userId);
		
	</script>
	
<%
// 1. 로그인 성공한 회원만 글을 쓸수있도록 제한 조건을 구현한다.
if(userId == null) {
%>	
	<script>
		alert("로그인하세요 \n 회원만이 글을 쓸수 있습니다.");
		location.href="./login.jsp";
	</script>
<%
}
//2. 글 번호 유효성 검증
int bbsId = 0;

if(request.getParameter("bbsId")!=null ){
	bbsId = Integer.parseInt(request.getParameter("bbsId")); // 글번호를 정수형으로 형변환
}

if(bbsId==0){
%>
	<script>	
		alert("유효한 글이 아닙니다.");
		location.href='./bbsListAction.jsp';
	</script>
<%	
}

// 3. BbsDAO.getView(bbsId) 게시글 정보를 가져와서 
//    삭제하고자하는 글번호와 작성자 일치 여부 확인
	BbsDTO bbsDTO = new BbsDAO().getView(bbsId);	
	if(!userId.equals(bbsDTO.getUserId())){ // 지금 삭제할 글번호의 작성자가 아니면
%>
	<script>
		alert("삭제할 권한이 없습니다."); // 작성자 본인만이 삭제 가능하다.
		location.href='./bbsListAction.jsp';
	</script>
<%		
	}
	else{ // 작성자 본인 글이면 그런 삭제를 할 수있다.
		
// 4. 삭제 메서드에 삭제할 글번호를 전달하고 삭제 한다. 
		BbsDAO bbsDAO = new BbsDAO();
		int result = bbsDAO.delete(bbsId);
		
		if(result==-1){ // 데이터베이스 오류 (글 삭제 오류)
%>
			<script>
				alert("글 삭제 실패했습니다.");
				history.go(-1);
			</script>
<%		
		}
		else{
%>
			<script>
				alert("글 삭제 성공했습니다.");
				location.href='./bbsListAction.jsp';
			</script>
<%	
		}
	}
%>	


	
	

</body>
</html>