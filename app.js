// baguetteBox.run('.list');

// // Code Snippet from //
// // https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/ //
// function search_photo() {
//     let input = document.getElementById('searchbar').value;
//     input=input.toLowerCase();
//     let photo = document.getElementsByClassName('photos');

//     for(i = 0; i < photo.length; i++) {
//         if (!photo[i].innerHTML.toLowerCase().includes(input)) {
//             photo[i].style.display='none';
//         } else {
//             photo[i].style.display='list-item';
//         }
//     }
// }



const alertBanner = document.getElementById("alert");
const modalWindow = document.getElementById("modal-window");
const modalWindow2 = document.getElementById("modal-window2");
const modalWindow3 = document.getElementById("modal-window3");
const modalWindow4 = document.getElementById("modal-window4");
const modalWindow5 = document.getElementById("modal-window5");
const modalWindow6 = document.getElementById("modal-window6");
const modalWindow7 = document.getElementById("modal-window7");
const modalWindow8 = document.getElementById("modal-window8");
// const searchInput = document.getElementById("search-input");
// const filter = input.value.toUpperCase();
// const ul = document.getElementById("search-list");
// const li = ul.getElementsByTagName("li");
// const modalImage1 = document.getElementById("modal-image1");
const mercury = document.getElementById("mercury");
const venus = document.getElementById("venus");
const earth = document.getElementById("earth");
const mars = document.getElementById("mars");
const jupiter = document.getElementById("jupiter");
const saturn = document.getElementById("saturn");
const uranus = document.getElementById("uranus");
const neptune = document.getElementById("neptune");
const span = document.getElementById("close");
const span2 = document.getElementById("close2");
const span3 = document.getElementById("close3");
const span4 = document.getElementById("close4");
const span5 = document.getElementById("close5");
const span6 = document.getElementById("close6");
const span7 = document.getElementById("close7");
const span8 = document.getElementById("close8");

alertBanner.addEventListener("click", (e) => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display= "none"
    }
});



modalWindow.style.display = "none";

mercury.addEventListener("click", () => {
    modalWindow.style.display = "block"
});

span.addEventListener("click", (e) => {
    const element = e.target;
    if (element.classList.contains("close")) {
        modalWindow.style.display = "none"
    }
});

modalWindow2.style.display = "none";

venus.addEventListener("click", () => {
    modalWindow2.style.display = "block"
});


span2.addEventListener("click", (e) => {
    const element = e.target;
    if (element.classList.contains("close2")) {
        modalWindow2.style.display = "none"
    }
});

modalWindow3.style.display = "none";

earth.addEventListener("click", () => {
    modalWindow3.style.display = "block"
});

span3.addEventListener("click", (e) => {
    const element = e.target;
    if (element.classList.contains("close3")) {
        modalWindow3.style.display = "none"
    }
});

modalWindow4.style.display = "none";

mars.addEventListener("click", () => {
     modalWindow4.style.display = "block"
});

span4.addEventListener("click", (e) => {
    const element = e.target;
    if (element.classList.contains("close4")) {
        modalWindow4.style.display = "none"
    }
});

modalWindow5.style.display = "none";

jupiter.addEventListener("click", () => {
    modalWindow5.style.display = "block"
});

span5.addEventListener("click", (e) => {
    const element = e.target;
    if (element.classList.contains("close5")) {
        modalWindow5.style.display = "none"
    }
});

modalWindow6.style.display = "none";

saturn.addEventListener("click", () => {
    modalWindow6.style.display = "block"
});

span6.addEventListener("click", (e) => {
    const element = e.target;
    if (element.classList.contains("close6")) {
        modalWindow6.style.display = "none"
    }
});

modalWindow7.style.display = "none";

uranus.addEventListener("click", () => {
    modalWindow7.style.display = "block"
});

span7.addEventListener("click", (e) => {
    const element = e.target;
    if (element.classList.contains("close7")) {
        modalWindow7.style.display = "none"
    }
});

modalWindow8.style.display = "none";

neptune.addEventListener("click", () => {
    modalWindow8.style.display = "block"
});

span8.addEventListener("click", (e) => {
    const element = e.target;
    if (element.classList.contains("close8")) {
        modalWindow8.style.display = "none"
    }
});

function searchFilter() {

var searchInput, filter, ul, li, a, i, txtValue;
searchInput = document.getElementById("search-input");
filter = searchInput.value.toUpperCase();
ul = document.getElementById("search-list");
li = ul.getElementsByTagName("li");


for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
    } else {
        li[i].style.display = "none";
    }
}
}


    

    // modalImage1.onclick = function() {
    //     modalWindow.style.display = "block";
    // }


// function openModal1() {
//     modalWindow.style.display = "block";
// }

// modalWindow.addEventListener("click", () => {
//     modalWindow.style.display= "none";
//     if () {

//     }
// });