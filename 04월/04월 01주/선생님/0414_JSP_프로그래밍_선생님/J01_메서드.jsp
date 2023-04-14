<%@ 
    page 
    language="java" 
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
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

    <%!
        //  void 없는 메서드 : 리턴값 있는 메서드1
        static String method1(String str){
            return str;
        }

        static String method2(String str, int num){
            String txt = "";
            txt += "<table>";
               for(int i=0; i<num; i++){
                txt +="<tr><td>" + (i+1) + " " +  str + "</td></tr>";
               } 
            txt += "</table>";

            return txt;
        }
    %>

    <%
        out.println("<h1>" + method1("JSP 문자열 매개변수")  + "</h1>");
        out.println("<div>" + method2("JSP 안녕하세요!", 10)  + "</div>");
    %>

    <style>
        body {
            text-align: center;
        }
        table {width:400px;margin:0 auto;}
        table td {width:100%;height:40px;text-align:center;border:1px solid #ccc;font-size: 15px;color:#c33;}
    </style>
</body>
</html>