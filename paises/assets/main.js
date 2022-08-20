function mouseDown() {
var resposta = document.getElementById('input-input_section')
var resultado = document.querySelector('div#resultado')
var pais = String(resposta.value)
var imagem = document.getElementById('imagem')

switch (pais) {
    case 'Russia':
        resultado.innerHTML = `<p>A capital é <strong>Moscou</strong></p>`
        imagem.innerHTML = `<img src='https://www.kayak.com.br/rimg/dimg/b0/1c/7746c81c-city-14713-177ba045e36.jpg?crop=true&width=400&height=300'>`
    break

    case 'Canada':
        resultado.innerHTML = `<p>A capital é <strong>Otawwa</strong></p>`
        imagem.innerHTML = `<img src='https://www.cdhowe.org/sites/default/files/images/research_papers/400x300_17.jpg'>`
    break

    case 'Estados Unidos':
        resultado.innerHTML = `<p>A capital é <strong>Washington</strong></p>`
        imagem.innerHTML = `<img src='http://agentes.cvc.com.br/media/5289414/chicago-downtown-and-river-credito-thinckstock-492861201.jpg'>`
    break

    case 'China':
        resultado.innerHTML = `<p>A capital é <strong>Pequim</strong></p>`
        imagem.innerHTML = `<img src='https://adinkraconsult.com/wp-content/uploads/2020/08/mp2cjy-400x300.jpg'>`  
    break 
    
    case 'Brasil':
        resultado.innerHTML = `<p>A capital é <strong>Brasilia</strong></p>`
        imagem.innerHTML = `<img src='https://dmarilia.com.br/wp-content/uploads/2021/03/foto-1-5-400x300.jpg'>`
    break

    case 'Australia':
        resultado.innerHTML = `<p>A capital é <strong>Camberra</strong></p>`
        imagem.innerHTML = `<img src='https://s3.static.brasilescola.uol.com.br/be/2022/01/sydney.jpg'>`
    break
        
    case 'India':
        resultado.innerHTML = `<p>A capital é <strong>Nova Delhi</strong></p>`
        imagem.innerHTML = `<img src='https://www.deshvidesh.com/wp-content/uploads/2017/11/Swaminarayan-Akshardham.jpg'>`
    break
            
    case 'Argentina':
        resultado.innerHTML = `<p>A capital é <strong>Buenos Aires</strong></p>`
        imagem.innerHTML = `<img src='https://media.istockphoto.com/photos/argentina-buenos-aires-dawn-at-center-with-rush-hour-picture-id667138246?b=1&k=20&m=667138246&s=170667a&w=0&h=IUzqqDx2lHJBxTWCqzsRhOJ-RsvOtZq4_6BYL5zjOVE='>`
    break
    
    case 'Cazaquistão':
        resultado.innerHTML = `<p>A capital é <strong>Nursultan</strong></p>`
        imagem.innerHTML = `<img src='https://www.kayak.com.br/rimg/dimg/24/8c/90418600-city-40866-172c0b980e2.jpg?crop=true&width=400&height=300'>`
    break
        
    case 'Argélia':
        resultado.innerHTML = `<p>A capital é <strong>Algiers</strong></p>`
        imagem.innerHTML = `<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Yy3MxEE5iJhtDClW5Fy4hS26JBcKYS_TTtUaHZC1Pm3U4uTg-4-803L7uLyrY_4mzco&usqp=CAU'>`
    break

    default:
        resultado.innerHTML = `<p>Por favor, cite um país presente na lista lista</p>`
    break
}
}