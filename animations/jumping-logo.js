export { animateJumpingLogo }

const letterAnimationInterval = 100
const letterAnimationDuration = 500
const letterAnimationPause = 230

async function animateJumpingLogo() {
  const waitingLetters = getLogoLetters()
  const letterAnimations = []

  while (waitingLetters.length) {
    const letter = waitingLetters.shift()
    const letterAnimation = animateLetter(letter)

    letterAnimations.push(letterAnimation)

    if (waitingLetters[0]) await sleep(letterAnimationInterval)
  }

  await Promise.all(letterAnimations)
}

function getLogoLetters() {
  const logo = document.getElementById('jumping-logo')
  const letters = logo.textContent.split('').map(char => {
    const letter = document.createElement('span')

    letter.textContent = char

    return letter
  })

  logo.replaceChildren(...letters)
  logo.style.setProperty('--letter-move-duration', `${letterAnimationDuration}ms`)

  return letters
}

function animateLetter(letter) {
  return new Promise(async resolve => {
    letter.classList.add('below')

    await delayForAFewFrames()

    letter.classList.add('moving')

    await delayForAFewFrames()

    letter.classList.remove('below')

    letter.ontransitionend = async () => {
      await sleep(letterAnimationPause)

      letter.classList.add('below')

      await delayForAFewFrames()

      letter.ontransitionend = () => {
        letter.ontransitionend = null
        letter.classList.remove('moving')

        resolve()
      }
    }
  })
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function delayForAFewFrames() {
  return new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
}
