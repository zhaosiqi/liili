 $(function(){
    var num=0;
    var next=0;
    var ww=$(window).width();
    $(".imgbox>a:gt(0)").css("left",$(".imgbox>a").width()+"px");
    var flag=true;
    function move(type){
      type=type||"next";
      if(!flag){
        return;
      }
      flag=false;
      $(".imgbox>a").stop(false,false)
      if(type=="pre"){
        next--;
        if(next<0){
          next=$(".imgbox>a").length-1;
        }
        $(".imgbox>a").eq(next).css("left","-"+$(".imgbox>a").width()+"px").animate({left:0});
        $(".imgbox>a").eq(num).animate({left:ww},function(){
          flag=true;
        });
      }
      else if(type=="next"){
        next++;
        if(next>=$(".imgbox>a").length){
          next=0;
        }
        $(".imgbox>a").eq(next).css("left",$(".imgbox>a").width()+"px").animate({left:0});
        $(".imgbox>a").eq(num).animate({left:"-"+$(".imgbox>a").width()},function(){
          flag=true;
        });
      }
      $(".banner>.btn>li").eq(next).addClass("active");
      $(".banner>.btn>li").eq(num).removeClass("active")
      num=next;
    }
    var t =  setInterval(move,2000)
   $(".banner").mouseover(function(){
    clearInterval(t)
   }).mouseout(function(){
    t =  setInterval(move,2000)
   })
  $(".leftbtn").click(function(){
    move("pre");
  })
  $(".rightbtn").click(function(){
    move("next");
  })
  $(".banner>.btn li").click(function(){
    next=$(this).index()
    if(num>next){
      next=$(this).index()-1
      move("next")
    }else if(num<next){
      next=$(this).index()+1
      move("pre")
    }
  })




$(".agm_er").hide();


/*nav-footer文字*/
$(".nf_er").show();
$(window).resize(function(){
var cw=document.documentElement.clientWidth;
    if(cw<800){
        $(".nf_er").hide();
        $('.nf_n').click(function(){
          var index=$(this).index(".nf_n");
        $('.nf_er').eq(index).stop(true,false).slideToggle();
        return false;
        });
    }else{
       $(".nf_er").show();
        var index=$(this).index(".nf_n");
        $('.nf_er').eq(index).stop(false,false);
    }

});

$(".ac-gn-menu li").eq(0).click(function(){
  $(".header").css("display","none");
  $(".bannerbox").css("display","none");
  $(".show").css("display","none");
  $("footer").css("display","none");
  $(".agm-tanchu").fadeIn("slow");
});
$(".agm-tanchu-header a").eq(0).click(function(){
  $(".header").css("display","block");
  $(".bannerbox").css("display","block");
  $(".show").css("display","block");
  $("footer").css("display","block");
  $(".agm-tanchu").fadeOut("slow");

});
  $(window).resize(function(){
      var ws=$(".agm-tanchu").width();
      console.log(ws);
      if(ws<800){
      $("agm-tanchu").css("display","block");
     }
     if(ws>800){
      $(".agm-tanchu").css("display","none");
      $(".header").css("display","block");
      $(".bannerbox").css("display","block");
      $(".show").css("display","block");
      $("footer").css("display","block");
     }

   });
  $(".agm-tanchu-dom ul li").eq(6).click(function(){
    $(".col-b-1").css("display","none");
    $(".agm-tanchu-header ul li").eq(1).css("display","none");
    $(".col-f-2").eq(0).css("display","block");
    $(".col-b-5").css("display","block");
    $(".col-b-6").css("display","block");
  })
  $(".col-f-2").eq(0).click(function(){
    $(".col-b-1").css("display","block");
    $(".agm-tanchu-header ul li").eq(1).css("display","block");
    $(".col-f-2").eq(0).css("display","none");
    $(".col-b-5").css("display","none");
    $(".col-b-6").css("display","none");
  })
})


