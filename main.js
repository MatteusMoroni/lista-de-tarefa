import { carregarTarefa } from './components/carregarTarefa.js'
import {handleNovoItem} from './components/criarTarefa.js'

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handleNovoItem) //estudar

carregarTarefa()