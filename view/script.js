const fecha = document.querySelector('#fecha')
const lista = document.querySelector('#lista')
const input = document.querySelector('#input')
const botonEnter = document.querySelector('#enter')
const check = 'fa-check-circle'
const uncheck = 'fa-circle'
const lineThrough = 'line-through'
let id  = 0
const LIST = []


//creacion de fecha actualizada 

const FECHA = new Date ()
fecha.innerHTML = FECHA.toLocaleDateString('es-CL',{weekday: 'long', month: 'long', day:'numeric'})
// funcion de agregar tarea 

function agregarProyecto( proyecto,id,realizado,eliminado) {

  if(eliminado) {return} // si existe eliminado es true si no es false 

  const REALIZADO = realizado ? check : uncheck // si realizado es verdadero check si no uncheck
  const LINE = realizado ? lineThrough : '' 

  const elemento = 
  `
    <li id="elemento">
      <i class="far ${REALIZADO} cursor" data="realizado" id="${id}"></i>
      <a  class="link" href="./tabla.html" target="_blank"><p class="text ${LINE}">${proyecto}</p></a>
      <i class="fas fa-trash de cursor" data="eliminado" id="${id}"></i> 
    </li>
  `
  lista.insertAdjacentHTML("beforeend",elemento)

}

// funcion de proyecto Realizada 

function proyectoRealizada(element) {
  element.classList.toggle(check)
  element.classList.toggle(uncheck)
  element.parentNode.querySelector('.text').classList.toggle(lineThrough)
  console.log(LIST[element.id].realizado)
  LIST[element.id].realizado = LIST[element.id].realizado ?false :true //True
  console.log(LIST)
  console.log(LIST[element.id])
  console.log(LIST[element.id].realizado)
}

function proyectoEliminado(element){
  element.parentNode.parentNode.removeChild(element.parentNode)
  LIST[element.id].eliminado = true
  console.log(LIST)
}


// crear un evento para escuchar el enter y para habilitar el boton 

botonEnter.addEventListener('click', ()=> {
  const proyecto = input.value
  if(proyecto){
      agregarProyecto(proyecto,id,false,false)
      LIST.push({
          nombre : proyecto,
          id : id,
          realizado : false,
          eliminado : false
      })
  }
      input.value = ''
      id++
      console.log(LIST)
})

document.addEventListener('keyup', function (event) {
  if (event.key=='Enter'){
      const proyecto = input.value
      if(proyecto) {
          agregarProyecto(proyecto,id,false,false)
          LIST.push({
          nombre : proyecto,
          id : id,
          realizado : false,
          eliminado : false
       })

      }
      input.value = ''
      id++ 
      console.log(LIST)
  } 
})

lista.addEventListener('click',function(event){
  const element = event.target 
  const elementData = element.attributes.data.value

  if(elementData === 'realizado') {
      proyectoRealizada(element)
  }
  else if(elementData === 'eliminado') {
      proyectoEliminado(element)
  }
})
