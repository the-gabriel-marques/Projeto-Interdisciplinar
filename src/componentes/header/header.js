export function BuildHeader(){
    const nav = document.createElement('nav');
    nav.className = 'nav-bar_mobile';
    nav.innerHTML = `
                <div class="list_content_mobile" id="list_content_mobile">
                    <div class="icone_fechar" id="close">
                        <div class="line1 line"></div>
                        <div class="line2 line"></div>
                    </div>
                    <div class="list_content">
                    <a href="#materiais" id="materiaisBotao_mobile">Materiais</a>
                    <a href="#produtos" id="produtosBotao_mobile">Produtos</a>
                    <a href="#producao-section" id="producao">Produção</a>
                    <a href="#dados-section" id="dados">Produção</a>
                    <button id="SejaCatadorBTN_mobile">Seja um Associado</button>
                    </div>
                </div>
            <!--- </>-->
            <div class="empresa_nome_mobile">
                <a href="index.html">
                    <img src="./src/componentes/header/img/titulo.png" alt="">
                </a>
            </div>
            <div class="icone" id="open">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>  
            <nav class="nav-bar">
                <div class="lista-navigation">
                    <ul>
                        <div class="empresa_nome">
                            <a href="./index.html" id="btn_home">
                                <img src="./src/componentes/header/img/titulo.png" alt="" id="homeBotao">
                            </a>
                        </div>
                        <div class="lista_Conteudo">
                            <li><a href="#materiais" id="materiaisBotao" class="nav-link">Materiais</a></li>
                            <li><a href="#produtos" id="produtosBotao"class="nav-link">Produtos</a></li>
                            <li><a href="#dados-section" class="nav-link">Dados</a></li>
                            <li><a href="#producao-section" class="nav-link">Produção</a></li>
                            <li><button id="SejaCatadorBTN_desktop">Seja um Associado</button></li>
                        </div>
                    </ul>
                </div>
            </nav>
    `
    return nav
}