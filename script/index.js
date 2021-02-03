// OBJETOS --- OBJETOS --- OBJETOS --- OBJETOS --- OBJETOS --- OBJETOS --- OBJETOS

function ItemCompras (name, price, quantity, total) {
    this.name = name
    this.price = price
    this.quantity = quantity
    total = price * quantity
    this.total = total
}

// FUNCIONES --- FUNCIONES --- FUNCIONES --- FUNCIONES --- FUNCIONES --- FUNCIONES

function compras() {
    let indicador = ""

    while(indicador != "0") {
        let name = prompt("Ingrese que quiere comprar", "Ingrese 0 para finalizar")
        indicador = name
    
        if (indicador == 0) {
            break
        }
    
        let quantity = parseInt(prompt("Ingrese cuantas unidades quiere comprar"))
    
        newItem.push(new ItemCompras (name, quantity))
    }
}

// CODIGO --- CODIGO --- CODIGO --- CODIGO --- CODIGO --- CODIGO --- CODIGO --- CODIGO

var newItem = []

compras()

let seguirComprando = "Y"

while(seguirComprando != "N") {

    seguirComprando = prompt("Desea seguir comprando?", "Y/N")

    if (seguirComprando == "Y") {
        compras()
    } else {
        break
    }
}


console.log("Usted va a comprar: ")

newItemLength = newItem.length

for (i = 0; i < newItemLength; i++) {
    let comprasTemp = newItem[i]

    console.log("-" + comprasTemp.quantity + " " + comprasTemp.name)
}