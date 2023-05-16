// (($)=>{
//     $('.pension-csv-btn').on({
//         click(e){
//             e.preventDefault();

//             $.ajax({
//                 url:'../data/관광펜션업_영업실태조사1.csv',
//                 type: 'GET',
//                 dataType: 'TEXT',
//                 success(res){
//                     console.log(res);
//                     let arr =[];
//                     const result = res.split('\r\n');
//                     $.each(result, function(i,item){
//                         $('.tbody-pension-csv').empty();

//                         arr[i] = [];
//                         arr[i][0] = Number(item.split(',')[0]);
//                         arr[i][1] = String(item.split(',')[1]);
//                         arr[i][2] = String(item.split(',')[2]);
//                         arr[i][3] = String(item.split(',')[3]);
//                         arr[i][4] = String(item.split(',')[4]);
//                         arr[i][5] = String(item.split(',')[5]);
//                         arr[i][6] = String(item.split(',')[6]);
//                         arr[i][7] = String(item.split(',')[7]);
//                         arr[i][8] = String(item.split(',')[8]);
//                     });
//                     console.log(i, item);

//                     const $tbody = $('.tbody-pension-csv');
//                     for (let i = 0; i<arr.length; i++){
//                         $tbody.append("<tr>");
//                         for(let j = 0; j <arr[i].length; j++){
//                             $tbody.append(`<td>${arr[i][j]}</td>`);
//                         }
//                         $tbody.append("</tr>");
//                     }
//                 },
//                 error(err){
//                     console.log(err);
//                 }
//             });
//         }
//     });
// })(jQuery);




(($) => {
  $('.pension-csv-btn').on({
    click(e) {
      e.preventDefault();

      $.ajax({
        url: './data/관광펜션업_영업실태조사.csv',
        type: 'GET',
        dataType: 'text',
        success(res) {
          console.log(res);
          let arr = [];
          const result = res.split('\r\n');
          $('.tbody-pension-csv').empty();

          $.each(result, function (i, item) {
            arr[i] = item.split(',');

          });
          console.log(arr);

          const $tbody = $('.tbody-pension-csv');
          for (let i = 0; i < arr.length; i++) {
            $tbody.append('<tr>');
            for (let j = 0; j < arr[i].length; j++) {
              $tbody.append(`<td>${arr[i][j]}</td>`);
            }
            $tbody.append('</tr>');
          }
          console.log(arr);
        },
        error(err) {
          console.log(err);
        }
      });
    }
  });
})(jQuery);
