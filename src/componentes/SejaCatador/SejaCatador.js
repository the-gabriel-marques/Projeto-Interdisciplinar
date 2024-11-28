
/*introdução para nova pagina*/

function addContentSejaCatador(){
    const section_all=document.getElementById('section_all')
    section_all.innerHTML = ''
    section_all.innerHTML = `
        <section class="SejaCatador_Section">
          <article class="title_section_SejaCatador">
            <div class="title_SejaCatador"><h1>SEJA UM CATADOR PARCEIRO</h1></div>
            <div class="sub_title_SejaCatador"><h1>Têm interresse em trabalhar junto da RatoRói?<br>Entre em contato com a nossa equipe</h1></div>
          </article>
          <div class="content_SejaCatador">
          <article class="input_section_SejaCatador">
            <form id="form_SejaCatador">
              <div class="content_form">
                <label for="NameUser">Nome completo</label>
                <input type="text" name="nome" id="NameUser" placeholder="Nome*" required>
                <label for="NumeroUser">Telefone</label>
                <input type="tel" name="numeroTel" id="NumeroUser" placeholder="Ex: (11) 91234-5678*" required >
                <!-- <span>Formato: (XX) 9XXXX-XXXX</span> -->
                <label for="EmailUser">Email completo</label>
                <input type="email" name="email" id="EmailUser" placeholder="E-mail*">
                    <button id="btn_send">Enviar</button>
                </div>
            </form>
          </article>
          <article class="img_section_SejaCatador">
            <img src="./src/componentes/SejaCatador/img/sustentavel.png" alt="">
          </article>
          </div>
        </section>
    `
}

const btn_SejaCatador_mobile = document.getElementById('SejaCatadorBTN_mobile')
console.log(btn_SejaCatador_mobile)
const btn_SejaCatador_desktop= document.getElementById('SejaCatadorBTN_desktop')
btn_SejaCatador_mobile.addEventListener('click',(e)=>{
  e.preventDefault()
  // window.hash
    addContentSejaCatador()
    console.log('funciiona')
    
})

btn_SejaCatador_desktop.addEventListener('click',()=>{
    addContentSejaCatador()
})
