//ham đổi màu body
let check = window.localStorage.getItem('check');
let checkreal = document.getElementById('chk');
function changeDark() {
    document.body.style.backgroundColor = "#292C35";
    document.body.style.color = "#fdfdfd";
}
function changeFFF() {
    document.body.style.backgroundColor = "#fdfdfd";
    document.body.style.color = "#555";
}
if (check == 'true') {
    changeDark();
    document.getElementById('chk').checked = true;
}
else {
    changeFFF();
    document.getElementById('chk').checked = false;
}
checkreal.onchange = function () {
    // access properties using this keyword
    if (this.checked) {
        window.localStorage.setItem('check', 'true')
        changeDark();
    } else {
        window.localStorage.setItem('check', 'false')
        changeFFF();
    }
};


//hiện thông tin giới thiệu
document.getElementById("hideleft").onclick = function () {
    document.getElementsByClassName("left")[0].style.display = "block";
    document.getElementsByClassName("right")[0].style.display = "none";
    const element = document.querySelector('.left');
    element.classList.add('animate__animated', 'animate__fadeInLeft');
    document.getElementById("hideleft").style.display = "none"
    document.getElementById("showleft").style.display = "block"
}
//ẩn ẩn thông tin, show thông tin các trang khac
document.getElementById("showleft").onclick = function () {
    document.getElementsByClassName("right")[0].style.display = "block";
    document.getElementsByClassName("left")[0].style.display = "none";
    document.getElementById("showleft").style.display = "none"
    document.getElementById("hideleft").style.display = "block"
}
