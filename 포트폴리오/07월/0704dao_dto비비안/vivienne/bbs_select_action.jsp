<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>

<%@
    page
    language="java"
    contentType="application/json; charset=UTF-8"
    pageEncoding= "UTF-8"
%>

<%@ page import="bbs.BbsDAO"%>
<%@ page import="bbs.BbsDTO"%>
<%@ page import="java.util.*"%>

<% request.setCharacterEncoding("UTF-8");%>


<%
    String user_email = request.getParameter("user_email");
    BbsDAO bbsDAO = new BbsDAO();
    List<BbsDTO> list = bbsDAO.select(user_email);
    
    String jsonData = "{ \"result\": [";
    int cnt = 0;
    for(BbsDTO bbsDTO : list){
        cnt++;
        if(cnt < list.size()){
            jsonData += "{ \"bbsId\" : \"" + bbsDTO.getBbsId() + "\","
                     +   "\"subject\" : \"" + bbsDTO.getSubject() + "\","
                     +   "\"content\" : \"" + bbsDTO.getContent() + "\""
                     + "},";
        }
        else{
            jsonData += "{ \"bbsId\" : \"" + bbsDTO.getBbsId() + "\","
                     +   "\"subject\" : \"" + bbsDTO.getSubject() + "\","
                     +   "\"content\" : \"" + bbsDTO.getContent() + "\""
                     + "}";
        }
    }
    jsonData += "]}";
    response.getWriter().write(jsonData);
%>