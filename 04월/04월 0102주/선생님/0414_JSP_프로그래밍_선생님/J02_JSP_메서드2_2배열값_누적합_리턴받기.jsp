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
    /*

    5행 5열 
    각행마다 누적합 구하고
    테이블로 출력
    1 2 3 4  5     =>  15   
    6 7 8 9 10     =>  40
    11 12 13 14 15 =>  65 
    16 17 18 19 20 => 80
    21 22 23 24 25 => 115 

    */


public static String arrHap(int[][] arr) {
    int hap = 0;
    String txt= "";
    txt += "<table>";
    for(int i=0;i<arr.length;i++) {
        hap = 0;
        txt += "<tr>";
        for(int j=0;j<arr[i].length;j++) {
            hap = hap + arr[i][j];
            txt += "<td>" + arr[i][j] + "</td>";
        }
        txt += "<td>" + hap + "</td></tr>";
    }
    txt += "</table>";
    return txt ;
}


%>

<%

int[][] arr = {
    {1, 2, 3, 4, 5},
    {6, 7, 8, 9, 10},
    {11, 12, 13, 14, 15},
    {16, 17, 18, 19, 20},
    {21, 22, 23, 24, 25}
};

out.println( arrHap( arr ) ) ;

%>



<style>
     body {
            text-align: center;
        }
    table {margin:0 auto;}
        
    td {
        border: 1px solid #c00;
        text-align: right;
        padding:10px;
    }
    td:last-child {
        background: #fcaaaa;
    }
</style>
</body>
</html>