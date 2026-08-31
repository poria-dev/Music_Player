
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

        speed: 350,

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

    id: "ebi"

},

{

    cover: "src/Asset/img/arti/hayedeh-a566917d476f043-photo.jpeg",

    title: "hayedeh",

    id: "hayedeh"

},

{

    cover: "src/Asset/img/arti/majid-razavi-1ea0eb59ecaac93-photo.jpeg",

    title: "majidrazavi",

    id: "majidrazavi"

},

{

    cover: "src/Asset/img/arti/siavash-ghomayshi-04ef435f4edf9b7-photo.jpeg",

    title: "siavash",

    id: "siavash"

},

{

    cover: "src/Asset/img/arti/shadmehr-aghili-627264b97c1a6e8-photo.jpeg",

    title: "shadmehr",

    id: "shadmehr"

},

]

const aboutart = document.querySelector(".aboutart")

arti.forEach((val) => {

    aboutart.innerHTML += `

    <figure id="${val.id}" class="w-[70px] sm:w-[82px] md:w-[92px] lg:w-[100px] shrink-0 cursor-pointer flex flex-col items-center">

        <img

            class="rounded-full w-[65px] h-[65px] sm:w-[78px] sm:h-[78px] md:w-[88px] md:h-[88px] lg:w-[100px] lg:h-[100px] object-cover"

            src="${val.cover}"

            alt=""

        >

        <figcaption class="text-white pt-2 text-center text-xs sm:text-sm md:text-md capitalize font-[font2] whitespace-nowrap">

            ${val.title}

        </figcaption>

    </figure>

    `

})



// create box trend sound

const trendall = document.querySelector(".trendall")

const trend = [

    {

        cover: "src/Asset/img/trend/5aa69a5de439293.jpeg",

        sound: "https://irsv.upmusics.com/singletracks/2026/08/Arshiyas%20-%20Adi%20Ni%20UpMusics.mp3",

        number: "01",

        artist: "arshiyas",

        music: "addi nist",

        time : "2:26"

    },

    {

        cover: "src/Asset/img/trend/e4a224bfeafddc7.jpeg",

        sound: "https://dl.rozmusic.com/Music/1405/05/28/Seper%20-%20Zendegie%20Adi%20%28128%29.mp3",

        number: "02",

        artist: "Seper",

        music: "Zendegie Adi",

        time : "3:58"

    },

    {

        cover: "src/Asset/img/trend/bfbc2103a16e68a.jpeg",

        sound: "https://dl.sarimusic.in/1405/06/03/1/Babak%20Amini%20-%20Sayeh%20%28ft.Navan%29%20%28128%29.mp3",

        number: "03",

        artist: "babak amini & navan",

        music: "sayeh",

        time : "4:39"

    },

    {

        cover: "src/Asset/img/trend/gol.jpeg",

        sound: "https://dl.uptune.ir/music/1405/06/06/Sogand%20-%20Gole%20Sangam%20%5B320%5D.mp3",

        number: "04",

        artist: "sogand",

        music: "gol sangam",

        time : "2:58"

    },

]





trend.forEach((val) => {

trendall.innerHTML += `

    <div class="boxstrend w-full my-1.5 mx-2 md:mx-0">

        <div class="trend_item *:font-font1 *:capitalize w-full min-h-[70px] sm:min-h-[75px] *:text-white cursor-pointer flex items-center gap-2 sm:gap-3 p-2 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-violet-400/30 transition-all duration-300">

            <div class="trend_number w-[22px] sm:w-[25px] shrink-0 text-center text-white/40 font-bold">

                ${val.number}

            </div>



            <div class="trend_img relative w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] shrink-0 overflow-hidden rounded-xl">

                <img src="${val.cover}" alt="" class="w-full h-full rounded-xl object-cover transition duration-500">

                <div class="absolute inset-0 flex items-center justify-center bg-black/40 transition duration-300">

                    ▶

                </div>

            </div>



            <div class="trend_info min-w-0 flex-1">

                <div class="trend_name truncate font-bold text-xs sm:text-sm md:text-base">

                    ${val.music}

                </div>

                <div class="trend_artist truncate text-[10px] sm:text-xs md:text-sm text-white/45 mt-1">

                    ${val.artist}

                </div>

            </div>



            <div class="trend_time shrink-0 text-[10px] sm:text-xs md:text-sm text-white/40">

                ${val.time}

            </div>



            <button class="trend_favorite shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-base sm:text-lg text-white/50 hover:text-pink-400 hover:bg-white/10 transition">

                ♡

            </button>



            <button class="trend_download shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-base sm:text-lg text-white/50 hover:text-violet-400 hover:bg-white/10 transition">

                ↓

            </button>

        </div>

    </div>

`

})
