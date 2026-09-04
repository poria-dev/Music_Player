
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


    {

        sound: "https://irsv.upmusics.com/singletracks/2026/09/Shayan%20Yo%20-%20Alaki%20UpMusics.mp3",
        cover: "src/Asset/img/shayanyo.webp",
        title: "alakii",
        artist: "shayan Yo",
        fav: false,
        mood: "Sad"

    },

    {

        sound: "https://irsv.upmusics.com/singletracks/2026/09/Dj%20Hami%20Bcn%20-%20Boom%20UpMusics.mp3",
        cover: "src/Asset/img/Dj-Hami-Bcn-Boom.webp",
        title: "Boom",
        artist: "dj Hami Bcn",
        fav: false,
        mood: "Happy"

    },

    {

        sound: "https://irsv.upmusics.com/singletracks/2026/09/Saeb%20-%20Tasian%20UpMusics.mp3",
        cover: "src/Asset/img/Saeb-Tasian-f1ed5-scaled.webp",
        title: "tasian",
        artist: "saeb",
        fav: false,
        mood: "Sad"

    },

    {

        sound: "https://irsv.upmusics.com/singletracks/2026/09/Arshan%20-%20Oxygen%20UpMusics.mp3",
        cover: "src/Asset/img/Arshan-Oxygen-daf08-scaled.webp",
        title: "Oxygen",
        artist: "Arshan",
        fav: false,
        mood: "Lovely"

    },

    {

        sound: "https://dl.beroosic.ir/music/1404/1/Mahasti-Bia-Benevisim.mp3",
        cover: "src/Asset/img/ئشاشسفه.webp",
        title: "bia benevisim",
        artist: "mahasti",
        fav: false,
        mood: "Nostalgia"

    },

    {

        sound: "https://dl.beroosic.ir/music/1403/12/Saghi-hide.mp3",
        cover: "src/Asset/img/haydeh1.webp",
        title: "saghi",
        artist: "hayedeh",
        fav: false,
        mood: "Nostalgia"

    },

    {

        sound: "https://dl.beroosic.ir/music/1403/12/siyah-Cheshmoon.mp3",
        cover: "src/Asset/img/haydeh1.webp",
        title: "siacheshmon",
        artist: "hayedeh",
        fav: false,
        mood: "Nostalgia"

    },

    {

        sound: "https://dl.beroosic.ir/music/1403/12/Zendegi.mp3",
        cover: "src/Asset/img/haydeh1.webp",
        title: "zendgi",
        artist: "hayedeh",
        fav: false,
        mood: "Today"

    },

]


const searchResults = document.getElementById("searchResults")
const searchinput = document.getElementById("searchInput")
allsounds.forEach((val) => {

    searchResults.innerHTML += `
    
<div data-status="${val.mood}" data-fav="${val.fav}" data-sound="${val.sound}" data-artist="${val.artist}" data-cover="${val.cover}" data-title="${val.title}" class="musicc hidden flex h-[80px] p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer items-center gap-3">

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


</div>

    `

})

const musicc = document.querySelectorAll(".musicc")


searchinput.addEventListener("input", () => {

    allsounds.forEach((val, index) => {

        let x = searchinput.value.trim().toLowerCase()

        let targetmusic = musicc[index]

        if (val.title.toLowerCase().indexOf(x) >= 0 || val.artist.toLowerCase().indexOf(x) >= 0) {

            targetmusic.classList.remove("hidden")
            targetmusic.classList.add("flex")

        } else {
            targetmusic.classList.remove("flex")
            targetmusic.classList.add("hidden")
        }

        if (x == "") {

            musicc.forEach((val) => {
                val.classList.remove("flex")
                val.classList.add("hidden")
            })
        }

    })


})


// array for all sound //
//  / /  /  / /
//  / /  / /  / 













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

    title: "Ebi",

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

const inaboutart = document.querySelectorAll(".aboutart>figure")

inaboutart.forEach((val) => {

    val.addEventListener("click", (e) => {

        filterr.classList.remove("hidden")
        filterr.classList.add("flex")
        filterr.querySelector("p").innerHTML = "choose your artist"
        let x = e.currentTarget
        let id = x.getAttribute("id")

        musicc2.forEach((item) => {

            let text = item.querySelector("p").textContent.trim()

            if (id.toLowerCase() == text.toLowerCase()) {


                item.classList.remove("hidden")
                item.classList.add("flex")

            } else {

                item.classList.add("hidden")
                item.classList.remove("flex")

            }

        })

    })

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
const homeSeek = document.querySelector(".homeSeek")
menuItem.forEach((val) => {

    val.addEventListener("click", () => {

        let x = val.offsetTop

        menuActive.style.top = `${x}px`


        if (val.getAttribute("data-ser") == "on") {

            searchBox.classList.remove("hidden")
            searchBox.classList.add("flex")
            bodyy.classList.add("overflow-hidden")

            homeSeek.classList.remove("flex")
            homeSeek.classList.add("hidden")

            homeAudio.pause()
            homeSeek.classList.add("hidden")

            homePlay.innerHTML = `

      <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24"
       fill="white"
        class="w-5 h-5">

      <path d="M8 5.5v13L19 12 8 5.5Z"/>

      </svg>

    `






        } else {
            searchBox.classList.remove("flex")
            searchBox.classList.add("hidden")
            bodyy.classList.remove("overflow-hidden")


        }


    })

})




// popular playlist /  / /  /  /  

const cardpopular = document.querySelector(".cardpopular")
const overfilter = document.querySelector(".overfilter")
const filterr = document.querySelector(".filterr")

const popular = [

    {
        cover: "src/Asset/img/popularplaylist/0c697696335e7a1.jpeg",
        title: "emotional",
        counter: "10 sound",
        id: "Emotional"

    },
    {
        cover: "src/Asset/img/popularplaylist/e74c9ce3e3a63e7.jpeg",
        title: "today",
        counter: "13 sound",
        id: "Today"


    },
    {
        cover: "src/Asset/img/popularplaylist/ec2f18bcf8eaa48.jpeg",
        title: "lovely",
        counter: "7 sound",
        id: "Lovely"


    },

]

popular.forEach((val) => {

    cardpopular.innerHTML += `

        <div class="cards w-full h-1/3 flex items-center gap-2 my-2 text-white">

            <figure class="w-[30%] cursor-pointer h-full shrink-0">

                <img id="${val.id}" src="${val.cover}" alt="" class="w-full h-full object-cover rounded-md">

            </figure>

            <div class="px-2 w-[70%] min-w-0">

                <h6 class="text-2xl capitalize font-bold font-[font4]">${val.title}</h6>

                <span class="text-md opacity-70 font-bold font-font3">${val.counter}</span>

            </div>

        </div>

    `

})


const cards = document.querySelectorAll(".cards")


cards.forEach((item) => {

    item.addEventListener("click", (e) => {

        let x = e.target.closest(".cards")
        let id = x.querySelector("img").getAttribute("id")

        console.log(id)

        filterr.classList.remove("hidden")
        filterr.classList.add("flex")
        filterr.querySelector("p").textContent = "choose your popular play list"

        musicc2.forEach((val) => {

            if (val.getAttribute("data-status") == id) {

                val.classList.remove("hidden")
                val.classList.add("flex")

            } else {

                val.classList.add("hidden")
                val.classList.remove("flex")

            }

        })

    })

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

            homeSeek.classList.remove("flex")
            homeSeek.classList.add("hidden")

            homeAudio.pause()

            homePlay.innerHTML = `

      <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24"
       fill="white"
        class="w-5 h-5">

      <path d="M8 5.5v13L19 12 8 5.5Z"/>

      </svg>

    `


        } else {
            searchBox.classList.remove("flex")
            searchBox.classList.add("hidden")
            bodyy.classList.remove("overflow-hidden")

            homeSeek.classList.add("flex")
            homeSeek.classList.remove("hidden")

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

        homeAudio.pause()
        audio1.pause()

        homePlay.innerHTML = `

      <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24"
       fill="white"
        class="w-5 h-5">

      <path d="M8 5.5v13L19 12 8 5.5Z"/>

      </svg>

    `
        play.innerHTML = `

      <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24"
       fill="white"
        class="w-5 h-5">

      <path d="M8 5.5v13L19 12 8 5.5Z"/>

      </svg>

    `

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











// filter //  / /  / /  /  / /  / /  /  / / /  / /  / /  /  /  /  / /  /




filterr.addEventListener("click", (e) => {

    if (e.target == filterr) {

        filterr.classList.remove("flex")
        filterr.classList.add("hidden")

    }
})

allsounds.forEach((val) => {

    overfilter.innerHTML += `

<div data-status="${val.mood}" data-fav="${val.fav}" data-sound="${val.sound}" data-artist="${val.artist}" data-cover="${val.cover}" data-title="${val.title}" class="musicc2 w-full flex h-[80px] p-3 rounded-2xl bg-white/50 hover:bg-white/10 transition-all duration-300 cursor-pointer items-center gap-3 *:text-black">

    <div class="w-14 h-14 shrink-0 rounded-xl overflow-hidden">

        <img
            src="${val.cover}"
            alt=""
            class="w-full h-full object-cover">

    </div>


    <div class="min-w-0 flex-1">

        <h4 class=" text-sm font-semibold truncate">
            ${val.title}
        </h4>

        <p class="text-black/50 text-xs mt-1 truncate">
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


</div>

`

})
const musicc2 = document.querySelectorAll(".musicc2")


// filter //  / /  / /  /  / /  / /  /  / / /  / /  / /  /  /  /  / /  /





// category / /  / /  / / /  /   /  / /  /  / / /  / /  /  /  /




const cardmode = document.querySelectorAll(".cardmode >div")

cardmode.forEach((val) => {
    val.addEventListener("click", (e) => {

        filterr.classList.remove("hidden")
        filterr.classList.add("flex")
        filterr.querySelector("p").textContent = "choose your mood"

        musicc2.forEach((item) => {

            if (item.getAttribute("data-status") == val.getAttribute("data-status")) {

                item.classList.remove("hidden")
                item.classList.add("flex")

            } else {
                item.classList.remove("flex")
                item.classList.add("hidden")
            }

        })

    })
})



// category / /  / /  / / /  /   /  / /  /  / / /  / /  /  /  /







// loading /  / /  /  /  

const loadd = document.querySelector(".loadde")

setTimeout(() => {

    loadd.classList.remove("flex")
    bodyy.classList.remove("overflow-hidden")
    loadd.classList.add("hidden")

}, 10000)

// loading /  / /  /  /  




// active seecbar


const btn_play_music = document.querySelectorAll(".musicc>button")

const seek = document.querySelector(".seek")

const cover2 = document.getElementById("cover")

const song2 = document.getElementById("song")

const artist2 = document.getElementById("artist")

const current2 = document.getElementById("current")

const bar2 = document.getElementById("bar")

const duration2 = document.getElementById("duration")

const audio1 = document.getElementById("audio1")

const fav2 = document.getElementById("fav")

const player = document.getElementById("player")

const play = document.getElementById("play")

const progress = document.getElementById("progress")

const back = document.getElementById("back")

const next = document.getElementById("next")

const rep = document.getElementById("rep")

let turnlight = false

let index = 0

btn_play_music.forEach((val) => {

    val.addEventListener("click", (e) => {

        seek.classList.remove("hidden")
        seek.classList.add("flex")

        player.classList.remove("hidden")
        player.classList.add("flex")

        turnlight = true

        bar2.style.width = 0

        let x = e.currentTarget

        let par = x.closest(".musicc")

        let title = par.dataset.title

        let cover = par.dataset.cover

        let sound = par.dataset.sound

        let artist = par.dataset.artist

        let fav = par.dataset.fav

        index = allsounds.findIndex((item) => item.title == title)

        cover2.src = cover

        song2.textContent = title

        artist2.textContent = artist

        audio1.src = sound

        fav2.dataset.fav = fav

        play.innerHTML = `

        <svg

          xmlns="http://www.w3.org/2000/svg"

          viewBox="0 0 24 24"

            fill="currentColor"

            class="w-5 h-5 text-white">

            <path d="M7 5.5a1.5 1.5 0 0 1 3 0v13a1.5 1.5 0 0 1-3 0v-13Zm7 0a1.5 1.5 0 0 1 3 0v13a1.5 1.5 0 0 1-3 0v-13Z"/>

        </svg>

        `

        audio1.play()

    })

})

audio1.addEventListener("loadedmetadata", () => {

    let min = Math.floor(audio1.duration / 60)

    let sec = Math.floor(audio1.duration % 60)

    sec = sec.toString().padStart(2, "0")

    duration2.textContent = `${min}:${sec}`

})

audio1.addEventListener("timeupdate", () => {

    let min = Math.floor(audio1.currentTime / 60)

    let sec = Math.floor(audio1.currentTime % 60)

    sec = sec.toString().padStart(2, "0")

    current2.textContent = `${min}:${sec}`

    let navar = audio1.currentTime / audio1.duration * 100

    bar2.style.width = `${navar}%`

})

play.addEventListener("click", () => {

    if (audio1.paused) {

        audio1.play()

        turnlight = true

        play.innerHTML = `

        <svg

          xmlns="http://www.w3.org/2000/svg"

          viewBox="0 0 24 24"

          fill="currentColor"

          class="w-5 h-5 text-white">

          <path d="M7 5.5a1.5 1.5 0 0 1 3 0v13a1.5 1.5 0 0 1-3 0v-13Zm7 0a1.5 1.5 0 0 1 3 0v13a1.5 1.5 0 0 1-3 0v-13Z"/>

        </svg>

        `

    } else {

        audio1.pause()

        turnlight = false

        play.innerHTML = `

        <svg

            id="playIcon"

            xmlns="http://www.w3.org/2000/svg"

            fill="currentColor"

            viewBox="0 0 24 24"

            class="w-6 h-6">

            <path d="M8 5.5v13L19 12 8 5.5Z"/>

        </svg>

        `

    }

})

progress.addEventListener("click", (e) => {

    let wid = progress.clientWidth

    let clickk = e.offsetX

    let percent = clickk / wid

    audio1.currentTime = percent * audio1.duration

})

audio1.addEventListener("ended", () => {

    music_next_playorafter()

})

next.addEventListener("click", () => {

    music_next_playorafter()

})

back.addEventListener("click", () => {

    index--

    if (index < 0) {

        index = allsounds.length - 1

    }

    cover2.src = allsounds[index].cover

    song2.textContent = allsounds[index].title

    artist2.textContent = allsounds[index].artist

    audio1.src = allsounds[index].sound

    audio1.play()

    turnlight = true

    play.innerHTML = `

    <svg

      xmlns="http://www.w3.org/2000/svg"

      viewBox="0 0 24 24"

      fill="currentColor"

      class="w-5 h-5 text-white">

      <path d="M7 5.5a1.5 1.5 0 0 1 3 0v13a1.5 1.5 0 0 1-3 0v-13Zm7 0a1.5 1.5 0 0 1 3 0v13a1.5 1.5 0 0 1-3 0v-13Z"/>

    </svg>

    `

    bar2.style.width = 0

})

function music_next_playorafter(params) {

    index++

    if (index >= allsounds.length) {

        index = 0

    }

    cover2.src = allsounds[index].cover

    song2.textContent = allsounds[index].title

    artist2.textContent = allsounds[index].artist

    audio1.src = allsounds[index].sound

    audio1.play()

    turnlight = true

    play.innerHTML = `

    <svg

      xmlns="http://www.w3.org/2000/svg"

      viewBox="0 0 24 24"

      fill="currentColor"

      class="w-5 h-5 text-white">

      <path d="M7 5.5a1.5 1.5 0 0 1 3 0v13a1.5 1.5 0 0 1-3 0v-13Zm7 0a1.5 1.5 0 0 1 3 0v13a1.5 1.5 0 0 1-3 0v-13Z"/>

    </svg>

    `

    bar2.style.width = 0

}

// repeat

rep.addEventListener("click", () => {

    audio1.loop = !audio1.loop

    if (audio1.loop) {

        rep.classList.remove("text-white/60")
        rep.classList.add("text-violet-400")


    } else {

        rep.classList.add("text-white/60")
        rep.classList.remove("text-violet-400")


    }

})

// active seecbar














// seek2 /  /  / /  /  /  /  /  /  //  in home  / /  /  / /  / 


const btn_play_home = document.querySelectorAll(".musicc2>button")
const homeCover = document.querySelector("#homeCover")
const homeSong = document.querySelector("#homeSong")
const homeArtist = document.querySelector("#homeArtist")
const homeCurrent = document.querySelector("#homeCurrent")
const homeBar = document.querySelector("#homeBar")
const homeDuration = document.querySelector("#homeDuration")
const homeAudio = document.querySelector("#homeAudio")
const homePlayer = document.querySelector("#homePlayer")
const homePlay = document.querySelector("#homePlay")
const homeProgress = document.querySelector("#homeProgress")
const homeBack = document.querySelector("#homeBack")
const homeNext = document.querySelector("#homeNext")


let homeTurnlight = false
let homeIndex = 0


btn_play_home.forEach((val) => {

    val.addEventListener("click", (e) => {

        audio1.pause()

        play.innerHTML = `

      <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24"
       fill="white"
        class="w-5 h-5">

      <path d="M8 5.5v13L19 12 8 5.5Z"/>

      </svg>

    `

        homeSeek.classList.remove("hidden")
        homeSeek.classList.add("flex")

        homePlayer.classList.remove("hidden")
        homePlayer.classList.add("grid")


        homeTurnlight = true

        homeBar.style.width = "0%"


        let x = e.currentTarget

        let par = x.closest(".musicc2")


        let title = par.dataset.title
        let cover = par.dataset.cover
        let sound = par.dataset.sound
        let artist = par.dataset.artist


        homeIndex = allsounds.findIndex(
            (item) => item.title == title
        )


        homeCover.src = cover

        homeSong.textContent = title

        homeArtist.textContent = artist

        homeAudio.src = sound


        homeCurrent.textContent = "00:00"

        homeDuration.textContent = "00:00"


        homePlay.innerHTML = `

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 text-white">

                <path d="M7 5.5a1.5 1.5 0 0 1 3 0v13a1.5 1.5 0 0 1-3 0v-13Zm7 0a1.5 1.5 0 0 1 3 0v13a1.5 1.5 0 0 1-3 0v-13Z"/>

            </svg>

        `


        homeAudio.play()

    })

})



homeAudio.addEventListener("loadedmetadata", () => {

    let min = Math.floor(homeAudio.duration / 60)

    let sec = Math.floor(homeAudio.duration % 60)

    sec = sec.toString().padStart(2, "0")


    homeDuration.textContent = `${min}:${sec}`

})



homeAudio.addEventListener("timeupdate", () => {

    let min = Math.floor(homeAudio.currentTime / 60)

    let sec = Math.floor(homeAudio.currentTime % 60)

    sec = sec.toString().padStart(2, "0")


    homeCurrent.textContent = `${min}:${sec}`


    let navar =
        homeAudio.currentTime / homeAudio.duration * 100


    homeBar.style.width = `${navar}%`

})



homePlay.addEventListener("click", () => {

    if (homeAudio.paused) {

        homeAudio.play()

        homeTurnlight = true


        homePlay.innerHTML = `

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 text-white">

                <path d="M7 5.5a1.5 1.5 0 0 1 3 0v13a1.5 1.5 0 0 1-3 0v-13Zm7 0a1.5 1.5 0 0 1 3 0v13a1.5 1.5 0 0 1-3 0v-13Z"/>

            </svg>

        `

    }

    else {

        homeAudio.pause()

        homeTurnlight = false


        homePlay.innerHTML = `

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-6 h-6">

                <path d="M8 5.5v13L19 12 8 5.5Z"/>

            </svg>

        `

    }

})



homeProgress.addEventListener("click", (e) => {

    let wid = homeProgress.clientWidth

    let clickk = e.offsetX

    let percent = clickk / wid


    homeAudio.currentTime =
        percent * homeAudio.duration

})



homeAudio.addEventListener("ended", () => {

    if (homeAudio.loop) {

        homeAudio.currentTime = 0

        homeAudio.play()

        return

    }


    home_music_next_playorafter()

})



homeNext.addEventListener("click", () => {

    home_music_next_playorafter()

})



homeBack.addEventListener("click", () => {

    homeIndex--


    if (homeIndex < 0) {

        homeIndex = allsounds.length - 1

    }


    homeCover.src =
        allsounds[homeIndex].cover


    homeSong.textContent =
        allsounds[homeIndex].title


    homeArtist.textContent =
        allsounds[homeIndex].artist


    homeAudio.src =
        allsounds[homeIndex].sound


    homeAudio.currentTime = 0


    homeCurrent.textContent = "00:00"

    homeBar.style.width = "0%"


    homeAudio.play()


    homeTurnlight = true


    homePlay.innerHTML = `

        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-5 h-5 text-white">

            <path d="M7 5.5a1.5 1.5 0 0 1 3 0v13a1.5 1.5 0 0 1-3 0v-13Zm7 0a1.5 1.5 0 0 1 3 0v13a1.5 1.5 0 0 1-3 0v-13Z"/>

        </svg>

    `

})



function home_music_next_playorafter() {

    homeIndex++


    if (homeIndex >= allsounds.length) {

        homeIndex = 0

    }


    homeCover.src =
        allsounds[homeIndex].cover


    homeSong.textContent =
        allsounds[homeIndex].title


    homeArtist.textContent =
        allsounds[homeIndex].artist


    homeAudio.src =
        allsounds[homeIndex].sound


    homeAudio.currentTime = 0


    homeCurrent.textContent = "00:00"

    homeBar.style.width = "0%"


    homeAudio.play()


    homeTurnlight = true


    homePlay.innerHTML = `

        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-5 h-5 text-white">

            <path d="M7 5.5a1.5 1.5 0 0 0-3 0v13a1.5 1.5 0 0 0 3 0v-13Zm7 0a1.5 1.5 0 0 0-3 0v13a1.5 1.5 0 0 0 3 0v-13Z"/>

        </svg>

    `

}



// repeat


const homeRep = document.createElement("button")


homeRep.id = "homeRep"

homeRep.type = "button"


homeRep.className =
    "w-7 h-7 shrink-0 flex items-center justify-center text-white/60 hover:text-violet-400 active:scale-90 transition-all cursor-pointer"


homeRep.innerHTML = `

    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-4 h-4">

        <path d="M17 1l4 4-4 4"/>

        <path d="M3 11V9a4 4 0 014-4h14"/>

        <path d="M7 23l-4-4 4-4"/>

        <path d="M21 13v2a4 4 0 01-4 4H3"/>

    </svg>

`


homeNext.parentElement.insertBefore(homeRep, homeNext)



homeRep.addEventListener("click", () => {

    homeAudio.loop = !homeAudio.loop


    if (homeAudio.loop) {

        homeRep.classList.remove("text-white/60")

        homeRep.classList.add("text-violet-400")

    }

    else {

        homeRep.classList.add("text-white/60")

        homeRep.classList.remove("text-violet-400")

    }

})


// seek2 /  /  / /  /  /  /  /  /  //  in home  / /  /  / /  / 


