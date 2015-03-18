jQuery(function($){

    $('.block').each(function(){
        $this = $(this);
        $this.click(function(){
            $(this).toggleClass('active');
        });
    });

});