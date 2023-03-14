import { animateJumpingLogo } from './animations/jumping-logo.js'
import { animateFallCoveringPlanks } from './animations/fall-covering-planks.js'
import { animateShowTitlesAndSocials } from './animations/show-titles-and-socials.js'
import { animateShowHeroText } from './animations/show-hero-text.js'
import { animateHorizontalTimeline } from './animations/horizontal-timeline.js'
import { animateShowNavigation } from './animations/show-navigation.js'

runAnimationSequence()

async function runAnimationSequence() {
  await animateJumpingLogo()
  await animateFallCoveringPlanks()
  await animateShowTitlesAndSocials()
  await animateShowHeroText()
  await animateHorizontalTimeline()
  await animateShowNavigation()
}
