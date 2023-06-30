<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>
<%@ page import = "java.util.*" %>


<% request.setCharacterEncoding("UTF-8");%>


<%
   
    ArrayList<String> list = new ArrayList<>();
    list.add("딸기");
    list.add("사과");
    list.add("수박");
    list.add("앵두");
    list.add("망고");
    list.add("복숭아");
    list.add("참외");
    list.set(0,"포도");
    list.set(1,"블랙사파이어");
    list.remove(3); // 앵두 없어짐
    list.clear();

    out.println("<hr>");
    out.println(list);

    out.println("<ol>");
    for(int i=0; i<list.size(); i++){
        out.println("<li>" +  list.get(i) + "</li>");
    }
    out.println("</ol>");


%>