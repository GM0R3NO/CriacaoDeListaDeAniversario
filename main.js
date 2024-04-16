const formulario = document.querySelector('.formulario')
const inputText = document.querySelector('.texto')
const inputdate = document.querySelector('.textoDois')
const ulGrupo = document.querySelector('ul')

let lista = JSON.parse(localStorage.getItem('dados')) || []

function salvarLocalStorage(){
    localStorage.setItem('dados', JSON.stringify(lista))
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    salvarItem()
    item()
    salvarLocalStorage()
})

function salvarItem() {
  lista.push({
    nome: inputText.value,
    idade: inputdate.value
})
}



console.log(lista)

function item() {
    ulGrupo.innerHTML = ''
    lista.forEach((element, index) => {
        ulGrupo.innerHTML += `<li class="lii" data-value="${index}">
    <div>${element.nome}</div>
    <div>${element.idade}</div>
    <div><button class="butao_editar">Editar</button>
    <button class="butao_remover">Remover</button</div>
    </li>`
    })

    const botaoRemover = document.querySelectorAll(".butao_remover")
    const botaoEditar = document.querySelectorAll(".butao_editar")

    botaoRemover.forEach(element => {
        element.addEventListener('click', (evento) => {
            const valorDoElemento = evento.target.parentElement.parentElement.getAttribute('data-value')
            lista.splice(valorDoElemento, 1)
            item() 
            salvarLocalStorage()
        })
    });

    botaoEditar.forEach(element => {
        element.addEventListener('click', (evento) => {
            const novoNome = prompt('Qual é o novo nome ?')
            const novaData = prompt('Qual é a nova data ?')
            const valorDoElemento = evento.target.parentElement.parentElement.getAttribute('data-value')
            lista.splice(valorDoElemento, 1,{nome: novoNome, idade: novaData})
            item()
            salvarLocalStorage()
        })
    });
}

item()
