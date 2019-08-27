const portClick = document.querySelector('.port-click')
const portItems = Array.from(document.querySelectorAll('.p-item'))
const portInfo = document.querySelector('.click-info')

const nameBox = document.querySelector('.name')
let nameBoxRect = nameBox.getBoundingClientRect()

let portClickRect = portClick.getBoundingClientRect()

const data = [
  {
    "name": "Arnie",
    "link": "https://rdelga80.github.io/PickUrArnie2/",
    "text": `
      <h2>Choose Ur Favorite Arnie</h2>
      <p>
        Frontend: VueJS, Bootstrap, HTML5, CSS3, Javascript<br />
        Backend: Firebase/VueFire</p>Portfolio project based around using VueJS functionality.
      </p>
      <p>
        Design focused, humorous, survey style web app that compiles results and saves in Firebase DB.
      </p>
    `
  },
  {
    "name": "Gamecycler",
    "link": "https://www.gamecycler.com",
    "text": `
      <h2>Gamecycler</h2>
      <p>
        Redevelopment: VueJS - Vuex, Vue-Router, Axios, Bulma.io, PUG, Firebase/VueFire. HTML5, CSS3, Javascript.<br />
        Legacy Version:  - HTML5, CSS3, PHP frontend paired with PHP backend integrated with MySQL. Javascript and JQuery elements. 
      </p>
      <p>
        Top to bottom custom developed web application - concept, design, and logistics. Original development in PHP and MySQL, current revelopment into modern JS Framework Single Page Application (SPA), Progressive Web App(PWA).
      </p>
    `
  },
  {
    "name": "Home Unknown",
    "link": "https://www.homeunknown.co",
    "text": `
      <h2>Home Unknown</h2>
      <p>
        Languages/Frameworks: VueJS, Firebase, Vuetify
      </p>
      <p>
        Audio player for curated local music. Built with VueJS and Firebase.
      </p>
    `
  },
  {
    "name": "Roasted in Brooklyn",
    "link": "https://www.roastedinbrooklyn.com",
    "text": `
      <h2>Roasted in Brooklyn</h2>
      <p>
        WordPress, Custom WP Theme, HTML5, CSS3, Javascript
      </p>
      <p>
        Full conceptualized and created web magazine, focused on local businesses and coffee. Strong, strong focus on design, as well as creating a Wordpress Theme exclusive for project.
      </p>
    `
  },
  {
    "name": "TwitterSquad",
    "link": "https://www.twittersquad.com",
    "text": `
      <h3>TwitterSquad</h3>
      <p>
        Frontend: VueJS and Bootstrap.<br />
        Backend: Python3 for Twitter Data Collection, paired with Firebase Database.
      </p>
      <p>
        Automated tweet collector. Organized by sports team.
      </p>
    `
  },
  {
    "name": "Welcome Earth",
    "link": "https://www.welcomeearth.tv",
    "text": `
      <h2>Welcome Earth</h2>
      <p>
        Wordpress Platform, Customized Theme
      </p>
      <p>
        Wordpress magazine style website, integrated with Vimeo playback services.
      </p>
    `
  }
]

// assign screensize
const screenSize = {
  height: window.innerHeight,
  width: window. innerWidth
}

// assign beginning parameters
let bottomBoxX = 0
let rotateWB = 0
let bottomBoxDir = true

// start bottom screen box walking
function startWalk() {
  portClick.style.top = screenSize.height - portClickRect.height - 20 + 'px'
  portClick.style.left = `${bottomBoxX}px`
  setTimeout(() => {
    portClick.style.transform = `rotateZ(0)`
    bottomBoxX += 100
    portClick.style.left = `${bottomBoxX}px`
    portClick.addEventListener('transitionend', transitionWalk)
  })
}
startWalk()

let walking = true

function transitionWalk() {
  portClick.removeEventListener('transitionend', transitionWalk)
  portClick.innerHTML = '<span class="portbubble">Portfolio</span><img class="portfolio-img second-pig" src="./img/g-pig2.png">'
  setTimeout(() => nextWalk(), 2000)
}

// loaded after initial bottom walking load
function nextWalk(e) {
  if (!walking) return
  portClick.addEventListener('transitionend', transitionWalk)

  // local vars for step and box the measured side of the box
  let boxAmt
  let boxSide

  // if bottomBoxDir is true
  if (bottomBoxDir) {
    portClick.innerHTML = '<img class="portfolio-img" src="./img/g-pig.png">'
    const portClickImg = document.querySelector('.portfolio-img')

    portClickImg.style.transform = 'rotateY(0deg)'

    // assign boxAmt with random distance between 50 and 150
    // assign offset left of box and box width to determine right edit (when true moving forward)
    boxAmt = (Math.random() * 150) + 50
    boxSide = portClick.offsetLeft + portClickRect.width

    // if after move the box is past the right side of the screen
    if (boxSide + boxAmt >= screenSize.width) {
      // move edge of box to be aligned with the right side of screen
      bottomBoxX = screenSize.width - portClickRect.width
      portClick.style.left = `${bottomBoxX}px`

      // change direction of box
      bottomBoxDir = !bottomBoxDir
      
    } else {
      // if not past edge, then move box random distance
      bottomBoxX += boxAmt
      portClick.style.left = `${bottomBoxX}px`
    }  
  } else {
    portClick.innerHTML = '<img class="portfolio-img" src="./img/g-pig.png">'
    const portClickImg = document.querySelector('.portfolio-img')

    portClickImg.style.transform = 'rotateY(180deg)'

    // random distance between -50 and -150
    boxAmt = ((Math.random() * 150) + 50) * -1

    // left side of box
    boxSide = portClick.offsetLeft - portClickRect.width

    // if distance and leftside of box is past the left side of screen
    if (boxSide + boxAmt < 0) {
      // move to left side of screen
      bottomBoxX = 0
      portClick.style.left = `${bottomBoxX}px`

      // change direction movement
      bottomBoxDir = !bottomBoxDir
    } else {
      // if not past edge then move by random amount
      bottomBoxX += boxAmt
      portClick.style.left = `${bottomBoxX}px`
    }
  }
}
  
function spinBox() {
  // if transform has already rotated
  if (portClick.style.transform.includes('rotateZ(-720deg)')) {

    drone.style.display = ''

    portInfo.style.opacity = 0
    
    // change rotate back to 0 and return to walking path
    portClick.style.transform = `rotateZ(0)`

    // restart nextwalk event listener
    portClick.addEventListener('transitionend', transitionWalk)

    // rerun startwalk and hide big portClick box
    walking = true
    startWalk()
    hideExtendBox()
    startSloth()

  } else {
    walking = false
    // on click of portClick box end transitionend event listener
    portClick.removeEventListener('transitionend', transitionWalk)

    // move portClick box to top, left of screen
    portClick.style.top = 5 + 'px'
    portClick.style.left = 5 + 'px'

    portClick.innerHTML = '<img class="portfolio-img second-pig" src="./img/g-pig2.png"><br /><span class="portTopLeft">Portfolio'
    slothDiv.style.left = `${screenSize.width + slothRect.width}px`

    drone.style.display = 'none'

    // rotate walking box
    portClick.style.transform = `rotateZ(-720deg)`

    let delayInterval = 0
    let itemCount = 0
    // after 900ms
    portItems.forEach(item => {
      // assign walking left and top to large box
      item.style.left = portClick.offsetLeft + 'px'
      item.style.top = portClick.offsetTop + 'px'

      // assign transform styles to large box
      item.style.transform = 'translateX(0) rotate(0)'
      setTimeout(() => {
        extendBox(item, itemCount)
        itemCount++
      }, delayInterval)
      delayInterval += 500
    })
  }
}

const widthConst = 300
const heightConst = 185
let startLeft = 400
let startTop = 100

function extendBox(item, itemCount) {
  // assign styles
  item.style.opacity = 1
  item.style.transform = 'translateX(-100px) rotate(-360deg) translateY(0) skewX(0)'
  item.style.transition = 'all 2s cubic-bezier(0.26, 0.81, 0.65, 1.29)'
  item.style.transformOrigin = '400px 400px'

  switch(itemCount) {
    case 0:
      item.style.top = `${startTop}px`
      item.style.left = `${startLeft}px`
      break
    case 1:
      item.style.top = `${startTop}px`
      item.style.left = `${startLeft + widthConst + 20}px`
      break
    case 2:
      item.style.top = `${startTop + heightConst + 20}px`
      item.style.left = `${startLeft}px`
      break
    case 3:
      item.style.top = `${startTop + heightConst + 20}px`
      item.style.left = `${startLeft + widthConst + 20}px`
      break
    case 4:
      item.style.top = `${startTop + (heightConst * 2) + 40}px`
      item.style.left = `${startLeft}px`
      break
    case 5:
      item.style.top = `${startTop + (heightConst * 2) + 40}px`
      item.style.left = `${startLeft  + widthConst + 20}px`
      break
  }
}

function hideExtendBox() {
  portItems.forEach(item => {
    // hide large box, assign styles
    item.style.transform = 'translateX(-100px) rotate(-360deg) translateY(-200px) skewX(90deg)'
    item.style.opacity = 0
    item.style.width = 150 + 'px'
    item.style.height = 130 + 'px'
    item.style.left = `${-150}px`
    item.style.top = `${-130}px`
  })
}

let showPort = false

function featureItem(e) {
  portInfo.style.opacity = 0
  let selItem = e.target.parentElement.dataset.item
  let parentDiv = portItems[selItem]
  parentDiv.style.transform = 'translateX(0) translateY(0) skewX(0) rotate(-360deg)'
  parentDiv.style.top = `${300}px`
  parentDiv.style.left = `${5}px`
  let leftSetting = 5
  showPort = true
  setTimeout(() => showPortfolioInfo(selItem), 1000)
  portItems.forEach(item => {
    if (item.children[0].dataset.item !== selItem) {
      let itemRect = item.children[1].getBoundingClientRect()
      let itemImgHeight = item.children[1].offsetHeight
      let itemImgWidth = item.children[1].offsetWidth
      item.style.transform = 'translateX(0) translateY(0) skewX(0) rotate(-360deg)'
      item.style.top = `${screenSize.height - itemImgHeight - 5}px`
      item.style.left = `${leftSetting}px`
      leftSetting += itemImgWidth / 2
    }
  })
}

function showPortfolioInfo(e) {
  if (showPort) {
    portInfo.style.opacity = 1
    portInfo.style.top = `${screenSize.height * .25}px`
    portInfo.style.width = `${(screenSize.width - portInfo.offsetLeft) * .90}px`
    portInfo.innerHTML = data[e].text
  } else {
    portInfo.style.opacity = 0
  } 
}

// event listeners on load
portClick.addEventListener('click', spinBox)
portItems.forEach(item => item.firstElementChild.addEventListener('click', featureItem))