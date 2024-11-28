import { BuildHeader } from "./src/componentes/header/header.js"
import { BuildMain } from "./src/componentes/Home/Home.js"
import { BuildFooter } from "./src/componentes/footer/footer.js"


async function init() {
    try{
        const header = document.getElementById('header')
        const headerBuild = BuildHeader()
        header.appendChild(headerBuild)
        console.log(headerBuild)
        const main = document.getElementById('main')
        const mainBuild = BuildMain()
        main.appendChild(mainBuild)
        console.log(mainBuild)
        main.appendChild(mainBuild)
        const footer = document.getElementById('footer')
        const footerBuild = BuildFooter()
        console.log(footerBuild)
        footer.appendChild(footerBuild)
    }
    catch(error){
        console.log('error ao carregar pagina', error)
    }
}
init()