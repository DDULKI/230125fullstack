(($) => {
  $('.pension-txt-btn').on({
    click(e) {
      e.preventDefault();

      $.ajax({
        url: './data/관광펜션업_영업실태조사.txt',
        type: 'GET',
        dataType: 'TEXT',
        success(res) {
          console.log(res);
          let arr = [];
          const result = res.split('\r\n');
          $.each(result, function(i,item){
            $('.tbody-pension-txt').empty();

            arr[i] = [];
            arr[i][0] = Number(item.split(' ')[0]); // 번호
            arr[i][1] = String(item.split(' ')[1]); // 개방서비스명
            arr[i][2] = String(item.split(' ')[2]); // 인허가일자
            arr[i][3] = String(item.split(' ')[3]); // 인허가일자
            arr[i][4] = String(item.split(' ')[4]); // 인허가취소일자
            arr[i][5] = String(item.split(' ')[5]); // 영업상태명
            arr[i][6] = String(item.split(' ')[6]); // 상세영업상태명
            arr[i][7] = String(item.split(' ')[7]); // 소재지우편번호
            arr[i][8] = String(item.split(' ')[8]); // 도로명우편번호
            arr[i][9] = String(item.split(' ')[9]); // 시설면적
          });

          console.log(arr);
        },
        error(err) {
          console.log(err);
        }
      });
    }
  });
})(jQuery);
