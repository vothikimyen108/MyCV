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
window.onload = () => {
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

}

//hiện thị ảnh
//khai báo các biến
const gallery = document.querySelectorAll(".image"),
    previewBox = document.querySelector(".preview-box"),
    previewImg = previewBox.querySelector("img"),
    closeIcon = previewBox.querySelector(".icon"),
    currentImg = previewBox.querySelector(".current-img"),
    totalImg = previewBox.querySelector(".total-img");

for (let i = 0; i < gallery.length; i++) {
    totalImg.textContent = gallery.length; //lấy được các tổng các ảnh hiện có
    let newIndex = i; //khỏi tạo vị trí mới bằng i
    let clickedImgIndex; //tạo một biến kick vào img thứ i
    //khi ảnh thứ i được kích
    gallery[i].onclick = () => {
        clickedImgIndex = i;
        function preview() {
            currentImg.textContent = newIndex + 1; //ảnh hiện tại đang mở ảnh newidex +1
            let imageURL = gallery[newIndex].querySelector("img").src; //lấy src của ảnh đc click
            previewImg.src = imageURL; //gắn vào thẻ img cần show
        }
        preview(); //gọi hàm trên
        //thực hiện code 2 nút bấm qua lại
        const prevBtn = document.querySelector(".prev");
        const nextBtn = document.querySelector(".next");
        if (newIndex == 0) { //if nếu ảnh thứ o đc mở
            prevBtn.style.display = "none";
        }
        if (newIndex >= gallery.length - 1) { //chỉ mục đang mở mà lớn hơn hoặc bằng độ dài các ảnh đang có thì ẩn bt next
            nextBtn.style.display = "none";
        }
        prevBtn.onclick = () => {
            newIndex--; //giảm chỉ muc
            if (newIndex == 0) {
                preview();
                prevBtn.style.display = "none";
            } else {
                preview();
                nextBtn.style.display = "block";
            }
        }
        nextBtn.onclick = () => {
            newIndex++; //tăng
            if (newIndex >= gallery.length - 1) {
                preview();
                nextBtn.style.display = "none";
            } else {
                preview();
                prevBtn.style.display = "block";
            }
        }
        document.querySelector("body").style.overflow = "none";
        previewBox.classList.add("show");
        //nếu nhấn nút tắt
        closeIcon.onclick = () => {
            newIndex = clickedImgIndex;
            prevBtn.style.display = "block";
            nextBtn.style.display = "block";
            previewBox.classList.remove("show");
        }
    }

}
// mở tab mới trên ablum
let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];
let tabsPane = tabHeader.getElementsByTagName("div");
for (let i = 0; i < tabsPane.length; i++) {
    tabsPane[i].addEventListener("click", function () {
        tabHeader.getElementsByClassName("active")[0].classList.remove("active");
        tabsPane[i].classList.add("active");
        tabBody.getElementsByClassName("active")[0].classList.remove("active");
        tabBody.getElementsByTagName("nav")[i].classList.add("active");
    });
}

