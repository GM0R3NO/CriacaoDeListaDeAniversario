const formulario = document.querySelector('.formulario')
const inputText = document.querySelector('.texto')
const inputdate = document.querySelector('.textoDois')
const ulGrupo = document.querySelector('ul')

let lista = JSON.parse(localStorage.getItem('lista')) || []
let listaSelecionada = null

function atualizarLista() {
    localStorage.setItem('lista', JSON.stringify(lista))
}

function fazerLista(informacao){
    const li = document.createElement('li')
    const paragafroTexto = document.createElement('p')
    const paragafroData = document.createElement('p')
    const botaoRemove = document.createElement('button')
    const btnEdit = document.createElement('button')
    const divisao = document.createElement('div')


    botaoRemove.textContent = 'Remover'
    btnEdit.textContent = 'Editar'
    paragafroTexto.textContent = informacao.nome
    paragafroData.textContent = informacao.data

    

    btnEdit.onclick = () => {
        const alterarTexto = prompt("Qual é o novo nome ?")
        const alterarData = prompt("Qual nova data ?")

        paragafroTexto.textContent = alterarTexto
        informacao.nome = alterarTexto
        paragafroData.textContent = alterarData
        informacao.data = alterarData
        atualizarLista()
    }

    botaoRemove.onclick = () => {
        li.remove()
        lista = lista.filter(element => !element.completa)
        
       atualizarLista()
    }
    
    li.append(paragafroTexto)
    li.append(paragafroData)
    divisao.append(btnEdit)
    divisao.append(botaoRemove)
    li.append(divisao)
    
    li.classList.add('lii')
    li.onclick = () => {
        borda().forEach(e => e.classList.remove('borda'))
        
        if(listaSelecionada == informacao){
            listaSelecionada.completa = true
            li.classList.add('bordav')
            listaSelecionada = null
            atualizarLista()
            return
        }
        listaSelecionada = informacao
        li.classList.add('borda')
    }

    
    return li

}


formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const informacao = {
        nome: inputText.value,
        data: inputdate.value,
    }

    

    lista.push(informacao)
    atualizarListaTempoReal(informacao)
    atualizarLista()
})

lista.forEach(informacao => {
    atualizarListaTempoReal(informacao)
})




function borda() {
    return document.querySelectorAll('.borda')
}

function atualizarListaTempoReal(informacao) {
    const listaCompleta = fazerLista(informacao)
    ulGrupo.append(listaCompleta)
}


