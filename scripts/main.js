import { heroList } from "./heroes.js"
import { villainList } from "./villains.js"

const displayHeroListHTML = heroList()
const displayVillainListHTML = villainList()

const fullDisplay = `
<h1>Heroes List</h1>
${displayHeroListHTML}

<h1>Villains List</h1>
${displayVillainListHTML}
`

const theExistingMainElement = document.querySelector("#container")

theExistingMainElement.innerHTML = fullDisplay