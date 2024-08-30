
let sections = document.querySelectorAll(".sect_img");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            let images = sec.querySelectorAll(".img_container img");
            images.forEach(img => img.classList.add("show_animate"));
        } else {
            let images = sec.querySelectorAll(".img_container img");
            images.forEach(img => img.classList.remove("show_animate"));
        }
    });
}

