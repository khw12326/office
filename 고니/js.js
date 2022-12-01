//갤러리 버튼 클릭
$('.gallery_off').click(function(){
    $('.notice_letter').hide(); //공지사항 내용 숨기기
    $('.gallery_img').css({'display' : 'flex',}); //갤러리 내용 나타내기
    $(this).attr('class','gallery_on'); //갤러리 버튼 CSS 변경
    $('.notice_on').attr('class','notice_off'); //공지사항 버튼 CSS 변경
});

//공지사항 버튼 클릭
$('.notice_on').click(function(){
    $('.notice_letter').show(); //공지사항 내용 나타내기
    $('.gallery_img').hide(); //갤러리 내용 숨기기
    $(this).attr('class','notice_on'); //공지사항 버튼 CSS변경
    $('.gallery_on').attr('class','gallery_off'); //갤러리 버튼 CSS 변경
});