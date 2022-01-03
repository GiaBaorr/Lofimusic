// full screen
// zoom btn
var html = document.querySelector('html')
const zoomBtn = document.querySelector('#zoom');
zoomBtn.onclick = (e) =>{
    e.stopPropagation()
    var isFullScreen = document.fullscreenElement
    if(isFullScreen === null){
        html.requestFullscreen()
    }
    else{
        document.exitFullscreen()
    }
}

// day night video switch day night
const switchBtn = document.querySelector('#switch-btn')
let dayVideo = document.querySelector('#day-video')
let nightVideo = document.querySelector('#night-video')
switchBtn.addEventListener('click', (e) =>{e.stopPropagation()})
switchBtn.onchange = (e) =>{
    if(e.target.checked){
        dayVideo.style.opacity = 1;
        nightVideo.style.opacity = 0;
    }else {
        nightVideo.style.opacity = 1;
        dayVideo.style.opacity = 0;
    }
}

// ============================
// range input styling
document.querySelectorAll("input[type=range]").forEach(function(item){
    item.addEventListener("input",function() {
            var value = (this.value-this.min)/(this.max-this.min)*100
            this.style.background = 'linear-gradient(to right, #f3a952 0%, #f3a952 ' + value + '%, transparent ' + value + '%, transparent 100%)'
    })
})


// ============================================
// MODAL
const topFilter = document.querySelector('#top-filter');
let quitModal = document.querySelector('.quit-modal')
quitModal.onclick = function(){
    topFilter.style.display = "none"
    document.querySelector('#tutorial').style.display ="none"
}
topFilter.onclick= function(e){
    topFilter.style.display = "none"
    document.querySelector('#tutorial').style.display ="none"
    document.querySelector('#contact-us').style.display ="none"
    document.querySelector('#sign-up-board').style.display ="none"
    document.querySelector('#login-board').style.display ="none"
    document.querySelector('#about-us-board').style.display ="none"
    document.querySelector('#policy-privacy').style.display ="none"
    document.querySelector('#terms-conditions').style.display ="none"
    document.querySelector('#pricing-board').style.display ="none"
    document.querySelector('#carousel img').style.animationPlayState = 'paused'
}

// modal next tutorial
document.querySelector('#tutorial').onclick = function(e){
    e.stopPropagation()
}
document.querySelector(".navlink:nth-child(1)").onclick = function(){
    topFilter.style.display = "flex"
    document.querySelector('#tutorial').style.display ="unset"

}
const nextTutorialBtn = document.querySelector('#next-slide')
let counter = 1;
let sliderButton = document.querySelectorAll(".slider-button")

function slide(){
    if(counter==5){
        document.querySelector('#tutorial').style.display ="none"
        document.querySelector('#sign-up-board').style.display ="block"
    }
    if(counter <5){
        if(counter==0) {counter =1}
        document.querySelector('.slider').style.transform = `translateX(${-450*counter}px)`
        document.querySelector('.slider-text').style.transform = `translateX(${-450*counter}px)`
        counter++;
        document.querySelector('.slider-button.slider-button--active').classList.remove('slider-button--active')
        sliderButton[counter-1].classList.add('slider-button--active')
    }
}
sliderButton.forEach(function(slide){
    slide.onclick = function(){
        document.querySelector('.slider-button.slider-button--active').classList.remove('slider-button--active')
        slide.classList.add('slider-button--active')
        position = slide.getAttribute('data-slide')-1
        counter = slide.getAttribute('data-slide')
        document.querySelector('.slider').style.transform = `translateX(${-450*position}px)`
        document.querySelector('.slider-text').style.transform = `translateX(${-450*position}px)`
    }
})


// Contact us
document.querySelector('#contact-us').onclick = function(e){e.stopPropagation()}
document.querySelectorAll(".navlink")[2].onclick = function(){
    topFilter.style.display = "flex"
    document.querySelector('#contact-us').style.display ="block"
}
// sign up
document.querySelector('#sign-up-board').onclick = function(e){e.stopPropagation()}
document.querySelector("#sign-up-btn").onclick = function(){
    topFilter.style.display = "flex"
    document.querySelector('#sign-up-board').style.display ="block"
}
// about us
document.querySelector('#about-us-board').onclick = function(e){ e.stopPropagation()}
document.querySelector('#about-us').addEventListener("click", function(){
    topFilter.style.display = "flex"
    document.querySelector('#about-us-board').style.display ="block"
})
// pricing
document.querySelector('#pricing-board').onclick = function(e){ e.stopPropagation()}
document.querySelector('#pricing-btn').addEventListener("click", function(){
    topFilter.style.display = "flex"
    document.querySelector('#pricing-board').style.display ="flex"
    let img = document.querySelector('#carousel img')
    img.style.animationPlayState = 'running'
})

let isMouseDown = false;
// let startX;
// let scrollLeft;

document.querySelector('#carousel img').addEventListener('mousedown',function(e){
    isMouseDown = true;
    this.style.animationPlayState = 'paused'
    this.style.cursor = 'grabbing'

    startX = e.pageX - this.offsetLeft
})
document.querySelector('#carousel img').addEventListener('mouseup',function(){
    isMouseDown = false;
    this.style.animationPlayState = 'running'
    this.style.cursor = 'grab'
    this.style.transform = `translateX({0px)`
})
document.querySelector('#carousel img').addEventListener('mouseleave',function(){
    isMouseDown = false;
    this.style.animationPlayState = 'running'
    this.style.transform = `translateX({0px)`

})
document.querySelector('#carousel img').addEventListener('mousemove',function(e){
    if(isMouseDown == false) return;
    this.style.animationPlayState = 'paused'
    // let x = e.pageX - this.offsetLeft
    // let walk = x - startX
})


// term policy
// arrow
document.querySelectorAll('.back-to-about-us').forEach(function(arrow){
    arrow.onclick = function() {
        document.querySelector('#terms-conditions').style.display ="none"
        document.querySelector('#policy-privacy').style.display ="none"
        document.querySelector('#about-us-board').style.display ="block"
    }
})
// term
document.querySelector('#terms-conditions').onclick = function(e){ e.stopPropagation()}
document.querySelectorAll('.term-show--btn').forEach(function(item){
    item.addEventListener('click', function(){
        document.querySelector('#about-us-board').style.display ="none"
        document.querySelector('#sign-up-board').style.display ="none"
        document.querySelector('#terms-conditions').style.display ="block"
    })
})
// privacy
document.querySelector('#policy-privacy').onclick = function(e){ e.stopPropagation()}
document.querySelectorAll('.privacy-show--btn').forEach(function(item){
    item.addEventListener('click', function(){
        document.querySelector('#about-us-board').style.display ="none"
        document.querySelector('#policy-privacy').style.display ="block"
    })
})





// login
document.querySelector('#login-board').onclick = function(e){e.stopPropagation()
}
document.querySelector("#login-btn").onclick = function(){
    topFilter.style.display = "flex"
    document.querySelector('#login-board').style.display ="block"
}
// login sign up switch
let switchToLogIn = document.querySelector('#login--switch')
let switchToSignUp = document.querySelector('#sign-up--switch')
switchToLogIn.onclick = function(){
    document.querySelector('#sign-up-board').style.display ="none"
    document.querySelector('#login-board').style.display ="block"
}
switchToSignUp.onclick = function(){
    document.querySelector('#sign-up-board').style.display ="block"
    document.querySelector('#login-board').style.display ="none"
}
// ==========================================
// music
let musicTypes = document.querySelectorAll('.mood-icons--btn')
let musicGenre = 'sleep'
musicTypes.forEach(function(type){
    type.onclick = function(){
        document.querySelector('.mood-icons--btn.btn--active').classList.remove('btn--active')
        this.classList.add('btn--active')
        musicGenre = this.getAttribute('data-music')
        if(musicGenre === 'sleep'){
            mainAudio.setAttribute('src',`${mainMusic[0][0]}`)
        }
        if(musicGenre === 'jazz'){
            mainAudio.setAttribute('src',`${mainMusic[1][0]}`)
        }
        if(musicGenre === 'chill'){
            mainAudio.setAttribute('src',`${mainMusic[2][0]}`)
        }
        mainAudio.play()
        changeToPauseBtn()
        renderRandomIcon()
    }
})
const mainMusic =[
    ['./assests/mainmusic/sleepy1.mp3','./assests/mainmusic/sleepy2.mp3','./assests/mainmusic/sleepy3.mp3','./assests/mainmusic/sleepy4.mp3'],
    ['./assests/mainmusic/jazz1.mp3','./assests/mainmusic/jazz2.mp3','./assests/mainmusic/jazz3.mp3'],
    ['./assests/mainmusic/chill1.mp3','./assests/mainmusic/chill2.mp3','./assests/mainmusic/chill3.mp3']]
let playBtn = document.querySelector('#play-btn')
let pauseBtn = document.querySelector('#pause-btn')
let mainAudio = document.querySelector('#main-audio')

// change icon
function changeToPauseBtn () {
    playBtn.style.display = "none"
    pauseBtn.style.display = "block"
}
function changeToPlayBtn () {
    playBtn.style.display = "block"
    pauseBtn.style.display = "none"
}
// play pause button
playBtn.onclick = function(e) {
    e.stopPropagation()
    changeToPauseBtn()
    // set up music
    mainAudio.play()
}
pauseBtn.onclick = function(e) {
    e.stopPropagation() 
    changeToPlayBtn()
    // set up music
    mainAudio.pause()
}
// next button previous button
let nextButton = document.querySelector('#next-btn')
let prevButton = document.querySelector('#prev-btn')
nextButton.onclick = function(e) {
    e.stopPropagation()
    playNextSong()
}
prevButton.onclick = function(e) {
    e.stopPropagation()
    playPrevSong()
}
// next song previous song function
function playNextSong() {
        if(musicGenre === 'sleep'){
            let currentMusic = mainMusic[0].indexOf(mainAudio.getAttribute('src'))
            if(currentMusic !==mainMusic[0].length-1){
                mainAudio.setAttribute('src', mainMusic[0][currentMusic+1])
            }else {
                mainAudio.setAttribute('src', mainMusic[0][0])
            }
        }
        else if (musicGenre === 'jazz'){
            let currentMusic = mainMusic[1].indexOf(mainAudio.getAttribute('src'))
            if(currentMusic !==mainMusic[1].length-1){
                mainAudio.setAttribute('src', mainMusic[1][currentMusic+1])
            }else {
                mainAudio.setAttribute('src', mainMusic[1][0])
            }
        }
        else if (musicGenre === 'chill'){
            let currentMusic = mainMusic[2].indexOf(mainAudio.getAttribute('src'))
            if(currentMusic !==mainMusic[2].length-1){
                mainAudio.setAttribute('src', mainMusic[2][currentMusic+1])
            }else {
                mainAudio.setAttribute('src', mainMusic[2][0])
            }
        }
        // play
        changeToPauseBtn()
        mainAudio.play()
        renderRandomIcon()

}
function playPrevSong() {
    if(musicGenre === 'sleep'){
        let currentMusic = mainMusic[0].indexOf(mainAudio.getAttribute('src'))
        if(currentMusic !==0){
            mainAudio.setAttribute('src', mainMusic[0][currentMusic-1])
        }else {
            mainAudio.setAttribute('src', mainMusic[0][mainMusic[0].length-1])
        }
    }
    if(musicGenre === 'jazz'){
        let currentMusic = mainMusic[1].indexOf(mainAudio.getAttribute('src'))
        if(currentMusic !==0){
            mainAudio.setAttribute('src', mainMusic[1][currentMusic-1])
        }else {
            mainAudio.setAttribute('src', mainMusic[1][mainMusic[1].length-1])
        }
    }
    if(musicGenre === 'chill'){
        let currentMusic = mainMusic[2].indexOf(mainAudio.getAttribute('src'))
        if(currentMusic !==0){
            mainAudio.setAttribute('src', mainMusic[2][currentMusic-1])
        }else {
            mainAudio.setAttribute('src', mainMusic[2][mainMusic[2].length-1])
        }
    }
    // play
    changeToPauseBtn()
    mainAudio.play()
    renderRandomIcon()
}

// music icon footer
let musicIconArray = ["./assests/footer-icon/chillsp.png","./assests/footer-icon/salad.png","./assests/footer-icon/purity.png","./assests/footer-icon/kiwi.png"]
function renderRandomIcon() {
    let musicIcon = document.querySelector('#music-icon')
    musicIcon.innerHTML = `<img src="${musicIconArray[Math.round(Math.random()*3)]}">`
}
//=================== Volume========================
// main volume
let mainVolume = document.querySelector('#volume-bar')
mainVolume.addEventListener('input', function(){
    mainAudio.volume = this.value/100
})
// effect volume
// traffic
document.querySelector('#traffic-volume').addEventListener('input', function(){
    document.querySelector('#traffic-audio').play()
    document.querySelector('#traffic-audio').volume = this.value/100
})
// change video rain day
// rain
let previousValueOfRainVolume = 0
document.querySelector('#rain-volume').addEventListener('input', function(){
    document.querySelector('#rain-audio').play()
    document.querySelector('#rain-audio').volume = this.value/100
    if(this.value >= 10 && previousValueOfRainVolume < 10){
        document.querySelector('#day-video').style.opacity = 0
        document.querySelector('#night-video').style.opacity = 0

        setTimeout(function(){
            document.querySelector('#day-video').setAttribute('src', './assests/BDR RAINY DAY - Christmas ver.mp4')
            document.querySelector('#night-video').setAttribute('src', './assests/BDR RAINY NIGHT - Christmas ver.mp4')
            
            if(document.querySelector('#day-night--switch').checked){
                document.querySelector('#day-video').style.opacity = 1
                document.querySelector('#night-video').style.opacity = 0
            }else{
                document.querySelector('#day-video').style.opacity = 0
                document.querySelector('#night-video').style.opacity = 1
            }
        },2000)
    }else if(this.value <10 && previousValueOfRainVolume >=10) {
        document.querySelector('#day-video').style.opacity = 0
        document.querySelector('#night-video').style.opacity = 0

        setTimeout(function(){
            document.querySelector('#day-video').setAttribute('src', './assests/BDR Day-Christmas ver 112521 (1).mp4')
            document.querySelector('#night-video').setAttribute('src', './assests/BDR STARRY NIGHT - Christmas ver.mp4')
            

            if(document.querySelector('#day-night--switch').checked){
                document.querySelector('#day-video').style.opacity = 1
                document.querySelector('#night-video').style.opacity = 0
            }else{
                document.querySelector('#day-video').style.opacity = 0
                document.querySelector('#night-video').style.opacity = 1
            }
        },2000)
    }
    previousValueOfRainVolume = this.value
})
// fireplace
document.querySelector('#fireplace-volume').addEventListener('input', function(){
    document.querySelector('#fireplace-audio').play()
    document.querySelector('#fireplace-audio').volume = this.value/100
})
// campfire
document.querySelector('#campfire-volume').addEventListener('input', function(){
    document.querySelector('#campfire-audio').play()
    document.querySelector('#campfire-audio').volume = this.value/100
})
// forest
document.querySelector('#forest-volume').addEventListener('input', function(){
    document.querySelector('#forest-audio').play()
    document.querySelector('#forest-audio').volume = this.value/100
})
// forest-rain
document.querySelector('#forest-rain-volume').addEventListener('input', function(){
    document.querySelector('#forest-rain-audio').play()
    document.querySelector('#forest-rain-audio').volume = this.value/100
})
// waves
document.querySelector('#waves-volume').addEventListener('input', function(){
    document.querySelector('#waves-audio').play()
    document.querySelector('#waves-audio').volume = this.value/100
})
// fan
document.querySelector('#fan-volume').addEventListener('input', function(){
    document.querySelector('#fan-audio').play()
    document.querySelector('#fan-audio').volume = this.value/100
})
// storm
document.querySelector('#storm-volume').addEventListener('input', function(){
    document.querySelector('#storm-audio').play()
    document.querySelector('#storm-audio').volume = this.value/100
})
// river
document.querySelector('#river-volume').addEventListener('input', function(){
    document.querySelector('#river-audio').play()
    document.querySelector('#river-audio').volume = this.value/100
})
// bird
document.querySelector('#bird-volume').addEventListener('input', function(){
    document.querySelector('#bird-audio').play()
    document.querySelector('#bird-audio').volume = this.value/100
})
// people
document.querySelector('#people-volume').addEventListener('input', function(){
    document.querySelector('#people-audio').play()
    document.querySelector('#people-audio').volume = this.value/100
})
// wind
document.querySelector('#wind-volume').addEventListener('input', function(){
    document.querySelector('#wind-audio').play()
    document.querySelector('#wind-audio').volume = this.value/100
})
// ocean
document.querySelector('#ocean-volume').addEventListener('input', function(){
    document.querySelector('#ocean-audio').play()
    document.querySelector('#ocean-audio').volume = this.value/100
})
// blizzard
document.querySelector('#blizzard-volume').addEventListener('input', function(){
    document.querySelector('#blizzard-audio').play()
    document.querySelector('#blizzard-audio').volume = this.value/100
})




// ====================== modifier modifier icons modifier event
// display none when click outside
document.querySelector('html').onclick = function(){
    if(!document.querySelector('#settings-board').classList.contains('display-none')){
        document.querySelector('#settings-board').classList.add('display-none')
        document.querySelector('#settings').classList.remove('modifier-icon--active')
    }
    if(!document.querySelector('#templates-board').classList.contains('display-none')){
        document.querySelector('#templates-board').classList.add('display-none')
        document.querySelector('#templates').classList.remove('modifier-icon--active')
    }
    if(!document.querySelector('#videos-list-board').classList.contains('display-none')){
        document.querySelector('#videos-list-board').classList.add('display-none')
        document.querySelector('#videos-list').classList.remove('modifier-icon--active')
    }
    if(!document.querySelector('#focus-mode-board').classList.contains('display-none')){
        document.querySelector('#focus-mode-board').classList.add('display-none')
        document.querySelector('#focus-mode').classList.remove('modifier-icon--active')
    }
}
// settings board
document.querySelector('#settings').addEventListener("click", function(e){
    e.stopPropagation()
    document.querySelector('#settings').classList.toggle('modifier-icon--active')
    document.querySelector('#settings-board').classList.toggle('display-none')

    
    document.querySelector('#templates').classList.remove('modifier-icon--active')
    document.querySelector('#templates-board').classList.add('display-none')
    document.querySelector('#videos-list').classList.remove('modifier-icon--active')
    document.querySelector('#videos-list-board').classList.add('display-none')
    document.querySelector('#focus-mode').classList.remove('modifier-icon--active')
    document.querySelector('#focus-mode-board').classList.add('display-none')
})
document.querySelector('#settings-board').addEventListener('click',function(e){
    e.stopPropagation()
})
// templates
document.querySelector('#templates').addEventListener("click", function(e){
    e.stopPropagation()
    document.querySelector('#templates').classList.toggle('modifier-icon--active')
    document.querySelector('#templates-board').classList.toggle('display-none')

    document.querySelector('#settings').classList.remove('modifier-icon--active')
    document.querySelector('#settings-board').classList.add('display-none')
    document.querySelector('#videos-list').classList.remove('modifier-icon--active')
    document.querySelector('#videos-list-board').classList.add('display-none')
    document.querySelector('#focus-mode').classList.remove('modifier-icon--active')
    document.querySelector('#focus-mode-board').classList.add('display-none')
})
document.querySelector('#templates-board').addEventListener('click',function(e){
    e.stopPropagation()
})
//videos-list
document.querySelector('#videos-list').addEventListener("click", function(e){
    e.stopPropagation()
    document.querySelector('#videos-list').classList.toggle('modifier-icon--active')
    document.querySelector('#videos-list-board').classList.toggle('display-none')

    document.querySelector('#settings').classList.remove('modifier-icon--active')
    document.querySelector('#settings-board').classList.add('display-none')
    document.querySelector('#templates').classList.remove('modifier-icon--active')
    document.querySelector('#templates-board').classList.add('display-none')
    document.querySelector('#focus-mode').classList.remove('modifier-icon--active')
    document.querySelector('#focus-mode-board').classList.add('display-none')
})
document.querySelector('#videos-list-board').addEventListener('click',function(e){
    e.stopPropagation()
})
//focus mode 
document.querySelector('#focus-mode').addEventListener('click',function(e){
    e.stopPropagation()
    document.querySelector('#focus-mode').classList.toggle('modifier-icon--active')
    document.querySelector('#focus-mode-board').classList.toggle('display-none')

    document.querySelector('#settings').classList.remove('modifier-icon--active')
    document.querySelector('#settings-board').classList.add('display-none')
    document.querySelector('#templates').classList.remove('modifier-icon--active')
    document.querySelector('#templates-board').classList.add('display-none')
    document.querySelector('#videos-list').classList.remove('modifier-icon--active')
    document.querySelector('#videos-list-board').classList.add('display-none')
})

document.querySelector('#focus-mode-board').addEventListener('click',function(e){
    e.stopPropagation()
})
// share link
document.querySelector('#share-btn').onclick = function(e){
    e.stopPropagation()
    document.querySelector('#share-link').style.border = 'none'
    document.querySelector('#copy-announcement').classList.add('display-none')
    document.querySelector('#share-board').classList.toggle('display-none')
    // reset position
    document.querySelector('#share-board').style.top = '50%'
    document.querySelector('#share-board').style.left = '50%'
}
document.querySelector('#share-link').addEventListener('click',function(e){
    navigator.clipboard.writeText(e.target.textContent)
    this.style.border = '1px solid green'
    document.querySelector('#copy-announcement').classList.remove('display-none')
})
document.querySelector('#hide-share-board').onclick = function(e){
    e.stopPropagation()
    document.querySelector('#share-link').style.border = 'none'
    document.querySelector('#copy-announcement').classList.add('display-none')
    document.querySelector('#share-board').classList.add('display-none')
}
// share link drag function
dragElement(document.getElementById("share-board"));

function dragElement(element) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    element.onmousedown = dragMouseDown;
    

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
// done drag function





// circle in pricing board 
var isYearly = true;
document.querySelector('#circle').addEventListener('click',function(){
    if(isYearly){
        isYearly = false;
        this.style.transform = 'translateX(0px)'
        document.querySelector('#time-option button:first-child').style.opacity = 1;
        document.querySelector('#time-option button:nth-child(3)').style.opacity = 0.5;
        document.querySelector('#sale-off').style.opacity = 0;
        document.querySelector('#premium h3').innerHTML = `<h3>$3,99 <span>/ mo</span></h3>`
    }else {
        isYearly = true;
        document.querySelector('#time-option button:first-child').style.opacity = 0.5;
        document.querySelector('#time-option button:nth-child(3)').style.opacity = 1;
        document.querySelector('#sale-off').style.opacity = 1;
        this.style.transform = 'translateX(40px)'
        document.querySelector('#premium h3').innerHTML = `<h3>$2,99 <span>/ mo</span></h3>`
    }
})

