const inputNome = document.querySelector(".texto");
const inputData = document.querySelector(".textoDois")
const formulario = document.querySelector(".formulario")
const ulNome = document.querySelector(".grupo")
const ulData = document.querySelector(".grupoDois")
const ulEdit = document.querySelector(".edicoes")



let lista = []

function salvar(){
    localStorage.setItem('lista', JSON.stringify(lista))
}


formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    criarLista()
    mostraNaTela()
    console.log(lista)    
})


function criarLista() {
    lista.push({
        nome: inputNome.value,
        data: inputData.value
    });
    salvar()
}

function mostraNaTela(){
    ulData.innerHTML = ""
    ulEdit.innerHTML = ""
    ulNome.innerHTML = ""
    lista.forEach(elemento => {
        ulNome.innerHTML += `<div>${elemento.nome}</div>`;
        ulData.innerHTML += `<div>${elemento.data}</div>`;
        ulEdit.innerHTML+= `<div><i class="fa-solid fa-delete-left btn-delete"></i></div>`;
        
        const btnDelete = document.querySelectorAll(".btn-delete")
            btnDelete.forEach(i => {
                i.addEventListener("click", () => {
        
    
            })
        })
    })

    salvar()
}

