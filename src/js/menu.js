require('../less/menu.less');
var $liCollect = document.getElementsByClassName('li');
var $ul1 = document.getElementsByClassName('ul1')[0];
$liCollect[0].onmouseenter = function() {
        $ul1.className = 'ul11';
}
var $li1 = document.getElementsByClassName('li1');
var $ulf = document.getElementsByClassName('ulf')[0];
$li1[0].onmouseenter = function() {
    $ulf.className = "ulff";
}
$li1[0].onmouseleave = function() {
    $ulf.className = "ulf";
}
$ul1.onmouseleave = function() {
    $ul1.className = 'ul1';
}



var $ul2 = document.getElementsByClassName('ul2')[0];
$liCollect[1].onmouseenter = function() {
        $ul2.className = 'ul22';
        $ul1.className = 'ul1';
}
$liCollect[1].onmouseleave = function() {
        $ul2.className = 'ul2';
}