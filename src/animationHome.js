const openbtn = document.getElementById('open')
const closebtn=document.getElementById('close')
openbtn.addEventListener('click',()=>{
    const content=document.getElementById('list_content_mobile');
    const container=document.querySelector(".nav-bar_mobile")
    content.style = 'margin-right:-2%; transition:1s;'
    container.style = "z-index: 4;"
    openbtn.style = 'display:none;'
})
closebtn.addEventListener('click',()=>{
    const content=document.getElementById('list_content_mobile');
    const container=document.querySelector(".nav-bar_mobile")
    content.style = 'margin-right:-60%; transition:1s;'
    container.style = "z-index: 3;"
    openbtn.style = 'display:inline; transition:2s;'
})


//main
let count=1;
let countmobile=1;
document.getElementById('radioData1').checked = true;
document.getElementById('radio1').checked=true
setInterval(function(){
    nextImgData()
    nextImg();
},5000)
function nextImgData(){
    count++
    if(count>4){
        count = 1;
    }
    document.getElementById('radioData'+count).checked=true;
}
function nextImg(){
    countmobile++
    if(countmobile >4){
        countmobile = 1;
    }
    document.getElementById('radio'+countmobile).checked=true;
}
//
homeBotao.addEventListener('click',(e)=>{
    // e.preventDefault()
    addContentIndex()
    console.log('funfafndo')
})