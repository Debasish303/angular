$(document).ready(function(){
    var ename = $('.eprofile h1').text();
    $('.evatar img').on('click', function(){
        alert(ename);
    });
});