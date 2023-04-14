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
    <title>폼데이터 AJAX JSP 서버사이드렌더링 응답</title>
    <script src="./js/jquery-2.2.4.min.js"></script>
    <style>
        *{margin: 0; padding: 0; vertical-align: middle; box-sizing: border-box;}
        ul{list-style: none;}

        #wrap {width: 100%; padding: 100px 0 0 0;}
        #wrap form { width: 600px; margin: 0 auto; padding: 50px; background: #f7f7f7; }
        #wrap form ul{width: 100%; padding: 20px 0;}
        #wrap form ul li{width: 100%; padding: 10px 0;}
        #wrap form ul li input{width: 100%; height: 45px; border: 1px solid #ccc; padding: 0 15px; border: 0;font-size: 14px;}
        #wrap form button {width: 100%; height: 45px; background: #d99; border-radius: 3px; border:0; color: #f7f7f7; cursor: pointer;}
        #wrap form button:hover {background: #08a; }

        #wrap h2 {text-align: center; font-weight: 700; color: #666; padding: 50px 0 0 0;}
        #wrap .result {
            color:#39c; font-size: 20px; text-align: center; padding: 20px 0; line-height: 140%; border: 1px solid #ccc;
            width: 600px; margin: 50px auto; padding: 50px; background: #f7f7f7; 
        }
    </style>

</head>
<body>
    
    <div id="wrap">
        <form>
            <ul>
                <li><input type="text" id="name" name="name" placeholder="이름을 입력하세요."></li>
                <li><input type="text" id="hp" name="hp" placeholder="휴대폰 번호를 입력하세요."></li>
            </ul>
            <button type="button" class="submit-btn">AJAX 전송</button>
        </form>

        <h2>AJAX Response Result</h2>
        <div class="result"></div>
    </div>
    
    <script>

        (($)=>{

            $('.submit-btn').on({
                click(e){
                    e.preventDefault();

                    const formData = {
                        name : $('#name').val(),
                        hp : $('#hp').val()
                    }
                    
                    // ajax 구현 
                    $.ajax({
                        url:'./j02_form_data_ajax_response.jsp',
                        type:'POST',
                        data: formData,
                        success(res){
                            console.log(res);
                            $('.result').html(res);
                        },
                        error(err){
                            console.log('AJAX 실패!' + err);
                        }
                    });
                }
            });

        })(jQuery);


    </script>


</body>
</html>