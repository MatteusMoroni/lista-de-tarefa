import { carregarTarefa } from './carregarTarefa.js'
import BotaoConclui from './concluirTarefa.js'
import BotaoDeleta from './deletarTarefa.js'



export const handleNovoItem = (evento) => {
    evento.preventDefault()
    const tarefas = JSON.parse(localStorage.getItem('tarefas'))||[]
    const input = document.querySelector('[data-form-imput]')
    const valor = input.value

    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value)
    const horario = data.format('HH:mm')
    const dataFormatada = data.format('DD/MM/YYYY')
    const concluida = false

    const dados = { 
        valor,
        dataFormatada,
        horario,
        concluida
    }

    if(input.value == "" || input.value == " "){
        Swal.fire(`Por favor informe uma tarefa!`)
    } 
    else if(calendario.value == ""){
        Swal.fire(`Informe a data e o horário da tarefa!`)
    }
    else{
        const tarefasAtualizadas = [...tarefas, dados]

        localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))
    
        input.value = ""
        calendario.value = ""

        carregarTarefa()
    }
}

export const Tarefa = ({ valor, horario, concluida } ,id) => {

    const tarefa = document.createElement('li')
    
    const conteudo = `<p class="content">${horario} * ${valor}</p>`
    if( concluida ) {
       tarefa.classList.add('done')
    }

    tarefa.classList.add('task')
    
    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui(carregarTarefa, id))
    tarefa.appendChild(BotaoDeleta(carregarTarefa, id))
   
    return tarefa

}
