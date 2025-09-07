const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const fillBar = document.querySelector(".fill");
const div1 = document.querySelector(".div2");
const div2 = document.querySelector(".div3");
const div3 = document.querySelector(".div4");
const div4 = document.querySelector(".div5");
let count = 0;

nextBtn.addEventListener("click", () => {
    if (count == 0) {
        fillBar.style.width = "22%";
        count++;
        div1.style.backgroundColor = "green";
        div1.innerHTML = "<p>&#10003;</p>";

        console.log(count);
    }
    else if (count == 1) {
        fillBar.style.width = "47%";
        count++;
        div2.style.backgroundColor = "green";
        div2.innerHTML = "<p>&#10003;</p>";

        console.log(count);
    }
    else if (count == 2) {
        fillBar.style.width = "72%";
        count++;
        div3.style.backgroundColor = "green";
        div3.innerHTML = "<p>&#10003;</p>";

        console.log(count);
    }
    else if (count == 3) {
        fillBar.style.width = "97%";
        div4.innerHTML = "<p>end</p>";
        div4.style.backgroundColor = "green";
        count++;
        console.log(count);
    }
});
prevBtn.addEventListener("click", () => {
    if (count == 4) {
        fillBar.style.width = "72%";
        div4.innerHTML = "<p>&times;</p>";
        div4.style.backgroundColor = "gainsboro";
        count--;
        console.log(count);
    }
    else if (count == 3) {
        fillBar.style.width = "47%";
        count--;
        div3.innerHTML = "<p>&times;</p>";
        div3.style.backgroundColor = "gainsboro";
        console.log(count);
    }
    else if (count == 2) {
        fillBar.style.width = "22%";
        count--;
        div2.innerHTML = "<p>&times;</p>";
        div2.style.backgroundColor = "gainsboro";
        console.log(count);
    }
    else if (count == 1) {
        fillBar.style.width = "0%";
        count--;
        div1.innerHTML = "<p>&times;</p>";
        div1.style.backgroundColor = "gainsboro";
        console.log(count);
    }
})