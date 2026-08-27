
const profileImg = document.querySelector("#profileImg")

const profileInput = document.querySelector("#profileInput")

const mode = document.querySelector(".cardmode")

// local    /  / /  /  /

const savedProfile = localStorage.getItem("profile")

if (savedProfile) {

    profileImg.src = savedProfile

}



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

// swiper --- - - -  -  -  - - -  -  - - -  -  - 



// arr mode /// / / / / / /

const covermode = [{


    cover: "src/Asset/img/playlist/drive.jpg",

    title: "drive",

    count: "4",


},

{

    cover: "src/Asset/img/playlist/love.jpg",

    title: "love",

    count: "7",

},

{


    cover: "src/Asset/img/playlist/pexels-rdne-8224397.jpg",

    title: "sport",

    count: "5",


},

{


    cover: "src/Asset/img/playlist/travel.jpg",

    title: "travel",

    count: "3",


},

]

covermode.forEach((val) => {


    mode.innerHTML += `

<figure class="group relative shrink-0 w-[calc((100%-40px)/3)] sm:w-[160px] md:w-[180px] xl:w-[220px] py-3 px-2 sm:px-3 border border-white/10 bg-white/[0.03] rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20">

    <div class="relative w-full aspect-square  overflow-hidden rounded-xl">

        <img

            src="${val.cover}"

            alt="${val.title}"

            class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"

        >

        <div class="absolute top-2 right-2">

            <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center bg-black/45 backdrop-blur-xl border border-white/15 text-white/70 hover:text-white hover:bg-black/70 hover:border-white/30 hover:scale-110 transition-all duration-300 cursor-pointer shadow-[0_5px_20px_rgba(0,0,0,0.4)]">

                <svg

                    class="w-3.5 h-3.5 sm:w-4 sm:h-4"

                    viewBox="0 0 24 24"

                    fill="currentColor"

                >

                    <circle cx="12" cy="5" r="1.5"></circle>

                    <circle cx="12" cy="12" r="1.5"></circle>

                    <circle cx="12" cy="19" r="1.5"></circle>

                </svg>

            </div>

        </div>

    </div>

    <div class="flex items-center justify-between mt-3 px-1">

        <div class="min-w-0">

            <h5 class="text-white text-sm sm:text-lg font-semibold capitalize font-[font3] truncate">

                ${val.title}

            </h5>

            <span class="text-white/40 text-[10px] sm:text-sm font-[font1]">

                ${val.count} songs

            </span>

        </div>

    </div>

</figure>

`
})

// for made you /  /  /  /  / /  /  / /  / /  /  /  /  / /  /  /  / // / / /  // /  / /  // 









// create profile from you / / / /


profileImg.addEventListener("click", () => {


    profileInput.click()


})

profileInput.addEventListener("change", () => {


    const file = profileInput.files[0]

    if (file) {

        const reader = new FileReader()


        reader.onload = () => {

            profileImg.src = reader.result

            localStorage.setItem("profile", reader.result)

        }


        reader.readAsDataURL(file)

    }


})


// end create profile / / /  /






// art img and title /  /  / /   

const arti = [{

    cover: "src/Asset/img/arti/ebi-0178a53f6fde218-photo.jpeg",
    title: "ebi",
    id : "ebi"

},

{

    cover: "src/Asset/img/arti/hayedeh-a566917d476f043-photo.jpeg",
    title: "hayedeh",
    id:"hayedeh"

},

{

    cover: "src/Asset/img/arti/majid-razavi-1ea0eb59ecaac93-photo.jpeg",
    title: "majidrazavi",
    id:"majidrazavi"

},

{

    cover: "src/Asset/img/arti/siavash-ghomayshi-04ef435f4edf9b7-photo.jpeg",
    title: "siavash",
    id:"siavash"

},
{

    cover: "src/Asset/img/arti/shadmehr-aghili-627264b97c1a6e8-photo.jpeg",
    title: "shadmehr",
    id:"shadmehr"

},

]

const aboutart = document.querySelector(".aboutart")

arti.forEach((val) => {

    aboutart.innerHTML += `

    <figure id = "${val.id}" class="w-[70px] last:hidden xl:last:flex cursor-pointer sm:w-[85px] md:w-[100px] shrink-0 flex flex-col items-center">

        <img
            class="rounded-full w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] md:w-[100px] md:h-[100px] object-cover"
            src="${val.cover}"
            alt=""
        >

        <figcaption class="text-white pt-2 text-center text-sm sm:text-md capitalize font-[font2] whitespace-nowrap">
            ${val.title}
        </figcaption>

    </figure>

    `

})