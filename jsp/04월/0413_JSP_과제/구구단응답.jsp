<%@ 
  page 
  language="java" 
  contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"
%>

<% 
    // 폼 전송 받은 한글 깨짐현상 셋팅 인코딩
    // 리퀘스트.셋캐릭터인코딩("UTF-8");
       request.setCharacterEncoding("UTF-8");
%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <%
        int edan = Integer.parseInt(request.getParameter("edan"));
        int samdan = Integer.parseInt(request.getParameter("samdan"));
        int sadan = Integer.parseInt(request.getParameter("sadan"));
        int odan = Integer.parseInt(request.getParameter("odan"));
        int yugdan = Integer.parseInt(request.getParameter("yugdan"));
        int childan = Integer.parseInt(request.getParameter("childan"));
        int paldan = Integer.parseInt(request.getParameter("paldan"));
        int gudan = Integer.parseInt(request.getParameter("gudan"));

        String[] gugudan = request.getParameterValues("gugudan");
    %>

    <%
        out.println("<table>");
        out.println("<tr>");
            out.println("<th>"+ edan + "</th>");
            out.println("<th>"+ samdan + "</th>");
            out.println("<th>"+ sadan + "</th>");
            out.println("<th>"+ odan + "</th>");
            out.println("<th>"+ yugdan + "</th>");
            out.println("<th>"+ childan + "</th>");
            out.println("<th>"+ paldan + "</th>");
            out.println("<th>"+ gudan + "</th>");
        out.println("</tr>");

        out.println("<tr>");
        

       out.println("</tr>");
       out.println("</table>");

    %>
    
</body>
</html>