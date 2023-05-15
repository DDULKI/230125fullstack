;(($)=>{

    $('.member-grade-xml-btn').on({
        click(){
            $.ajax({
                url:'./data/member.xml',
                type:'GET',
                dataType:'XML',
                success(res){
                    let a = [];
                    // console.log(`AJAX 성공!`);
                    // console.log(res);
                    // 1. 줄단위 가져온다.
                    // 2. 칸단위 가져와서 배열에 저장한다.
                    //  console.log( $(res).find('record') );
                    $.each($(res).find('record'), function(i, item){
                        a[i] = []; 
                        a[i][0] = $(item).find('hakbun').text();
                        a[i][1] = $(item).find('irum').text();
                        a[i][2] = $(item).find('hakgwa').text();
                        a[i][3] = $(item).find('addr').text();
                        a[i][4] = $(item).find('hp').text();
                    });
                    console.log( a );   
                    // $(res).find('record').each(function(i, item){  
                    //     a[i] = [];                      
                    //     console.log( i, $(item).find('hakbun').text(),  $(item).find('irum').text(), $(item).find('hakgwa').text() , $(item).find('addr').text(), $(item).find('hp').text() );
                    //     a[i][0] = $(item).find('hakbun').text();
                    //     a[i][1] = $(item).find('irum').text();
                    //     a[i][2] = $(item).find('hakgwa').text();
                    //     a[i][3] = $(item).find('addr').text();
                    //     a[i][4] = $(item).find('hp').text();
                    // });
                    $('.tbody-grade-xml').empty();
                    for(let i=0; i<a.length; i++){
                        $('.tbody-grade-xml').append(`<tr>`);
                        for(let j=0; j<a[i].length; j++){
                            $('.tbody-grade-xml').append(`<td>${a[i][j]}</td>`);
                        }
                        $('.tbody-grade-xml').append(`</tr>`);
                    }

                },
                error(err){
                    console.log(`AJAX 실패! ${err}`);
                },
            });
        }
    });


})(jQuery);