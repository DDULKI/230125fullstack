// (($)=> {
//  $('.chunan-sports-txt-btn').on({
//     click(e){
//         e.preventDefault();
//         $.ajax({
//             url:'./data/sports.txt',
//             type:'GET',
//             dataType: 'TEXT',
//             success(res){
//                 let arr = [];
//                 const result = res.split('\n');
//                 $.each(result, function(i, item){
//                     // console.log(item);
//                     arr[i] = [];
//                     arr[i][0] = item.split(' ')[0]; // 소재지
//                     arr[i][1] = item.split(' ')[1]; // 운동기구1
//                     arr[i][2] = item.split(' ')[2]; // 운동기구2
//                     arr[i][3] = item.split(' ')[3]; // 운동기구3
//                     arr[i][4] = item.split(' ')[4]; // 운동기구4
//                     arr[i][5] = item.split(' ')[5]; // 운동기구5
                     
//                 });
//                 for(let i=0; i<arr.length; i++){
//                     $('tbody-sports-txt').append("<tr>");
//                     for(let j=0; j<arr[i].length; j++){
//                         $('tbody-sports-txt').append(`<td>${arr[i][j]}</td>`);
//                     }
//                     $('tbody-sports-txt').append("</tr>");
//                 }
//             },
//             error(err){
//                 console.log(err);
//             }
//         })
//     }
//  })
// })(jQuery);

(($) => {
    $('.chunan-sports-txt-btn').on({
      click(e) {
        e.preventDefault();
        $.ajax({
          url: './data/sports.txt',
          type: 'GET',
          dataType: 'text',
          success(res) {
            function(data){var i=0}
            let arr = [];
            const result = res.split('\n');
            $.each(result, function(i, item) {
              arr[i] = [];
              arr[i][0] = item.split(' ')[0]; // 소재지
              arr[i][1] = item.split(' ')[1]; // 운동기구1
              arr[i][2] = item.split(' ')[2]; // 운동기구2
              arr[i][3] = item.split(' ')[3]; // 운동기구3
              arr[i][4] = item.split(' ')[4]; // 운동기구4
              arr[i][5] = item.split(' ')[5]; // 운동기구5
              arr[i][6] = item.split(' ')[6]; // 운동기구6
              arr[i][7] = item.split(' ')[7]; // 운동기구7
              arr[i][8] = item.split(' ')[8]; // 운동기구8
            });
  
            const $tbody = $('.tbody-sports-txt'); // 수정된 부분
  
            for (let i = 0; i < arr.length; i++) {
              $tbody.append("<tr>"); // 수정된 부분
              for (let j = 0; j < arr[i].length; j++) {
                $tbody.append(`<td>${arr[i][j]}</td>`); // 수정된 부분
              }
              $tbody.append("</tr>"); // 수정된 부분
            }
          },
          error(err) {
            console.log(err);
          }
        });
      }
    });
  })(jQuery);
  

