<%@ 
    page 
    language="java" 
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import = "kurly.UserDAO" %>

<% 
    request.setCharacterEncoding("UTF-8"); 
%>

<jsp:useBean id="userDTO" class="kurly.UserDTO" scope="page"/>
<jsp:setProperty name="userDTO" property="user_id" />
<jsp:setProperty name="userDTO" property="user_pw" />
<jsp:setProperty name="userDTO" property="user_name" />
<jsp:setProperty name="userDTO" property="user_email" />
<jsp:setProperty name="userDTO" property="user_hp" />
<jsp:setProperty name="userDTO" property="user_addr" />
<jsp:setProperty name="userDTO" property="user_gender" />
<jsp:setProperty name="userDTO" property="user_birth" />

<%
    if(
           userDTO.getUser_id()==null
        || userDTO.getUser_pw()==null
        || userDTO.getUser_name()==null
        || userDTO.getUser_email()==null
        || userDTO.getUser_hp()==null
        || userDTO.getUser_addr()==null
        || userDTO.getUser_gender()==null
        || userDTO.getUser_birth()==null
    ){
%>
    <script>
        alert("빈값은 허용하지 않습니다. \n확인하고 다시시도해주세요");
        history.go(-1);
    </script>
<%
    }
    else{
        UserDAO userDAO = new UserDAO();
        int result = userDAO.signup(userDTO);
%>
        

        <% 
            if(result==1){ 
            // 1.  회원가입완료 그러면 세션(session)을 설정(setAttribute 어트리뷰트)해준다.
            //     (로그인을 유진시킨다.)  세션 가져오기 session.getAttribute("user_id");
            session.setAttribute("user_id", userDTO.getUser_id());    
        %>
            <script>                
                alert("감사합니다. 회원가입이 완료 되었습니다.");
                location.href = './kurly_user_main.jsp';
            </script>
        <% 
                }
            else {
        %>
                <script>
                    alert( <%= result %> );
                    alert("회원가입이에 실패 했습니다. \n아이디를 확인하고 다시 시도하세요");
                    history.go(-1);
                </script>
        <%
            }
        %>


<%
    }
%>


