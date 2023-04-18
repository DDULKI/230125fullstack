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
        public static String arrHap(int[][] arr){
            int hap =0; 
            String txt ="";
            txt += "<table>"; 
            for(int i=0; i<arr.length; i++){
                hap=0;
                txt +="<tr>";
                for(int j=0; j<arr[i].length; j++){
                    hap += arr[i][j];
                    txt +="<td>" + arr[i][j] + "</td>";
                }
                txt += "<td>" + hap +"</td></tr>";
            }
            txt += "</table>";
            return txt;
        }

    %>
    <%
        int[][] arr ={
            {1,2,3,4,5},
            {6,7,8,9,10},
            {11,12,13,14,15},
            {16,22,33,44,55},
            {23,55,33,44,33}
        };

        out.println(arrHap(arr));

    %>



</body>
</html>