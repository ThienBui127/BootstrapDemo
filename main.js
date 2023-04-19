$(window).scroll(function() {
    let oTop = $('.section-2').offset().top - window.innerHeight;
    if($(window).scrollTop() > oTop) {
        $('.navbar').addClass('sticky');
    } else{
        $('.navbar').removeClass('sticky');
    }
})

//animate gioi thieu sach

let nCount = selector => {
    $(selector).each(function() {
        $(this).animate({
            Counter: $(this).text()
        }, {
            duration: 10000,
            easing: "swing",

            step: function (value) {
                $(this).text(Math.ceil(value))
            }       
        })   
    })
}

let possition = 0;
$(window).scroll(function() {
    let oTop = $('.numbers').offset().top - window.innerHeight
    if(possition == 0 && $(window).scrollTop() >= oTop) {
        possition++;
        nCount(".rect > h1");
    }
})