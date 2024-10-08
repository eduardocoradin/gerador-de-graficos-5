import *as commonsjs from "./common.js"

async function quantidadeUsuariosPorRede(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res =await fetch(url)
    const dados =await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)
    const data =[
        {
            x:nomeDasRedes,
            y:quantidadeDeUsuarios,
            type: 'bar',
            marker:{
                color: commonsjs.getCSS('--primary-color')
            }
        }
    ]
    const laytout = {
        plot_bgcolor:commonsjs.getCSS('--bg-color'),
        paper_bgcolor:commonsjs.getCSS('--bg-color'),
        title: {
            text: 'redes sociais com mais usuarios',
            x: 0,
            font: {
                color: commonsjs.getCSS('--primary-color'),
                size: 30,
                font: commonsjs.getCSS('--font')
            }
        },
        xaxis:{
            tickfont:commonsjs.tickconfig,
            title:{
                text:'nome das redes',
                font:{
                    color:commonsjs.getCSS('--secondary-color')
                }
            }
        },
        yaxis:{
            tickfont:commonsjs.tickconfig,
            title:{
                text:'bilhões de usuarios ativos',
                font:{
                    color: commonsjs.getCSS('--secondary-color')
                }
            }
        }
    }
    const grafico = document.createElement('div')
    grafico.className ='grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, laytout)
}
quantidadeUsuariosPorRede()