let scriptNo = 0;   //슬라이드 번호
let control;          //자동슬라이드 제어용

//슬라이드 동작용 스크립트
function scriptSlide(no) {
    scriptNo += no;     //전달받은 값 만큼 슬라이드 번호를 변경
    if( scriptNo > 2 ) scriptNo = 0;   //마지막이면 처음으로
    if( scriptNo < 0 ) scriptNo = 2;   //처음이면 마지막으로

    let newX = (scriptNo * -100) + "%";  //이미지 번호별 가로 위치 계산
    $('.scriptbox').css('marginLeft', newX);   //이미지 박스 가로 위지 이동

    $('.circle').css({    //모든 서클버튼 초기화
        'opacity':'0.5',   'width':'50px', 'background':'white'
    });
    $('.circle').eq(scriptNo).css({   //현재 서클버튼 하이라이트
        'opacity':'1', 'width':'60px', 'background':'#004fffb3'
    });
}

//슬라이드 자동실행하는 스크립트
function playScript() {
    //슬라이드를 3초 간격으로 반복
    control = setInterval('scriptSlide(1)', 4000);    
}

//슬라이드 중지하는 스크립트
function stopScript() {
    clearInterval(control);
}



$(function(){    //페이지가 열릴 때

    playScript();    //자동슬라이드 시작

    $('.scriptbox, .sec1hide').mouseenter(function(){ stopScript(); })
    $('.scriptbox, .sec1hide').mouseleave(function(){ playScript(); })

    //이전 버튼 클릭 -> 슬라이드에 -1 전달
    $('.scriptleft').click(function(){  scriptSlide(-1);  })

    //다음 버튼 클릭 -> 슬라이드에 1 전달
    $('.scriptright').click(function(){  scriptSlide(1);  })

    $('.circle').click(function(){
        scriptNo = $(this).index();
        scriptSlide(0);
    });

});   //end $(function()



//섹션1 슬라이드 함수+기동




let pickNo=0;

function pickSlide(){
    pickNo++;
    if(pickNo>2) pickNo=0;

    let y = (pickNo*-350)+'px';

    $('.pickslide').css('marginTop',y);
}

let pickLoop

function pickPlay(){ pickLoop = setInterval('pickSlide()',5000)}
function pickStop(){clearInterval(pickLoop)}


//섹션2-2 슬라이드 함수



let promoNo=2

function promoPlus(){
        promoNo++;
        if(promoNo>2) promoNo=1
}

function promoMinus(){
    promoNo--;
    if(promoNo<1) promoNo=2
}

//프로모션 버튼 함수

$(window).scroll(function(){
    var top=$(window).scrollTop();

    if(top>1500) {$('#brand').css('opacity','1')}
    if(top>2300) {$('#sec3').css('opacity','1')}

    })

//윈도우 스크롤 함수









$(document).ready(function(){





    $('.menulist').mouseenter(function(){
        $(this).children('#sub').stop().slideDown();
    })
    $('.menulist').mouseleave(function(){
        $(this).children('#sub').stop().slideUp();
    })

    //상단메뉴 슬라이드


   


    //섹션1 슬라이드

    $('.scriptbox').mouseenter(function(){
        $('.script img').css('filter','none')
    })

    
    $('.script1,.hide1').mouseenter(function(){
        $('.hide1').css('bottom','0')
        $('.sec1text').css('top','-30%')
    });
    $('.script2,.hide2').mouseenter(function(){
        $('.hide2').css('bottom','0')
        $('.sec1text').css('top','-30%')
    });
    $('.script3,.hide3').mouseenter(function(){
        $('.hide3').css('bottom','0')
        $('.sec1text').css('top','-30%')
    });

    $('.script1,.hide1').mouseleave(function(){
        $('.hide1').css('bottom','-100%')
      
    });
    $('.script2, .hide2').mouseleave(function(){
        $('.hide2').css('bottom','-100%')
    });
    $('.script3,.hide3').mouseleave(function(){
        $('.hide3').css('bottom','-100%')
    });


    //섹션1 호버


    $('.scbut1').click(function(){
        $('.scriptbox').css('marginLeft',0);
        slideNo=0;
    })

    $('.scbut2').click(function(){
        $('.scriptbox').css('marginLeft','-100%');
        slideNo=1;
    })

    $('.scbut3').click(function(){
        $('.scriptbox').css('marginLeft','-200%');
        slideNo=2;
    })

    //섹션1 이동버튼


    $('.but1').click(function(){
        $('.galllist').css('marginLeft','33.3333%')
    })

    $('.but2').click(function(){
        $('.galllist').css('marginLeft','0%')
    })

    $('.but3').click(function(){
        $('.galllist').css('marginLeft','-33.3333%')
    })

    $('.but4').click(function(){
        $('.galllist').css('marginLeft','-66.6666%')
    })

    $('.but5').click(function(){
        $('.galllist').css('marginLeft','-100%')
    })

    $('.but6').click(function(){
        $('.galllist').css('marginLeft','-133.3333%')
    })

    //섹션2-1 이동버튼


    pickPlay()
    $('.pickbox,.sec2sub').mouseenter(function(){pickStop()});
    $('.pickbox,.sec2sub').mouseleave(function(){pickPlay()});

    $('.sec2sub1').click(function(){
        $('.pickslide').css('marginTop','0');
        pickNo=0;
    })

    $('.sec2sub2').click(function(){
        $('.pickslide').css('marginTop','-350px');
        pickNo=1;
    })

    $('.sec2sub3').click(function(){
        $('.pickslide').css('marginTop','-700px');
        pickNo=2;
    })

    //섹션2-2 이동버튼

    $('.promobu1').click(function(){
        promoMinus()
        if(promoNo===1) {$('.promo1').fadeIn(500);
            $('.promo2').fadeOut(500);}
        else if(promoNo===2) {$('.promo2').fadeIn(500);
            $('.promo1').fadeOut(500);}

    })

    $('.promobu2').click(function(){
        promoPlus()
        if(promoNo===1) {$('.promo1').fadeIn(500);
            $('.promo2').fadeOut(500);}
        else if(promoNo===2) {$('.promo2').fadeIn(500);
            $('.promo1').fadeOut(500);}


    })

    //프로모션

});


