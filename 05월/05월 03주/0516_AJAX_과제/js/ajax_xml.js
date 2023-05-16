

(($) => {
  $('.pension-xml-btn').on({
    click(e) {
      e.preventDefault();

      $.ajax({
        url: './data/관광펜션업_영업실태조사.xml',
        type: 'GET',
        dataType: 'XML',
        success(res) {
          let arr = [];
          console.log($(res).find('Row'));
          $.each($(res).find('Row'), function(idx, item){
            arr[idx] = [];
            console.log(idx,item);
            arr[idx][0] = $(item).find('Data').text();
          })
        },
        error(err) {
          console.log(err);
        }
      });
    }
  });
})(jQuery);
