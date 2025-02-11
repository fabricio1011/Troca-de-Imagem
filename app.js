'use strict'

const cidades = [
    {nome: 'Barueri', cor: 'purple', icon: 'Sifrão.png'},
    {nome: 'Osasco',  cor: 'orange', icon: 'Ponte Estaiada.png'},
    {nome: 'Jandira', cor: 'grey',   icon: 'Esgoto.png'},
    {nome: 'Itapevi', cor: 'green',  icon: 'Floresta.png'}
]

function criarMenu(cidade){
    const novoItem = document.createElement('li')
    const novoLink = document.createElement('a')
    const menu = document.getElementById('menu')
    const novaImagem = document.createElement('img')

    novaImagem.src = `./image/${cidade.icon}`

    novoLink.href = '#'
    novoLink.textContent = cidade.nome

    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoLink)
    novoItem.style = `--cor-hover: ${cidade.cor}`

    menu.appendChild(novoItem)
}

cidades.forEach(criarMenu) 