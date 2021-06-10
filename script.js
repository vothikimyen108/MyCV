
document.getElementById("hideleft").onclick = function() {
   document.getElementsByClassName("left")[0].style.display = "block";
   document.getElementById("hideleft").style.display ="none"
   document.getElementById("showleft").style.display ="block"
}

document.getElementById("showleft").onclick = function() {
    document.getElementsByClassName("left")[0].style.display = "none";
    document.getElementById("showleft").style.display ="none"
    document.getElementById("hideleft").style.display ="block"
 }
//getting all required elements

const gallery = document.querySelectorAll(".image"),
    previewBox = document.querySelector(".preview-box"),
    previewImg = previewBox.querySelector("img"),
    closeIcon = previewBox.querySelector(".icon"),
    currentImg = previewBox.querySelector(".current-img"),
    totalImg = previewBox.querySelector(".total-img"),
    shadow = document.querySelector(".shadow");

window.onload = () => {
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length; //passing total img length to totalImg variable
        let newIndex = i; //passing i value to newIndex variable
        let clickedImgIndex; //creating new variable

        gallery[i].onclick = () => {
            clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
            function preview() {
                currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
                let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
                previewImg.src = imageURL; //passing user clicked img url in previewImg src
            }
            preview(); //calling above function

            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if (newIndex == 0) { //if index value is equal to 0 then hide prevBtn
                prevBtn.style.display = "none";
            }
            if (newIndex >= gallery.length - 1) { //if index value is greater and equal to gallery length by -1 then hide nextBtn
                nextBtn.style.display = "none";
            }
            prevBtn.onclick = () => {
                newIndex--; //decrement index
                if (newIndex == 0) {
                    preview();
                    prevBtn.style.display = "none";
                } else {
                    preview();
                    nextBtn.style.display = "block";
                }
            }
            nextBtn.onclick = () => {
                newIndex++; //increment index
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
            shadow.style.display = "block";
            closeIcon.onclick = () => {
                newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";

            }
        }

    }
    if (screen.availWidth > 1500) {
        let tabHeader = document.getElementsByClassName("tab-header")[0];
        let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
        let tabBody = document.getElementsByClassName("tab-body")[0];

        let tabsPane = tabHeader.getElementsByTagName("div");

        for (let i = 0; i < tabsPane.length; i++) {
            tabsPane[i].addEventListener("click", function () {
                tabHeader.getElementsByClassName("active")[0].classList.remove("active");
                tabsPane[i].classList.add("active");
                tabBody.getElementsByClassName("active")[0].classList.remove("active");
                tabBody.getElementsByTagName("nav")[i].classList.add("active");

                tabIndicator.style.left = `calc(calc(100% / 8.5) * ${i})`;



            });
        }


    }else {
        let tabHeader = document.getElementsByClassName("tab-header")[0];
        let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
        let tabBody = document.getElementsByClassName("tab-body")[0];

        let tabsPane = tabHeader.getElementsByTagName("div");

        for (let i = 0; i < tabsPane.length; i++) {
            tabsPane[i].addEventListener("click", function () {
                tabHeader.getElementsByClassName("active")[0].classList.remove("active");
                tabsPane[i].classList.add("active");
                tabBody.getElementsByClassName("active")[0].classList.remove("active");
                tabBody.getElementsByTagName("nav")[i].classList.add("active");

                tabIndicator.style.left = `calc(calc(100% / 4) * ${i})`;



            });
        }

    }


}