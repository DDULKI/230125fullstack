;(($)=>{

    $.ajax({
        url:'./data/member.xml',
        type:'GET',
        success(res){ // xml 데이터 파라미터 값에서 검색 list > name 
            // console.log(res);
            // console.log($(res).find('list') );
            // console.log($(res).find('name') .text());
            // 제이쿼리 each()
                // console.log(idx, $(item).find('name').text());
                // console.log(idx, $(item).find('kor').text()); 
                // console.log(idx, $(item).find('eng').text()); 
                // console.log(idx, $(item).find('mat').text()); 
            $(res).find('list').each(function(idx,item){
                console.log(idx, $(item).find('name').text(), Number($(item).find('kor').text()),  Number($(item).find('eng').text()),  Number($(item).find('mat').text()) );
      
            });

        },
        error(err){

        }
    });
    
})(jQuery);