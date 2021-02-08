// OBJETOS --- OBJETOS --- OBJETOS --- OBJETOS --- OBJETOS --- OBJETOS --- OBJETOS


// objeto reservado para almacenar los items del catalogo
function ItemSave (pic, name, price, material, measure, id) {
    this.pic = pic
    this.name = name
    this.price = price
    this.material = material
    this.measure = measure
    this.id = id  //id de 5 numeros --- los primeros 2 indicando la categoria y los ultimos 3 indicando el item especifico dentro de esa categoria
}


//objeto reservado para guardar los items en el carrito y la información para hacerle display
function ItemCompras (pic, name, shipp, price, quantity, total) {
    this.pic = pic
    this.name = name
    this.shipp = shipp          // usado para calcular el costo de envío, se va a usar un valor númerico para calcular la distancia del cliente al almacen + tamaño del producto
    this.price = price
    this.quantity = quantity
    this.total = total
    this.id = id
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

function itemSaveToCompras(ItemObject, quantity) {
    let pic = ItemObject.pic
    let name = ItemObject.name
    let price = ItemObject.price
    let measure = ItemObject.measure
    let id = ItemObject.id
    let shipp = measure * 3
    let total = quantity * price


    let newObject = new ItemCompras = (pic, name, shipp, price, quantity, total, id)

    itemComprasStorage(newObject)

    return newObject
}

function itemComprasStorage(newObject) {
    let identi = toString(newObject.id) 
    let quan = toString(newObject.quantity) 

    let final = identi + "/" + quan
    
    sessionStorage.setItem(final)
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