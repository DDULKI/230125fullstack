;(($)=>{

    $('.member-grade-xml-btn').on({
        click(e){
            e.preventDefault();
            $.ajax({
                url:'./data/member.xml',
                type: 'GET', 
                dataType: 'XML',
                success(res){
                    let arr = [];
                    //console.log(`AJAX 성공!`)
                    //console.log(res);
                    // 1. 줄단위 가져온다.  
                    // 2. 칸단위 가져와서 배열에 저장한다. 
                    console.log($(res).find('record'));
                    
                    $.each($(res).find('record'), function(idx, item){
                        arr[idx] = [];
                        console.log(idx, item);
                        arr[idx][0] = $(item).find('hakbun').text();
                        arr[idx][1] = $(item).find('name').text();
                        arr[idx][2] = $(item).find('hakgwa').text();
                        arr[idx][3] = $(item).find('addr').text();
                        arr[idx][4] = $(item).find('hp').text();
                    });

                    // $(res).find('record').each(function(idx,item){
                    //     arr[idx] = [];
                    //     console.log(idx, item);
                    //     console.log(idx,$(item).find('hakbun').text(), $(item).find('name').text(), $(item).find('hakgwa').text()), $(item).find('addr').text(), $(item).find('hp').text();
                    //     arr[idx][0] = $(item).find('hakbun').text();
                    //     arr[idx][1] = $(item).find('name').text();
                    //     arr[idx][2] = $(item).find('hakgwa').text();
                    //     arr[idx][3] = $(item).find('addr').text();
                    //     arr[idx][4] = $(item).find('hp').text();
                    // });
                    // console.log(arr);

                    for(let i=0; i<arr.length; i++){
                        $('.tbody-grade-xml').append('<tr>');
                        for(let j=0; j<arr[i].length; j++){
                            $('.tbody-grade-xml').append(`<td>${arr[i][j]}</td>`);
                        }
                        $('.tbody-grade-xml').append(`</tr>`);
                    }

                },
                error(err){
                    console.log(`AJAX 실패! ${err}`);
                }
            })
        }
    })

})(jQuery);