<?
   
    // 관리자 서버 

    // http://ddulki4994.dothome.co.kr/myadmin/
    // http://ddulki4994.dothome.co.kr/signup_db/form_data_insert.php


    // CORS 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');    

    // DB 인증
    $db_server    = 'localhost';
    $db_user_name = 'ddulki4994';
    $db_password  = 'qjwm4547!';
    $db_name      = 'ddulki4994';

    $conn = mysqli_connect($db_server, $db_user_name, $db_password, $db_name);
    mysqli_set_charset($conn, 'utf8');

    // 리액트 폼데이터 받는다. 
    // 변수에 저장
    $user_id        = $_POST['user_id']; // 보낸변수
    $user_pw        = $_POST['user_pw']; 
    $user_name      = $_POST['user_name']; 
    $user_email     = $_POST['user_email']; 
    $user_hp        = $_POST['user_hp']; 
    $user_addr      = $_POST['user_addr']; 
    $user_gender    = $_POST['user_gender']; 
    $user_birth     = $_POST['user_birth']; 
    $user_app_input = $_POST['user_app_input']; 
    $user_service   = $_POST['user_service']; 
    $user_gaib_date = $_POST['user_gaib_date'];
  

    // DB 저장
    $sql = "INSERT INTO signup_table(id, pw, irum, email, hp, addr, gender, birth, chooga, service, gaib_date)
            VALUES('$user_id','$user_pw','$user_name','$user_email','$user_hp','$user_addr','$user_gender','$user_birth','$user_app_input','$user_service','$user_gaib_date')"; // 절대 '' 
    $result = mysqli_query($conn, $sql);  // 쿼리 실행

    if(!$result){
        echo("데이터베이스 테이블에 회원 정보 저장 실패!");
    }
    else {
        echo("데이터베이스 테이블에 회원 정보 저장 성공!");
    }



?>

