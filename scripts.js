const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progess = player.querySelector('.progress')
const progessBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')


function togglePlay() {
    if(video.paused){
        video.play()
    } else {
        video.pause()
    }
}

function updateButton(){
    const icon = this.paused ? '▶️' : '∥∥'
    toggle.textContent = icon
}



video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)

toggle.addEventListener('click', togglePlay)
