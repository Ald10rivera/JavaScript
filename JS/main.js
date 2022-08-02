const lista = document.getElementById('lista')


const productos =["Iphone ", " Moto G9", " S20 Plus", " Redmi Note9"," Fundas"]

productos.forEach(item => {
    const li = document.createElement('li')
    li.textContent = item 
    lista.appendChild(li)
})

