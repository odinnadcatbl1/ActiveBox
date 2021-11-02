// запись ниже нужна, чтобы дождаться загрузки всего документа
$(function() {

    let header = $(".jsHeader"); // селектор jsHeader
    let intro = $(".jsIntro"); 
    let introHeight = intro.innerHeight(); // получаем высоту элемента, включая padding
    let scrollPos = $(window).scrollTop(); // позиция скролла от верха окна

    // чтобы следить за событием скролла, загрузки и изменения размеров окна страницы: 
    $(window).on("scroll load resize", function () {
        
        introHeight = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if(scrollPos > introHeight) {
            header.addClass("fixed"); // добавляем класс fixed
        } else {
            header.removeClass("fixed"); // добавляем класс fixed
        }


    });
    
    
    

});