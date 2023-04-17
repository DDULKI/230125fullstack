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
        static String method1(String str){
            return str;
        }

        static int method2(String str, int[][] arr) {
            String txt = ""; 
            txt += "<table>";
            for(int i=0; i<arr.length; i++){
                for(int j=0; j<arr[i].length; j++){
                    hap[i] += arr[i][j];
                    txt +="<tr><td>" + hap[i]+=arr[i][j] + " " + "</td></tr>";
                }
                txt += "</table>";

                return txt;
            }
        }
    %>

    <%
        int[][] arr= {
            {1,2,3,4,5},
            {6,7,8,9,10},
            {11,12,13,14,15}, 
            {16,17,18,19,20},
            {21,22,23,24,25}
        };

        int [] hap = new int[arr];

        out.println("<div>" + method1(" 누적합 " ) + "</div>")
        out.println("<div>" + method2(" 합계 %5d "+ hap[i]) + "</div>")
    %>

    <style>
        body{text-align: center;}
        table {width:400px; margin: 0 auto; }
        table td {width: 100%; height: 40px; text-align: center; border: 1px solid #ccc; font-size: 15px; color: #c33;}
    </style>
</body>
</html>