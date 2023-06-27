

        $(document).ready(function() {

            $('#scroll-to-content').click(function(e) {
                e.preventDefault();

                $("html, body").animate({
                    scrollTop: $(".othercontent-header").offset().top
                }, 'slow');
            });

        });
    
    
    
    