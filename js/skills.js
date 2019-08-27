const slothDiv = document.querySelector('.sloth-cont')
const slothRect = slothDiv.getBoundingClientRect()
const slothBottom = `${screenSize.height - slothRect.height - portClickRect.height - portClickRect.top}px`
const skillCircle = document.querySelector('.skill-circle')
const skillCircleRect = skillCircle.getBoundingClientRect()
const skillHighlight = document.querySelector('.skill-highlight')
const planetInfo = document.querySelector('.planet-info')
const planetInfoRect = planetInfo.getBoundingClientRect()

const skillPlanets = Array.from(document.querySelectorAll('.planet'))

function startSloth() {
  slothDiv.style.display = ''
  slothDiv.addEventListener('transitionend', slothWalk)
  slothDiv.style.top = `${30}px`
  slothDiv.style.left = `${screenSize.width - slothRect.width - (droneRect.width / 3)}px`
  setTimeout(() => slothDiv.style.top = slothBottom, 2000)
}
startSloth()

let slothDirection = false

function slothWalk() {
  if (slothDirection) {
    slothDiv.style.top = slothBottom
    slothDirection = !slothDirection
  } else {
    slothDiv.style.top = 30 + 'px'
    slothDirection = !slothDirection
  }
}

function clickSloth() {
  slothDiv.removeEventListener('transitionend', slothWalk)
  slothDiv.style.left = `${screenSize.width}px`

  portClick.style.opacity = 0

  nameContainer.style.opacity = 0
  subName.style.opacity = 0

  drone.style.display = 'none'
  slothDiv.style.display = 'none'

  skillCircle.style.display = ''
  skillCircle.style.opacity = 1
  skillCircle.style.top = `${(screenSize.height - (435 / 2)) / 2}px`
  skillCircle.style.left = `${(screenSize.width - (435 / 2)) / 2}px`
}

function planetClick(e) {
  skillCircle.style.opacity = 0
  planetInfo.style.width = `${(screenSize.width - planetInfoRect.left) * .90}px`

  let selectedDiv = e.target.parentNode.dataset.info

  if (selectedDiv !== 'sloth') {
    skillHighlight.style.opacity = 1
    skillHighlight.style.transform = "scale(1)"
    skillHighlight.innerHTML = skillInfo[selectedDiv].image
    planetInfo.style.opacity = 1
    planetInfo.innerHTML = skillInfo[selectedDiv].text
  } else {
    portClick.style.opacity = 1

    nameContainer.style.opacity = 1
    subName.style.opacity = 1

    skillCircle.style.opacity = 0
    skillCircle.style.top = `${screenSize.height + 50}px`
    // setTimeout(() => skillCircle.style.display = 'none', 2000)
    startSloth()

    drone.style.display = ''
  }
}

function closeSkillInfo() {
  skillHighlight.style.opacity = 0
  skillHighlight.style.transform = "scale(0.7)"
  planetInfo.style.opacity = 0
  skillHighlight.innerHTML = ''
  planetInfo.innerHTML = ''
  clickSloth()
}

slothDiv.addEventListener('click', clickSloth)
skillPlanets.forEach(planets => planets.children[0].addEventListener('click', planetClick))
skillHighlight.addEventListener('click', closeSkillInfo)

const skillInfo = {
  "vue": {
    "image": "<img src='./img/vue.png'>",
    "text": `
      <div>
        <h2>VueJS // JavaScript Framework</h2>
        <p>Projects:</p>
      </div>
      <div>
        <div style="width: 48%;">
          <img src="./img/homeun.png">
          <h4>Home Unknown</h4>
        </div>
        <div style="width: 48%; margin-right: 5px;">
          <img src="./img/gamecycler1.gif">
          <h4>Gamecycler</h4>
        </div>
      </div>
      <div>
        <div style="width: 48%; margin-right: 5px;">
          <img src="./img/twittersquad.png">
          <h4>TwitterSquad</h4>
        </div>
      </div>
      <div>
        <p>Experience with VueJS Modules:</p>
        <ul>
          <li>Vuex</li>
          <li>Vue-Router</li>
          <li>Vuetify</li>
          <li>Bulma.io</li>
          <li>Bootstrap-Vue</li>
          <li>VueFire (Firebase Bindings)</li>
          <li>Stripe Integration with ExpressJS Backend</li>
        </ul>
      </div>
      <div>
        <p>Certifications:</p>
        <ul>
          <li>Vue School, VueJS Mastery Course</li>
          <li>Udemy VueJS The Complete Guide w/ Vuex</li>
        </ul>
      </div>
    `
  },
  "python": {
    "image": "<img src='./img/python.png'>",
    "text": `
      <div style="width: 100%">
        <h2>Python3</h2>
        <p>Projects:</p>
      </div>
      <div style="width: 100%">
        <div style="width: 48%;">
          <img src="./img/twittersquad.png">
          <h4>TwitterSquad</h4>
        </div>
      </div>
      <div style="width: 100%">
        <ul>
          <li>Interacting with Twitter API, collecting data and saving to Firebase.</li>
        </ul>
        <p>Certifications:</p>
        <ul>
          <li>Udemy Complete Python Masterclass</li>
        </ul>
      </div>
    `
  },
  "wordpress": {
    "image": "<img src='./img/wp.svg'>",
    "text": `
      <div style="width: 100%">
        <h2>WordPress</h2>
        <p>Projects:</p>
      </div>
      <div style="width: 100%">
        <div style="width: 48%;">
          <img src="./img/rib.png">
          <h4>Roasted in Brooklyn</h4>
        </div>
        <div style="width: 48%; margin-right: 5px;">
          <img src="./img/welcomeearth2.gif">
          <h4>Gamecycler</h4>
        </div>
      </div>
      <div style="width: 100%">
        <ul>
          <li>Custom Theme Creation</li>
          <li>WP Theme Development (MVC Model/View/Controller)</li>
        </ul>
        <p>Certifications:</p>
        <ul>
          <li>Udemy WordPress Theme Development with Bootstrap</li>
        </ul>
      </div>
    `
  },
  "other": {
    "image": "<img src='./img/face.png'>",
    "text": `
      <div style="width: 100%">
        <h2>Other Skills</h2>
      </div>
      <div style="width: 100%">
        <ul>
          <li>NodeJS</li>
          <li>ExpressJS</li>
          <li>Stripe Integration</li>
          <li>Bootstrap</li>
          <li>Sass</li>
          <li>Pug</li>
          <li>Handlebars</li>
          <li>Lodash</li>
          <li>MySQL</li>
          <li>PHP</li>
          <li>Adobe Illustrator</li>
          <li>Adobe Photoshop</li>
          <li>Podcasting</li>
          <li>MS Office - Word, Excel, Access</li>
          <li>MS VBA Macro Programming</li>
        </ul>
        <p>Certifications:</p>
        <ul>
          <li>edX Harvard CS50 (on-going)</li>
          <li>Udemy Ultimate MS Excel VBA Programming</li>
        </ul>
      </div>
    `
  }
}