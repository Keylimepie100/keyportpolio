$(function(){

    $(window).scroll(function(){
        var top=$(window).scrollTop();
        if(top>80) {$('#headerbox').css({'background' : 'white',
                                        'height' : '50px'});
                    $('.heada').css('color','#0099c3');
                    $('.heada2').css('color','#0099c3');
                     }
                    else{$('#headerbox').css({'background' :  'transparent',
                        'height' : '80px'});
                        $('.heada').css('color','white');
                        $('.heada2').css('color','white') ;}

                        //제이쿼리 윈도우 스크롤 메뉴 변경


        if(top>500) { $('.infotext1').animate({left:0,opacity:1},1000,'swing')};
        if(top>500) { $('.aboutimg').animate({right:0,opacity:1},1000,'swing')};
        if(top>500) { $('.aboutback').animate({right:'5%',opacity:1},1000,'swing')};
        if(top>500) { $('.introslide img').delay(1000).fadeIn(500)};
        if(top>1500){$('.infotext2').animate({right:0,opacity:1},1000,'swing')};
        if(top>1500){$('.skillimg').animate({left:0,opacity:1},1000,'swing')};
        if(top>1500){$('.skillback').animate({left:'5%',opacity:1},1000,'swing')};

                        //info 애니메이션

        if(top>2300){$('.decobox').css('left','0')};
        if(top>2300){$('#portfolio').css('background','#deb88799')};
      
      

        
        if(top>3650){$('#sec3').css('filter', 'none')};
        
        })

    })


    let introNo=0;
    function introSlide(){
            introNo++;
            if(introNo>2) introNo=0;
    
            let introX=(introNo*-100)+'%'
            $('.isbox').css('marginLeft',introX)
    }
    
//about 슬라이드 함수    



$(document).ready(function(){

    $('.menu').click(function(){
        let x=$(this).attr('href');
        let newY=$(x).offset().top;

        $('#container').animate({scrollTop:newY},300);
    });

    //메뉴클릭시 스크롤


    setInterval('introSlide()',3000)

    //about 함수 적용

    

});










$(document).ready(function() {
    let floIndex = 1; // 현재 이미지 인덱스 (1부터 시작한다고 가정)
    const floSlides = 11; // 총 슬라이드 수

    function floSlide(no) {
        $('#popimg').attr('src', 'images/flo' + no + '.jpg');
    }
    
    $('.box1-1,.box1-4,.box1-5,.box1-6,.box1-7').click(function(){
        $('#pop').fadeIn();
        $('#pop').css('display','flex');
        $('#popimg').attr('src', $(this).children('img').attr('src'));
    })

    $('.box1-1').click(function(){      
        floIndex=1;
    });

    $('.box1-4').click(function(){
        floIndex=8;
    });


    $('.box1-5').click(function(){
        floIndex=9;
    });

    $('.box1-6').click(function(){
        floIndex=10;
    });

    $('.box1-7').click(function(){
        floIndex=11;
    });


    // 다음 버튼 클릭 시
    $('.popright1-1').click(function() {
        floIndex++; // 인덱스 증가
        if (floIndex > floSlides) {
            floIndex = 1; // 범위를 넘어가면 첫 번째 이미지로 돌아가기
        }
        floSlide(floIndex); // 증가된 인덱스로 슬라이드 업데이트
    });

    // 이전 버튼 클릭 시
    $('.popleft1-1').click(function() {
        floIndex--; // 인덱스 감소
        if (floIndex < 1) {
            floIndex = floSlides; // 범위를 넘어가면 마지막 이미지로 돌아가기
        }
        floSlide(floIndex); // 감소된 인덱스로 슬라이드 업데이트
    });
    
    //플로드리안 슬라이드&팝업 설정

        $('.floli,.cafeli,.pholi').click(function(){
            $('.decobox').css({'width' :'15%','opacity':'1'});
            $('.mainbox').css('width','70%');
            $('.buttonbox2').css('display','flex');
            $('.textbox1 h1').css('font-size','2.2rem')
            $('.textbox1 p').css({'font-size' :'1.1rem', 'font-weight' : '300', 'color': 'white', 'line-height': '1.3rem'})
        })

        $('.floli,.flobutton').click(function(){          
            $('.slide1-1').animate({left:0,opacity:1},300);
            $('.slide1-2,.slide1-3').animate({left:'-100%',opacity:0},300)
            $('.decobox').css('background','#2b1304')
            $('#portfolio').css('background','#deb88799')
            $('.popleft1-1').css('display','flex')
            $('.popleft1-2,.popleft1-3').css('display','none')
            $('.popright1-1').css('display','flex')
            $('.popright1-2,.popright1-3').css('display','none')
        })
        $('.cafeli,.cafebutton').click(function(){
            $('.slide1-2').animate({left:0,opacity:1},300);
            $('.slide1-1,.slide1-3').animate({left:'-100%',opacity:0},300)
            $('.decobox').css('background','skyblue')
            $('#portfolio').css('background','#87ceeb40')
            $('.popleft1-2').css('display','flex')
            $('.popleft1-1,.popleft1-3').css('display','none')
            $('.popright1-2').css('display','flex')
            $('.popright1-1,.popright1-3').css('display','none')
        })
        $('.pholi,.phobutton').click(function(){
            $('.slide1-3').animate({left:0,opacity:1},300);
            $('.slide1-1,.slide1-2').animate({left:'-100%',opacity:0},300)
            $('.decobox').css('background',' #B73151')
            $('#portfolio').css('background','#00000080')
            $('.popleft1-3').css('display','flex')
            $('.popleft1-1,.popleft1-2').css('display','none')
            $('.popright1-3').css('display','flex')
            $('.popright1-2,.popright1-1').css('display','none')
        })

        $('#popclose').click(function(){
            $('#pop').fadeOut();
        });

     //포트폴리오 1 버튼

});


$(document).ready(function() {
    let cafeIndex = 1; 
    const cafeSlides = 10; 

    function cafeSlide(no) {
        $('#popimg').attr('src', 'images/cafe' + no + '.jpg');
    }

    $('.box2-2,.box2-3,.box2-5,.box2-6,.box2-7').click(function(){
        $('#pop').fadeIn();
        $('#pop').css('display','flex');
        $('#popimg').attr('src', $(this).children('img').attr('src'));
    })

    $('.box2-2').click(function(){      
        cafeIndex=1;
    });

    $('.box2-3').click(function(){
        cafeIndex=7;
    });


    $('.box2-5').click(function(){
        cafeIndex=8;
    });

    $('.box2-6').click(function(){
        cafeIndex=9;
    });

    $('.box2-7').click(function(){
        cafeIndex=10;
    });


    
    $('.popright1-2').click(function() {
        cafeIndex++;
        if (cafeIndex > cafeSlides) {
            cafeIndex = 1; 
        }
        cafeSlide(cafeIndex); 
    });

 
    $('.popleft1-2').click(function() {
        cafeIndex--; 
        if (cafeIndex < 1) {
            cafeIndex = cafeSlides;
        }
        cafeSlide(cafeIndex); 
    });
        

});     //포트폴리오 1-2 cafe 설정


$(document).ready(function() {
    let phoIndex = 1; 
    const phoSlides = 11; 

    function phoSlide(no) {
        $('#popimg').attr('src', 'images/pho' + no + '.jpg');
    }

    $('.box3-2,.box3-3,.box3-4,.box3-5,.box3-6').click(function(){
        $('#pop').fadeIn();
        $('#pop').css('display','flex');
        $('#popimg').attr('src', $(this).children('img').attr('src'));
    })

    $('.box3-2').click(function(){      
        phoIndex=1;
    });

    $('.box3-3').click(function(){
        phoIndex=6;
    });


    $('.box3-4').click(function(){
        phoIndex=7;
    });

    $('.box3-5').click(function(){
        phoIndex=8;
    });

    $('.box3-6').click(function(){
        phoIndex=9;
    });


    
    $('.popright1-3').click(function() {
        phoIndex++;
        if (phoIndex > phoSlides) {
            phoIndex = 1; 
        }
        phoSlide(phoIndex); 
    });

 
    $('.popleft1-3').click(function() {
        phoIndex--; 
        if (phoIndex < 1) {
            phoIndex = phoSlides;
        }
        phoSlide(phoIndex); 
    });
        

});     //포트폴리오 1-3 pho 설정



   
    
       





        









//포트2 슬라이드

function por2Left(){
    let slideWidth2=$('.slide2').width();
    $('.slidebox2').stop().animate({'margin-left':-slideWidth2},500,function(){
        $('.slide2:first').appendTo('.slidebox2');   //2.왼쪽으로 넘어간 슬라이드를 오른쪽으로 보냄
        $('.slidebox2').css('margin-left','0');   //3.슬라이드 박스를 섹션의 왼쪽에 다시 맞춤
    }); 
    };


function por2Right(){
    let slideWidth2=$('.slide2').width();
    $('.slide2:last').prependTo('.slidebox2');
    $('.slidebox2').css('margin-left',-slideWidth2);  
    $('.slidebox2').stop().animate({'margin-left':0},500,function(){
        //2.왼쪽으로 넘어간 슬라이드를 오른쪽으로 보냄
       //3.슬라이드 박스를 섹션의 왼쪽에 다시 맞춤
  });  
    };

let por2Loop

function playPor2(){
    por2Loop = setInterval('por2Left()',3000)};

function stopPor2(){
    clearInterval(por2Loop);
}

$(function(){

             
                playPor2()
           

                          

               
                
                $('.slide2 img').click(function(){
                    $('.textbox2').css('height','11%');
                    $('.port2up').css({'height': '24%','width' : '100%'});
                    $('.slidebox2').css('width','133.3333%');
                    $('.port2down').stop().slideDown(500);
                    $('.mainport img').attr('src',$(this).attr('src'));
                    $('.mainport').data('url',$(this).data('url'));
                    $('#sec3').css('background-size','cover')
                    $('.port2 button').css({'display':'flex','top':'23%'})
                                       
                });


                

                $('.mainport').click(function(){

                    window.open($(this).data('url'),'_blank')

                })

                $('.downclose,.port2down').click(function(){
                    $('.textbox2').css('height','30%');
                    $('.port2up').css('height','40%');
                    $('.slidebox2').css('width','133.3333%');
                    $('.port2down').stop().slideUp(300);
                    $('.port2 button').css('top','50%')
                });


                $('.proto').mouseenter(function(){
                    $('mainport').removeClass('active');
                    $(this).addClass('active')
                });

                $('.proto').mouseleave(function(){
                    $('mainport').addClass('active');
                    $(this).removeClass('active');
                });


                $('.port2left').click(function(){
                    por2Right()
                })

                $('.port2right').click(function(){
                    por2Left()
                })

                $('.port2left,.port2right,.slide2 img,.port2down').mouseenter(function(){
                    stopPor2()
                })

                $('.port2left,.port2right,.slide2 img,.port2down').mouseleave(function(){
                    playPor2()
                })



                $('.slide2-1').click(function(){

                    $('.proto1').css('display','flex');
                    $('.proto2,.proto3,.proto4,.proto5').css('display','none');
                    $('#sec3').css('background-image','url("images/back1.png")');
                    $('.mainport video').css('display','none');
                    $('.protoleft1, .protoright1').css('display','flex')
                    $('.protoleft2, .protoright2,.protoleft3, .protoright3').css('display','none')
                })

                $('.slide2-2').click(function(){

                    $('.proto2').css('display','flex');
                    $('.proto1,.proto3,.proto4,.proto5').css('display','none');
                    $('#sec3').css('background-image','url("images/back2.png")');
                    $('.mainport video').css('display','none');
                    $('.protoleft2, .protoright2').css('display','flex')
                    $('.protoleft1, .protoright1,.protoleft3, .protoright3').css('display','none')
                })

                $('.slide2-3').click(function(){

                    $('.proto3').css('display','flex');
                    $('.proto2,.proto1,.proto4,.proto5').css('display','none');
                    $('#sec3').css('background-image','url("images/back3.png")');
                    $('.mainport video').css('display','none');
                    $('.protoleft3, .protoright3').css('display','flex')
                    $('.protoleft2, .protoright2,.protoleft1, .protoright1').css('display','none')
                })

               
                $('.slide2-4').click(function(){

                    $('.proto5').css('display','flex');
                    $('.proto2,.proto3,.proto4,.proto1').css('display','none');
                    $('#sec3').css('background-image','url("images/back5.png")');
                    $('.mainport video').css('display','flex');
                })



                $('.protoimg').click(function(){
                    $('#protopop').fadeIn()
                    $('#protopop').css('display','flex');
                    $('#protoimg').attr('src', $(this).children('img').attr('src'));
                })

                $('#protoclose').click(function(){
                    $('#protopop').fadeOut();
                });
})


$(document).ready(function() {
    let traitIndex = 14; 
   

    function traitSlide(no) {
        $('#protoimg').attr('src', 'images/trait' + no + '.jpg');
    }

    $('.protoright1').click(function() {
        traitIndex++;
        if (traitIndex > 16) {
            traitIndex = 14; 
        }
        traitSlide(traitIndex); 
    });

 
    $('.protoleft1').click(function() {
        traitIndex--; 
        if (traitIndex < 14) {
            traitIndex = 16;
        }
        traitSlide(traitIndex); 
    });

})



$(document).ready(function() {
    let yogurtIndex = 2; 
   

    function yogurtSlide(no) {
        $('#protoimg').attr('src', 'images/yogurt' + no + '.jpg');
    }

    $('.protoright3').click(function() {
        yogurtIndex++;
        if (yogurtIndex > 3) {
            yogurtIndex = 2; 
        }
        yogurtSlide(yogurtIndex); 
    });

 
    $('.protoleft3').click(function() {
        yogurtIndex--; 
        if (yogurtIndex < 2) {
            yogurtIndex = 3;
        }
        yogurtSlide(yogurtIndex); 
    });

})


$(document).ready(function() {
    let lifeIndex = 15; 
   

    function lifeSlide(no) {
        $('#protoimg').attr('src', 'images/life' + no + '.jpg');
    }

    $('.protoright2').click(function() {
        lifeIndex++;
        if (lifeIndex > 17) {
            lifeIndex = 15; 
        }
        lifeSlide(lifeIndex); 
    });

 
    $('.protoleft2').click(function() {
        lifeIndex--; 
        if (lifeIndex < 15) {
            lifeIndex = 17;
        }
        lifeSlide(lifeIndex); 
    });

})