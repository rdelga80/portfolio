const nameContainer = document.querySelector('.name-container')
const subName = document.querySelector('.subname')

// assign calculated horizontal center box
function centerName() {
  // top box is approx half, minus a little for visual reasons
  nameContainer.style.top = `${((screenSize.height - nameBoxRect.height) / 2) - 60}px`
  nameContainer.style.left = `${(screenSize.width - nameBoxRect.width) / 2}px`
}
centerName()

function letterMovements() {
  let name = "Ricardo Delgado"
  let nameArr = name.split('')

  nameBox.innerText = ""
  let nameDelay = 0
  for (let i = 0; i < nameArr.length; i++) {
    setTimeout(() => {
      let newDiv = document.createElement('div')
      let newLetter = document.createTextNode(nameArr[i])
      newDiv.appendChild(newLetter)
      nameBox.appendChild(newDiv)
      if (nameArr[i] === ' ') {
        let newDiv = document.createElement('div')
        let newLetter = document.createTextNode('\xa0')
        newDiv.appendChild(newLetter)
        nameBox.appendChild(newDiv)
      }
      if (i === nameArr.length - 1) {
        subName.style.opacity = 1
        setTimeout(() => waveLetters(), 2000)
      }
    }, nameDelay)
    nameDelay += 320
  }
}
letterMovements()

function waveLetters() {
  subName.style.opacity = 0
  let waveDelay = 0

  for (let i = 0; i < nameBox.childElementCount; i++) {
    if (nameBox.children[i].innerText === " ") i++
    nameBox.children[i].style.transform = `translateY(0px)`
    nameBox.children[i].style.opacity = 1
    setTimeout(() => {
      let randNum = Math.round((Math.random() * 1)  + 1) === 2 ? -100 : 100
      nameBox.children[i].style.transform = `translateY(${randNum}px)`
      nameBox.children[i].style.opacity = 0
      if (i === nameBox.childElementCount - 1) {
        setTimeout(() => letterMovements(), 2000)
      }
    }, waveDelay)
    waveDelay += 300
  }
}