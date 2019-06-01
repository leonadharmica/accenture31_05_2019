//1 tener un elemento con que laburar

let btn = document.querySelector("button")

//El body es uno de los nodos que no hace falta seleccionar para usarlo ya que esta en document.body
//let body = document.querySelector("body")

//2 A ese elemento le asigno un evento
btn.addEventListener("click", hacerClick)

//3 - tener el callback disponible

function hacerClick(){
    let div = document.createElement("div")
    let p = document.createElement("p")
    let btn_nuevo = document.createElement("button")

    p.innerText = "lorem ipsum"
    btn_nuevo.innerText = "borrar"
    btn_nuevo.addEventListener ("click", borrarElemento)

    div.appendChild(p)
    div.appendChild(btn_nuevo)
    document.body.appendChild(div)
}

//Objeto Evento: es un objeto que te llega como primer parametro de cualquier 
//funcion (callback) registrada en un evento

function borrarElemento(e){
    //Event.target = es una referencia al nodo que acaba de disparar el evento
    //Nodo.parentNode = Es una referencia al nodo padre
    document.body.removeChild(e.target.parentNode)
}


/*

//Eventos Default: son comportamientos con los que ya vienen algunos nodos en determinados eventos
let a = document.querySelector("a")

a.addEventListener("click", clickDelA)

function clickDelA(e){
    //Event.preventDefault(): detiene el comportamiento por default de cualquier nodo
    e.preventDefault()
    console.log("click del a!")
}
*/


/*
1) En el callback del <a> hacer la siguiente estructura:

<div>
    <p>Esta seguro que quiere salir de esta pagina?</p>
    <button>Aceptar</button>
    <button>Cancelar</button>
</div>

2) Si se hace click en "aceptar" se tiene que redirigir al usuario al href del <a>

3) Si se hace click en "cancelar" se tiene que borrar todo el div que contenia el boton

 */

let a = document.querySelector("a")

a.addEventListener("click", clickDelA)

function clickDelA(e){
    let div = document.createElement("div")
    let p = document.createElement("p")
    let btn_aceptar = document.createElement("button")
    let btn_cancelar = document.createElement("button")

    //div.className= "popup"
    div.classList.add("popup")
    //nodo.classList.add
    //nodo.classList.remove()
    //nodo.classList.toggle()



    p.innerText = "Esta seguro que quiere salir de esta pagina?"
    btn_aceptar.innerText = "aceptar"
    btn_aceptar.addEventListener("click", redirigir)

    function redirigir(){
        //window.location.href = "http://www.google.com"
        location.href = a.href
    }
   
    btn_cancelar.innerText = "cancelar"

    btn_cancelar.addEventListener("click", borrarElDiv)

    function borrarElDiv(e){
        document.body.removeChild(e.target.parentNode)

    }



    div.appendChild(p)
    div.appendChild(btn_aceptar)
    div.appendChild(btn_cancelar)
    document.body.appendChild(div)

    e.preventDefault()

}