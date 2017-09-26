              
$( window ).on( "load", function() {
            // JSON API to access Flickr               
            $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags=restaurants&format=json&jsoncallback", displayImages);

            function displayImages(data) {                                                                                                                                 
                var iCount = 0;                             
                var htmlString = "<div class=row>";                 

                $.each(data.items, function(i,item){
                    if (iCount < 18) {
                        var sourceSquare = (item.media.m).replace("_m.jpg", "_q.jpg");      

                        htmlString += '<a class="btn" data-toggle="modal" data-target="#myModal">';
                        htmlString += '<img src="' + sourceSquare + '">';
                        htmlString += '</a>';
                    }
                    iCount++;
                });     

            // HTML into #images DIV
            $('#images').html(htmlString + "</div>");

            // Close down the JSON function call
            
        // End jQuery function  
        
    