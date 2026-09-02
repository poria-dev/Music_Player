
const profileImg = document.querySelector("#profileImg")
const icon = document.querySelector(".icon")
const playnotif = new Audio("src/Asset/music/notif/Message-notification.mp3")
const profileInput = document.querySelector("#profileInput")

const mode = document.querySelector(".cardmode")

// local    /  / /  /  /

const savedProfile = localStorage.getItem("profile")

if (savedProfile) {

    profileImg.src = savedProfile

}


// icon sound /


let flag = true
icon.addEventListener("click", (e) => {

    if (flag == true) {
        playnotif.currentTime = 0
        playnotif.play()
        icon.children[0].classList.remove("bg-white/[0.03]")
        icon.children[0].classList.add("bg-violet-500/[0.08]")
    } else {
        icon.children[0].classList.add("bg-white/[0.03]")
        icon.children[0].classList.remove("bg-violet-500/[0.08]")
    }

    flag = !flag

})

// icon sound /


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

    <figure id="${val.id}" class="w-[80px] sm:w-[82px] md:w-[92px] lg:w-[100px] shrink-0 cursor-pointer flex flex-col items-center last:hidden lg:last:flex">

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

        time: "2:26"

    },

    {

        cover: "src/Asset/img/trend/e4a224bfeafddc7.jpeg",

        sound: "https://dl.rozmusic.com/Music/1405/05/28/Seper%20-%20Zendegie%20Adi%20%28128%29.mp3",

        number: "02",

        artist: "Seper",

        music: "Zendegie Adi",

        time: "3:58"

    },

    {

        cover: "src/Asset/img/trend/bfbc2103a16e68a.jpeg",

        sound: "https://dl.sarimusic.in/1405/06/03/1/Babak%20Amini%20-%20Sayeh%20%28ft.Navan%29%20%28128%29.mp3",

        number: "03",

        artist: "babak amini & navan",

        music: "sayeh",

        time: "4:39"

    },

    {

        cover: "src/Asset/img/trend/gol.jpeg",

        sound: "https://dl.uptune.ir/music/1405/06/06/Sogand%20-%20Gole%20Sangam%20%5B320%5D.mp3",

        number: "04",

        artist: "sogand",

        music: "gol sangam",

        time: "2:58"

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




// create javan released  / / / / 

const cardjavan = document.querySelector(".cardjavan")
const javan = [

    {

        sound: "https://dl.rozmusic.com/Music/1405/05/27/Naser%20Zeynali%20-%20Daram%20Adat%20Mikonam%20%28128%29.mp3",
        cover: "src/Asset/img/javan/Naser-Zeynali-Daram-Adat-Mikonam.jpg",
        title: "daram adat mikonam",
        artist: "naser zeynali"


    },

    {

        sound: "https://irsv.upmusics.com/AliBZ/Morteza%20Pashaei%20%7C%20Yeki%20Hast%20(320).mp3",
        cover: "src/Asset/img/javan/img1.jpg",
        title: "yeki hast",
        artist: "morteza pashaei"


    },

    {

        sound: "https://irsv.upmusics.com/singletracks/2026/08/Arshiyas%20-%20Adi%20Ni%20UpMusics.mp3",
        cover: "src/Asset/img/javan/img2.jpg",
        title: "adi ni",
        artist: "arshiyas"


    },

    {

        sound: "https://irsv.upmusics.com/singletracks/2026/08/Erfan%20Abra%20-%20Belakhare%20UpMusics_2.mp3",
        cover: "src/Asset/img/javan/img3.jpg",
        title: "Belakhare ",
        artist: "erfan abra"


    },

    {

        sound: "https://dl.remiixbaz.com/music/siavash-ghomeyshi/Siavash%20Ghomeyshi%20-%20Jaziireh%20%28Remixbaz.com%29%20%28320%29.mp3",
        cover: "src/Asset/img/javan/jazireh.jfif",
        title: "jazireh",
        artist: "siavash"


    },

]

javan.forEach((val) => {

    cardjavan.innerHTML += `
    
 <div class="justreleased w-full rounded-lg px-4 lg:px-1 *:w-full *:text-white capitalize">

    <figure class="mb-4 cursor-pointer overflow-hidden">
        <img
            src="${val.cover}"
            alt=""
            class="w-full aspect-square object-cover rounded-lg"
        >
    </figure>

    <div class="flex text-sm lg:text-md">

        <h5 class="w-[80%] font-[font2] font-bold truncate">
            ${val.title}
        </h5>

        <span class="w-[20%] flex justify-end items-center">

            <div class="flex items-end gap-[2px] h-5 group cursor-pointer">

                <span class="w-[2px] h-2 bg-white rounded-full transition-all duration-300 group-hover:h-4 animate-pulse"></span>

                <span class="w-[2px] h-4 bg-white rounded-full transition-all duration-300 group-hover:h-2 animate-pulse"></span>

                <span class="w-[2px] h-3 bg-white rounded-full transition-all duration-300 group-hover:h-5 animate-pulse"></span>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    class="w-5 h-5 ml-1 transition-transform duration-300 group-hover:scale-110"
                >
                    <path d="M8 4.5v11.2a3.5 3.5 0 1 0 1.5 3.05V9.2l8.5-2v7.5a3.5 3.5 0 1 0 1.5 3.05V4L8 6.2V4.5Z"/>
                </svg>

            </div>

        </span>

    </div>

    <h6 class="opacity-50 font-[font2] truncate">
        ${val.artist}
    </h6>

</div>
    
    `

})


// create javan released  / / / / 





// switch color box menu 


const menuItem = document.querySelectorAll(".menuItem")
const menuActive = document.getElementById("menuActive")
const searchBox = document.getElementById("searchBox")
const bodyy = document.querySelector(".bodyy")
menuItem.forEach((val) => {

    val.addEventListener("click", () => {

        let x = val.offsetTop

        menuActive.style.top = `${x}px`


        if (val.getAttribute("data-ser") == "on") {

            searchBox.classList.remove("hidden")
            searchBox.classList.add("flex")
            bodyy.classList.add("overflow-hidden")

        } else {
            searchBox.classList.remove("flex")
            searchBox.classList.add("hidden")
            bodyy.classList.remove("overflow-hidden")

        }


    })

})




// popular playlist /  / /  /  /  

const cardpopular = document.querySelector(".cardpopular")

const popular = [

    {
        cover: "src/Asset/img/popularplaylist/0c697696335e7a1.jpeg",
        title: "emotional",
        counter: "10 sound",
        id: "emotional"

    },
    {
        cover: "src/Asset/img/popularplaylist/e74c9ce3e3a63e7.jpeg",
        title: "today",
        counter: "13 sound",
        id: "today"


    },
    {
        cover: "src/Asset/img/popularplaylist/ec2f18bcf8eaa48.jpeg",
        title: "lovely",
        counter: "7 sound",
        id: "lovely"


    },

]

popular.forEach((val) => {

    cardpopular.innerHTML += `

        <div class="cards w-full h-1/3 flex items-center gap-2 my-2  text-white">

            <figure id="${val.id}" class="w-[30%] cursor-pointer h-full shrink-0">
                <img src="${val.cover}" alt="" class="w-full h-full object-cover rounded-md">
            </figure>

            <div class="px-2 w-[70%] min-w-0">

                <h6 class="text-2xl capitalize font-bold font-[font4]">${val.title}</h6>

                <span class="text-md opacity-70 font-bold font-font3">${val.counter}</span>

            </div>

        </div>

    `

})
// popular playlist /  / /  /  /  





// search in phone


const menuphone = document.querySelectorAll(".menuphone>div")

menuphone.forEach((val) => {

    val.addEventListener("click", () => {

        if (val.getAttribute("id") == "search") {

            searchBox.classList.remove("hidden")
            searchBox.classList.add("flex")
            bodyy.classList.add("overflow-hidden")


        } else {
            searchBox.classList.remove("flex")
            searchBox.classList.add("hidden")
            bodyy.classList.remove("overflow-hidden")

        }

    })

})


// search in phone



// time for site // 

const x = document.querySelector(".timesite")

setInterval(() => {
    const time = new Date().toLocaleTimeString()
    x.innerHTML = time
}, 1000);

// time for site // 





// video reels /
// /

const cardreels = document.querySelectorAll(".cardreels")

const boxforreels = document.querySelector(".boxforreels")


cardreels.forEach((val) => {

    const video = val.querySelector("video")

    val.addEventListener("click", () => {

        boxforreels.classList.remove("hidden")
        boxforreels.classList.add("flex")


        // make for copy 

        const newvideo = video.cloneNode(true)

        // make for copy 

        newvideo.muted = false
        newvideo.controls = true

        newvideo.classList.add(
            "w-full",
            "max-w-[500px]",
            "h-auto",
            "max-h-[85vh]",
            "rounded-2xl",
            "object-contain"
        )

        boxforreels.innerHTML = ""
        boxforreels.appendChild(newvideo)

        newvideo.play()

    })

})


boxforreels.addEventListener("click", () => {

    boxforreels.classList.add("hidden")
    boxforreels.classList.remove("flex")

    boxforreels.innerHTML = ""

})



// video reels /
// 




// close search 

let closee = document.getElementById("closeSearch")

closee.addEventListener("click", () => {

    searchBox.classList.remove("flex")
    searchBox.classList.add("hidden")
    bodyy.classList.remove("overflow-hidden")


})


// close search 





// array for all sound //
//  / /  /  / /   
//  / /  / /  / 


const allsounds = [

    {

        sound: "https://irsv.upmusics.com/AliBZ/Morteza%20Pashaei%20%7C%20Yeki%20Hast%20(320).mp3",
        cover: "src/Asset/img/javan/img1.jpg",
        title: "yeki hast",
        artist: "morteza pashaei",
        fav: false,
        mood: "Sad"

    },

    {

        sound: "https://dl.rozmusic.com/Music/1405/05/27/Naser%20Zeynali%20-%20Daram%20Adat%20Mikonam%20%28128%29.mp3",
        cover: "src/Asset/img/javan/Naser-Zeynali-Daram-Adat-Mikonam.jpg",
        title: "daram adat mikonam",
        artist: "naser zeynali",
        fav: false,
        mood: "Sad"

    },

    {

        sound: "https://irsv.upmusics.com/singletracks/2026/08/Arshiyas%20-%20Adi%20Ni%20UpMusics.mp3",
        cover: "src/Asset/img/javan/img2.jpg",
        title: "adi ni",
        artist: "arshiyas",
        fav: false,
        mood: "Pop"

    },

    {

        sound: "https://irsv.upmusics.com/singletracks/2026/08/Erfan%20Abra%20-%20Belakhare%20UpMusics_2.mp3",
        cover: "src/Asset/img/javan/img3.jpg",
        title: "Belakhare ",
        artist: "erfan abra",
        fav: false,
        mood: "Happy"

    },
    {

        sound: "https://dl.remiixbaz.com/music/siavash-ghomeyshi/Siavash%20Ghomeyshi%20-%20Jaziireh%20%28Remixbaz.com%29%20%28320%29.mp3",
        cover: "src/Asset/img/javan/jazireh.jfif",
        title: "jazireh",
        artist: "siavash",
        fav: false,
        mood: "Nostalgia"

    },
    {

        sound: "https://dl.musicsweb.ir/musics/03/06/Unknown%20Artist%20-%20Faghat%20Asheghe%20Inam%20-%20320.mp3",
        cover: "src/Asset/img/الکی.jpg",
        title: "alaki",
        artist: "siavash",
        fav: false,
        mood: "Nostalgia"

    },

    {

        sound: "https://dl.gisomusic.com/Music/1405/06/01/Meysam%20Ebrahimi%20-%20Az%20Tarsam.mp3",
        cover: "src/Asset/img/از ترسم.webp",
        title: "Az Tarsam",
        artist: "Meysam Ebrahimi",
        fav: false,
        mood: "Pop"

    },

    {

        sound: "https://dl.gisomusic.com/Music/1405/05/31/Hamid%20Askari%20-%20Navazesham%20Kon.mp3",
        cover: "src/Asset/img/Hamid-Askari-Navazesham-Kon.webp",
        title: "Navazesham Kon",
        artist: "Hamid Askari",
        fav: false,
        mood: "Sad"

    },

    {

        sound: "https://dl.gisomusic.com/Music/1405/06/10/Masoud%20Sadeghloo%20Ft.%20Azhman%20-%203%20Harfi.mp3",
        cover: "src/Asset/img/Masoud-Sadeghloo-Ft.-Azhman-3-Harfi.webp",
        title: "3 Harfi From",
        artist: "Masoud Sadeghloo",
        fav: false,
        mood: "Today"

    },

    {

        sound: "https://dl.gisomusic.com/Music/1405/05/28/Haamim%20-%20Bato.mp3",
        cover: "src/Asset/img/Haamim-Bato.webp",
        title: "Bato",
        artist: "Haamim",
        fav: false,
        mood: "Lovely"

    },

    {

        sound: "https://dl.musicgitar.ir/Music/Ebi/320/Ebi%20-%20Aadat%20%5B320%5D.mp3?_=1",
        cover: "src/Asset/img/adatebi.jpg",
        title: "adat",
        artist: "ebi",
        fav: false,
        mood: "Nostalgia"

    },

    {

        sound: "https://dl.musicgitar.ir/Music/Ebi/320/Ebi%20-%20Delpoosh%20%5B320%5D.mp3?_=3",
        cover: "src/Asset/img/ebipoosh.jpg",
        title: "delpoosh",
        artist: "ebi",
        fav: false,
        mood: "Nostalgia"

    },

    {

        sound: "https://dl.musicgitar.ir/Music/Ebi/320/Ebi%20-%20Hamdam%20%5B320%5D.mp3?_=8",
        cover: "src/Asset/img/ebi-hamdam.jpg",
        title: "hamdam",
        artist: "ebi",
        fav: false,
        mood: "Nostalgia"

    },

    {

        sound: "https://dl.musicgitar.ir/Music/Ebi/320/Ebi%20-%20Khanom%20Gol%20%5B320%5D.mp3?_=10",
        cover: "src/Asset/img/ebi-khanom-gol.jpg",
        title: "khanomgol",
        artist: "ebi",
        fav: false,
        mood: "Nostalgia"

    },

    {

        sound: "https://dl.mahanmusic.net/ahang/01/12/%E2%80%8EUnknown%20Artist%20-%20Ghalbe%20To%20-%20128%20-%20mahanmusic.net.mp3",
        cover: "src/Asset/img/Ghalbe-To-Ghalbe-Parande.jpg",
        title: "ghalbeTo",
        artist: "ebi",
        fav: false,
        mood: "Nostalgia"

    },

    {

        sound: "https://dl.gisomusic.com/Music/1403/01/31/Saeed%20Asayesh%20-%20Sharareh.mp3",
        cover: "src/Asset/img/Saeid-Asayesh-Sharare-Music-fa.com_.jpg",
        title: "Sharareh",
        artist: "Saeed Asayesh",
        fav: false,
        mood: "Happy"

    },

    {

        sound: "https://dl5.download1music.ir/Music/2024/Saeed%20Asayesh/Saeed%20Asayesh%20-%20Sharareh%202.mp3",
        cover: "src/Asset/img/Saeed-Asayesh-Sharareh-2-ahaang.jpg",
        title: "Sharareh2",
        artist: "Saeed Asayesh",
        fav: false,
        mood: "Sport"

    },

    {

        sound: "https://dl5.download1music.ir/Music/2026/Garsha%20Rezaei/Garsha%20Rezaei%20-%20Man%20o%20To%20(Live%20Version)%20128.mp3",
        cover: "src/Asset/img/Garsha-Rezaei-Man-o-To-(Live-Version).jpg",
        title: "Man o To",
        artist: "garsharezaei",
        fav: false,
        mood: "Sport"

    },

    {

        sound: "https://dl5.download1music.ir/Music/2026/Mohsen%20Ebrahimzadeh/Mohsen%20Ebrahimzadeh%20-%20Nemire%20Yadam%20128.mp3",
        cover: "src/Asset/img/Mohsen-Ebrahimzadeh-Nemire-Yadam.jpg",
        title: "NemireYadam",
        artist: "mohsenebrahimzadeh",
        fav: false,
        mood: "Emotional"

    },

    {

        sound: "https://irsv.upmusics.com/AliBZ/Khaste%20Shodam%20Remix%20(320).mp3",
        cover: "src/Asset/img/haydeh1.webp",
        title: "masti",
        artist: "hayedeh",
        fav: false,
        mood: "Sad"

    },

    {

        sound: "https://irsv.upmusics.com/AliBZ/Majid%20Razavi%20%7C%20Moteasefane%20(320).mp3",
        cover: "src/Asset/img/majid.jpg",
        title: "moteasefane",
        artist: "majidrazavi",
        fav: false,
        mood: "Lovely"

    },

    {

        sound: "https://dl.musicgitar.ir/Music/Shadmehr%20Aghili/320/Shadmehr%20Aghili%20-%20Bi%20Ehsas%20%5B320%5D.mp3?_=5",
        cover: "src/Asset/img/Shadmehr-Aghili-Bi-Ehsas.jpg",
        title: "bi ehsas",
        artist: "shadmehr",
        fav: false,
        mood: "Pop"

    },

    {

        sound: "https://dl.musicgitar.ir/Music/Shadmehr%20Aghili/320/Shadmehr%20Aghili%20-%20Halam%20Avaz%20Mishe%20%5B320%5D.mp3?_=16",
        cover: "src/Asset/img/Shadmehr-Music-Collection.jpg",
        title: "halam avaz",
        artist: "shadmehr",
        fav: false,
        mood: "Emotional"

    },

]


const searchResults = document.getElementById("searchResults")

allsounds.forEach((val) => {

    searchResults.innerHTML += `
    
<div data-status="${val.mood}" data-fav="${val.fav}" class="musicc flex p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer items-center gap-3">

    <div class="w-14 h-14 shrink-0 rounded-xl overflow-hidden">

        <img
            src="${val.cover}"
            alt=""
            class="w-full h-full object-cover">

    </div>


    <div class="min-w-0 flex-1">

        <h4 class="text-white text-sm font-semibold truncate">
            ${val.title}
        </h4>

        <p class="text-white/50 text-xs mt-1 truncate">
            ${val.artist}

        </p>

    </div>


    <button
        class="w-9 h-9 shrink-0 rounded-full bg-purple-500/20 hover:bg-purple-500 flex items-center justify-center transition-all duration-300">

        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            class="w-4 h-4 text-white">

            <path
                d="M8 5.14v13.72a1 1 0 0 0 1.52.85l10.12-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14Z"/>

        </svg>

    </button>


    <audio
        src="${val.sound}"
        class="hidden">
    </audio>

</div>

    `


})



// array for all sound //
//  / /  /  / /
//  / /  / /  / 
