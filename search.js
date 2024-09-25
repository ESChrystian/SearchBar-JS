// Chama as divs do projeto
let barraBusca = document.querySelector(".barra-busca"); 
let pesquisarBox = document.querySelector(".pesquisar-box");
let closeBox = document.querySelector(".close-box");

// Arrow function que adiciona a personalização CSS "Abrir", após o click na div citada
pesquisarBox.addEventListener("click", ()=> {
    barraBusca.classList.add('abrir');
    
})
// Arrow function que remove a personalização CSS "Abrir", após o click na div citada

closeBox.addEventListener("click", ()=> {
    barraBusca.classList.remove('abrir');
    
})