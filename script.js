$(function(){
    //slider
    
    let currentidx = 0;
    let imagecount = $("#slider ul li ").length
    
    $("#slider ul li").eq(currentidx).show()

    $("#next").click(function(){
        let nextindex = currentidx+1;
        if(nextindex >= imagecount){
            nextindex = 0;
        }
        
        //slide left slide right
        $("#slider ul li").eq(currentidx).css({left:0})
        $("#slider ul li").eq(currentidx).animate({left:-650}, 1000,)
        $("#slider ul li").eq(nextindex).css({display:"block", left:650})
        $("#slider ul li").eq(nextindex).animate({left:0}, 1000)

        currentidx = nextindex
    })

    $("#prev").click(function(){
        let nextindex = currentidx-1;
        if(nextindex < 0){
            nextindex = imagecount-1;
        }
        
        $("#slider ul li").eq(currentidx).css({left:0})
        $("#slider ul li").eq(currentidx).animate({left:650})
        $("#slider ul li").eq(nextindex).css({display:"block", left:-650})
        $("#slider ul li").eq(nextindex).animate({left:0})

        currentidx = nextindex
    })

    setInterval(function(){ //gerak sendiri
        $("#next").click()
    }, 3000) //buat waktu

    //slider

});
