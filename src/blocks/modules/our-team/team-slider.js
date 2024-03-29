import Swiper from "swiper";

document.addEventListener("DOMContentLoaded", () => {

    const teamSliderNavs = document.querySelectorAll(".team-slider__nav");

    teamSliderNavs.forEach(el => {
        new Swiper(el, {
            slidesPerView: 4,
            spaceBetween: 4,
            
            breakpoints: {
                577: {
                    spaceBetween: 10,
                    slidesPerView: 3,
                },
                769: {
                    spaceBetween: 20,
                    slidesPerView: 3,
                }
            }
        });

        document.addEventListener("click", (e) => {
            if (e.target.classList.contains("team-slider__nav-image")) {
                let src = e.target.getAttribute("src");
                e.target.closest(".team-slider").querySelector(".team-slider__main img")?.setAttribute("src", src);
            }
        }); 
    });
});