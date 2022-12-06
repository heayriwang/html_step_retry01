$('h1').on('click', function () {
    console.log('작동함')
});

$(window).on('scroll', function () {
    console.log('스크롤', $(window).scrollTop());
    //스크롤된 양을 구해서 0보다 크면 클래스를 붙이고 아니면 클래스를 땐다.
    // if(스크롤양 > 0) {클래스를 붙이} else {클래스를 땐} ->위에말을 함수로 풀었을때 공식. 
    //스크롤 양을 구하기 : $(window).scrollTop()

    if ($(window).scrollTop() > 0) {
        $('#header_scroll').addClass('on');
    }
    else {
        $('#header_scroll').removeClass('on');
    }

    // var sct = $(window).scrollTop();
    // sct > 0 ? $('#header_scroll').addClass('on')
    //     : $('#header_scroll').removeClass('on');
    // if공식이랑 같은 말인데 쓰기 편한걸로 써라



});

