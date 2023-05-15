// 제이쿼리 
// AJAX => csv 데이터 처리 구현
(($)=>{
    
    $('.member-grade-csv-btn').on({
        click(e){
            e.preventDefault();
            
            $.ajax({
                url:'./data/member.csv',
                type:'GET',
                dataType:'TEXT', //XML, TEXT(CSV), JSON
                success(res){                    
                    console.log( res );
                    // 1. 줄단위로 분리하고
                    //    줄끝을 검색  => \r\n      
                    // 2. 칸단위로 분리한다.
                    //    필드(칸)별 분리작업
                    //    공백을 기준으로 분리한다.
                    // console.log( res.split('\r\n') );
                    let arr = [];
                    const result = res.split('\r\n');
                    $.each(result, function(i, item){
                        //console.log( idx, Number(item.split(' ')[0]), String(item.split(' ')[1]), Number(item.split(' ')[2]), Number(item.split(' ')[3]), Number(item.split(' ')[4] )    );  //공백을 기준으로 칸을 분리한다.
                        arr[i] = [];
                        arr[i][0] = Number(item.split(',')[0]); // 학번
                        arr[i][1] = String(item.split(',')[1]); // 이름
                        arr[i][2] = Number(item.split(',')[2]); // 국어
                        arr[i][3] = Number(item.split(',')[3]); // 영어
                        arr[i][4] = Number(item.split(',')[4]); // 수학
                        arr[i][5] = arr[i][2]+arr[i][3]+arr[i][4] //총점
                        arr[i][6] = Math.round(arr[i][5]/3);      // 평균
                    });
                    console.log( arr );

                    // 석차 => 동등석차 알고리즘 구현하시오
                    let 석차=1;
                    for(let i=0; i<arr.length; i++){
                       석차=1;
                       for(let j=0; j<arr.length; j++){
                          if(arr[i][6] < arr[j][6]){
                               석차++;
                          } 
                       }
                       arr[i][7] = 석차;  //석차
                    }

                    // 정렬 => 학번의 올름차순(ASC) 알고리즘 구현하시오
                    let imsi = '';
                    for(let i=0; i<arr.length-1; i++){  // i = 0 ~ n-1
                        for(let j=i+1; j<arr.length; j++){  // j = 0+1 ~ n
                            if( arr[i][0] > arr[j][0] ){
                                for(let k=0; k<arr[i].length; k++){  // k = 0 ~ 7  
                                    imsi =  arr[i][k];
                                    arr[i][k] = arr[j][k];
                                    arr[j][k] = imsi;
                                }
                            }
                        }
                    }

                    // 출력 바인딩
                    $('.tbody-grade-csv').empty();
                    for(let i=0; i<arr.length; i++){  // 줄(Row)
                        $('.tbody-grade-csv').append(`<tr  data-key="${arr[i][0]}">`);
                        for(let j=0; j<arr[i].length; j++){ // 칸(Column)
                            $('.tbody-grade-csv').append(`<td>${arr[i][j]}</td>`);
                        }
                        $('.tbody-grade-csv').append(`</tr>`);
                    }
                    // $('.tbody-grade-csv').listview("refresh"); // 바인딩 새로고침 jQuery 모바일 전용

                },
                error(err){
                    console.log(`AJAX 실패! ${err}`);
                }
            });

        }
    });



})(jQuery);

