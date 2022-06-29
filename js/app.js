$(function () {
    /* 
    1.introductuon 하단 썸네일을 클릭하면 모달창 표시
    2.닫기 버튼 누르면 모달창 비표시
    */
    $('#intro .col').click(function () {
        $('#modal').addClass('on');
    });
    $('#modal .btn-close').click(function () {
        $('#modal').removeClass('on');
    });
})