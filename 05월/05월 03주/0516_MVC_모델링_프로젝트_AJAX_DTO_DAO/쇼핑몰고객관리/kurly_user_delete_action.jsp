<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import = "kurly.UserDAO"%>

<% request.setCharacterEncoding("UTF-8");%>

<jsp:useBean id="userDTO" class="kurly.UserDTO" scope="page"/>
<jsp:setProperty name="userDTO" property="user_id"/>
<jsp:setProperty name="userDTO" property="user_pw"/>


<% 
    if (
           userDTO.getUser_id()==null || userDTO.getUser_pw()==null
    ){
%>
    <script>
        alert("빈값은 허용하지 않습니다. \n확인하고 다시 시도해 주세요.");
        history.go(-1);
    </script>
<%
    }
    else {
        UserDAO userDAO = new UserDAO();
        int result = userDAO.delete(userDTO);
%>
        <% 
            if(result>=1){
            session.invalidate();
        %>
                <script>
                    alert("삭제완료:)♥");
                    window.location.href ="./kurly_user_main.jsp";
                </script>
        <%
            }
            else if(result==0){
        %>
            <script>
                alert(<%= result %>);
                alert("회원탈퇴 실패");
                history.go(-1);
            </script>
        <%
            }
           
            else if(result==-1){
        %>
            <script>
                alert(<%= result %>);
                alert("회원탈퇴 되었습니다.");
                window.location.href ="./kurly_user_main.jsp";
            </script>
        <%
            }
            else {
        %>
            <script>
                alert(<%= result %>);
                alert("회원탈퇴 실패. \n 아이디 비밀번호 다시 입력해 주세요. ");
                window.location.href="kurly_user_delete.jsp";
            </script>
            <%
            }
            %>
        <%
        }
        %>