const drone = document.querySelector('.drone-click')
const droneCont = document.querySelector('.drone-cont')
const aboutInfo = document.querySelector('.about-info')

const droneRect = droneCont.getBoundingClientRect()
const aboutRect = aboutInfo.getBoundingClientRect()

aboutInfo.style.top = `${aboutRect.height * -1}px`

let dronePostion = 0
let droneLeft
let droneTop
let droneTilt
let droneClicked = false

function droneMove() {
  if (droneClicked) return
  switch(dronePostion) {
    case 0:
      droneTop = screenSize.height / 2
      droneLeft = 10
      droneTilt = -30
      break
    case 1:
      droneTop = 10
      droneLeft = screenSize.width / 6.5
      droneTilt = 0
      break
    case 2:
      droneTop = screenSize.height / 6
      droneLeft = screenSize.width - (droneRect.width * 1.75)
      droneTilt = 30
      break
  }
  dronePostion++
  if (dronePostion > 2) dronePostion = 0
  drone.style.top = `${droneTop}px`
  drone.style.left = `${droneLeft}px`
  droneCont.style.transform = `rotateZ(${droneTilt}deg)`
  droneHalt()
}
droneMove()

function droneTilting() {
  if (droneTilt === 0 || null) droneTilt = 10
  let absoluteNum = Math.abs(droneTilt)

  let tiltingDrone = setInterval(() => {
    let randNum = Math.floor(Math.random() * (absoluteNum - (absoluteNum * -1)) + (absoluteNum * -1))
    droneCont.style.transform = `rotateZ(${randNum}deg)`
  }, 500)
}
droneTilting()

function droneHalt() {
  if (droneClicked) return

  setTimeout(() => {
    droneMove()
  }, 4000)
}

function droneSelect() {
  if (!droneClicked) {
    
    droneClicked = true

    aboutInfo.style.opacity = 1
    aboutInfo.style.top = `${droneRect.height + 95}px`
    aboutInfo.style.left = `${(screenSize.width - aboutRect.width) / 2}px`

    // hide other triggers
    slothDiv.style.left = `${screenSize.width}px`

    portClick.style.opacity = 0

    nameContainer.style.opacity = 0
    subName.style.opacity = 0

    // go to top middle of screen
    drone.style.top = `${5}px`
    drone.style.left = `${(screenSize.width - droneRect.width) / 2}px`
  } else {
    droneClicked = false

    aboutInfo.style.top = `${aboutRect.height * -1}px`
    aboutInfo.style.opacity = 0

    portClick.style.opacity = 1

    nameContainer.style.opacity = 1
    subName.style.opacity = 1

    slothDiv.style.left = `${screenSize.width - slothRect.width - (droneRect.width / 3)}px`

    droneMove()
  }
}

droneCont.addEventListener('click', droneSelect)