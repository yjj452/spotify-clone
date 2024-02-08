
let sonns=0;
    let nam=document.getElementById("name")
    // let isPlaying = false;
    let audios=new Audio("audio/1.mp3");
    let master=document.getElementById("masterc");
    let butoon=document.getElementById("progressbar")
    let df=document.getElementById("gf");
    let con=Array.from(document.getElementsByClassName("container"));
    let vSr=document.getElementsByClassName("songit")

    let s = [{
        songnName: "Time-Traveller",
        filepath: "audio/yy1.mp3",
        cover: "images/yj1.jpg"
    }, {
        songnName: "Ek-Nazar-Mein-Bhi",
        filepath: "audio/yy2.mp3",
        cover: "images/yj2.jpg"
    }, {
        songnName: "aazmale aazmale",

        filepath: "audio/yy3.mp3",
        cover: "images/yj3.jpg"
    }, {
        songnName: "Galti-Se-Mistake",
        filepath: "audio/yy4.mp3",
        cover: "images/yj4.jpg"
    }, {
        songnName: "jabra fan",
        filepath: "audio/yy5.mp3",
        cover: "images/yj5.jpg"
    }, {
        songnName: "Har-Ek-Friend-Kamina-Hota-Hai",
        filepath: "audio/yy6.mp3",
        cover: "images/yj6.jpg"
    }, {
        songnName: "Rockabye",
        filepath: "audio/yy7.mp3",
        cover: "images/yj7.jpg"
    }, {
        songnName: "Yaaron-Dosti",
        filepath: "audio/yy8.mp3",
        cover: "images/yj8.jpg"
    }];

    con.forEach((element,n)=>{
        console.log(element,n)
    element.getElementsByTagName("img")[0].src=s[n].cover;
    element.getElementsByClassName("sonn")[0].innerHTML=s[n].songnName;
    })

    console.log("hi")
    //let play/pause button
    master.addEventListener("click",()=>{//addEventListener perform particular event when we click over that element ,2nd is function
    if(audios.paused||audios.currentTime<=0){
    audios.play()
    // playing = true;
    master.classList.remove("fa-play-circle");
    master.classList.add("fa-pause-circle")
    df.style.opacity=1;
    }

    else{
        audios.pause();
        
    // playing = false;
    master.classList.remove("fa-pause-circle")
    master.classList.add("fa-play-circle");
    df.style.opacity=0;
    }

    })
    // audioe.addEventListener("playing", () => {
    //     playing = true;
    //   });
    //   audioe.addEventListener("pause", () => {
    //     playing = false;
    //   });


    audios.addEventListener("timeupdate",()=>{
        console.log("time update");

    progress=parseInt((audios.currentTime/audios.duration)*100);
    butoon.value=progress;

    })
    butoon.addEventListener("change",()=>{

    audios.currentTime=butoon.value*audios.duration/100;    
    })
    function audio(){

    }
    audio()
    let ss=()=>{
    Array.from(document.getElementsByClassName("songit")).forEach((ele)=>{
    console.log(ele)
    ele.classList.add("fa-play-circle")//without thus we can play one  but while play another the song button is not pause
    ele.classList.remove("fa-pause-circle")

    })

    }
    // Array.from(document.getElementsByClassName("songit")).forEach((ele, n) => {
    //     ele.addEventListener("click", (e) => {
    //         ss();
    //         sonns = parseInt(e.target.id);
    //         e.target.classList.remove("fa-play-circle");
    //         e.target.classList.add("fa-pause-circle");
    //         audioe.src = `audio/${sonns + 1}.mp3`;
    //         nam.innerText = s[sonns].songnName;

    //         audioe.currentTime = 0;
            
    //         if (audioe.paused || audioe.currentTime <= 0) {
    //             audioe.play();
    //             master.classList.add("fa-pause-circle");
    //             master.classList.remove("fa-play-circle");
    //         } else {
    //             audioe.pause();
    //             master.classList.remove("fa-pause-circle");
    //             master.classList.add("fa-play-circle");
    //         }
    //     });
    // });

    // document.getElementById("pre").addEventListener("click", () => {
    //     if (sonns <= 0) {
    //         sonns = 0;
    //     } else {
    //         sonns -= 1;
    //     }
    //     updateAudioSourceAndPlay();
    // });    

    // document.getElementById("next").addEventListener("click", () => {
    //     if (sonns >= s.length - 1) {
    //         sonns = 0;
    //     } else {
    //         sonns += 1;
    //     }
    //     updateAudioSourceAndPlay();
    // });

    // function updateAudioSourceAndPlay() {
    //     audioe.src = `audio/${sonns + 1}.mp3`;
    //     nam.innerText = s[sonns].songnName;

    //     audioe.currentTime = 0;
        
    //     if (audioe.paused || audioe.currentTime <= 0) {
    //         audioe.play();
    //         master.classList.add("fa-pause-circle");
    //         master.classList.remove("fa-play-circle");
    //     } else {
    //         audioe.pause();
    //         master.classList.remove("fa-pause-circle");
    //         master.classList.add("fa-play-circle");
    //     }
    // }
            
        Array.from(document.getElementsByClassName("songit")).forEach((ele, n) => {
          
            ele.addEventListener("click", (e) => {
        ss()
        
        
          
                sonns = parseInt(e.target.id);
                
                
                
            
                    e.target.classList.add("fa-pause-circle");
                    e.target.classList.remove("fa-play-circle");
                
                
            audios.src = `audio/${sonns}.mp3`;

                //  `audio/${ind + 1}.mp3`; // Corrected path
                nam.innerText=s[sonns-1 ].songnName;
                                                                                                                                                            
                audios.currentTime = 0;
                audios.play();
                master.classList.add("fa-pause-circle");
                master.classList.remove("fa-play-circle");

        
            });
        });

        document.getElementById("pre").addEventListener("click",()=>{
        if(sonns<=0){
            sonns=0;
        }
        else{
            sonns-=1;
        }
        audios.src = `audio/${sonns+1}.mp3`;
        nam.innerText=s[sonns-1].songnName;

        //  `audio/${ind + 1}.mp3`; // Corrected path
        audios.currentTime = 0;
        audios.play();
        master.classList.add("fa-pause-circle");
        master.classList.remove("fa-play-circle");


        })
        document.getElementById("next").addEventListener("click",()=>{
        if(sonns>=7){
        sonns=0;
        }
        else{

            sonns+=1;
        }
        audios.src = `audio/${sonns+1}.mp3`;    
        nam.innerText=s[sonns].songnName;
        //  `audio/${ind + 1}.mp3`; // Corrected path
        audios.currentTime = 0;
        audios.play();
        master.classList.add("fa-pause-circle");
        master.classList.remove("fa-play-circle");

        })
    
    