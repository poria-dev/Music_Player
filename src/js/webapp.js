window.addEventListener("load", () => {


    const swiper = new Swiper(".musicSwiper", {


        slidesPerView: 1,

        spaceBetween: 15,


        loop: true,


        speed: 800,


        grabCursor: true,


        autoplay: {

            delay: 3000,

            disableOnInteraction: false,

        },


        pagination: {

            el: ".swiper-pagination",

            clickable: true,

        },


        breakpoints: {


            0: {

                slidesPerView: 1,

                spaceBetween: 12,

            },


            640: {

                slidesPerView: 1,

                spaceBetween: 15,

            },


            768: {

                slidesPerView: 1,

                spaceBetween: 18,

            },


            1024: {

                slidesPerView: 1,

                spaceBetween: 20,

            },


            1280: {

                slidesPerView: 1,

                spaceBetween: 24,

            },


        },


    });


});


// swiper --- - - -  - -  - - -  -  - - -  -  















