<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>
<% 
    request.setCharacterEncoding("UTF-8");
%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
   
</head>
<body>

    <%
        int row = Integer.parseInt(request.getParameter("row"));
        int col = Integer.parseInt(request.getParameter("col"));

        int[][] arr; 
    %>
    <%
        arr = new ine[row][col];

        out.println("<table>");
        out.println("<tr>");
        out.println("<td>" + String.format("줄수 %4d",row) + "</td>");
        out.println("<td>" + String.format("칸수 %4d",col) + "</td>");
        for(int i=0; i<arr.length; i++){
            out.println("/tr>")
            for(int j=0; j<arr[i].length; j++){
                arr[i][j] = (int)(Math.random()*26+65);
            out.println("<td>" + String.format("%4c",arr[i][j] + "</td>")
            }
            out.println("</tr>")
        }
        out.println("</tr>")
        out.println("</table>")
        
    %>
    <style>
        *{margin: 0;padding: 0;vertical-align: middle;box-sizing: border-box;}
        body {width: 1100px ;margin: 0 auto;}
        table {margin: 100px auto;border-collapse: collapse; text-align: center;}
        th,td {width: 100px; height: 100px; border: 1px solid #000; }
        th {border: 1px solid #58f;background: #fff; }
        td {border: 1px solid #58f;background: #eee; }
    </style>

</body>
</html>