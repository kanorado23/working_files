  $(document).on('click', 'img', function(){
              var sr=$(this).attr('src'); 
              $('#mimg').attr('src',sr);
              $('#myModal').modal('show');
        });
 