
// FUNCIONES --- FUNCIONES --- FUNCIONES --- FUNCIONES --- FUNCIONES --- FUNCIONES


function compras() { // función vieja
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

//secuencia de funciones para que el carrito funcione y construya la tabla de checkout
function eventoAgregarCarrito(obj, quantity) {
    if (typeof array != "undefined" && array != null && array.length != null && array.length > 0) {
        var carrito = []
    }

    let newObject = itemSaveToCompras(obj, quantity)

    carrito.push(newObject)
}

function itemSaveToCompras(ItemObject, quantity) {
    let pic = ItemObject.pic
    let name = ItemObject.name
    let price = ItemObject.price
    let measure = ItemObject.measure
    let id = ItemObject.id
    let shipp = measure * 3
    let total = quantity * price


    let newObject = new ItemCompras(pic, name, shipp, price, quantity, total, id)

    itemComprasStorage(newObject)

    return newObject
}

function itemComprasStorage(obj) {
    let identi = toString(obj.id) 
    let quan = toString(obj.quantity) 

    let final = identi + quan
    
    sessionStorage.setItem(identi, final)
}


//secuencia de funciones para la construcción del catálogo de forma automática
function HTMLCatalogoIdenti () {
    
    for(let i = 0; i < instanciasItemSave.length; i++){

        let obj = instanciasItemSave[i]

        let objId = obj.id 

        switch(objId) {
            case "01001":
                HTMLCatalogoBuilder("modalTMS1Label", obj)
                break;
            
            case "01002":
                HTMLCatalogoBuilder("modalTMS2Label", obj)
                break;

            case "01003":
                HTMLCatalogoBuilder("modalTMMLabel", obj)
                break;

            case "01004":
                HTMLCatalogoBuilder("modalTMS4Label", obj)
                break;

            case "01005":
                HTMLCatalogoBuilder("modalTMS5Label", obj)
                break;

            case "01006":
                HTMLCatalogoBuilder("modalTPajaritoLabel", obj)
                break;

            case "01007":
                HTMLCatalogoBuilder("modalTPEntreLabel", obj)
                break;

            case "01008":
                HTMLCatalogoBuilder("modalTPPulirLabel", obj)
                break;

            case "02001":
                HTMLCatalogoBuilder("modalHBlancoLabel", obj)
                break;
            
            case "02002":
                HTMLCatalogoBuilder("modalHNegroLabel", obj)
                break;

            case "03001":
                HTMLCatalogoBuilder("modalAgujaLabel", obj)
                break;

            case "04001":
                HTMLCatalogoBuilder("modalCortahilachaLabel", obj)
                break;

            case "05001":
                HTMLCatalogoBuilder("modalParcheLabel", obj)
                break;

            case "05002":
                HTMLCatalogoBuilder("modalEnhebradorLabel", obj)
                break;

            case "06001":
                HTMLCatalogoBuilder("modalBotonLabel", obj)
                break;

            case "05003":
                HTMLCatalogoBuilder("modalCierreLabel", obj)
                break;

            case "07001":
                HTMLCatalogoBuilder("modalCMetricaLabel", obj)
                break;

            case "07002":
                HTMLCatalogoBuilder("modalCReflectivaLabel", obj)
                break;
        }
    }

}

function HTMLCatalogoBuilder(idName, obj) {
    
    id = obj.id

    idMarca = id + "__marca"
    idMaterial = id + "__material"
    idMedida = id + "__medida"
    idPrecio = id + "__precio"
    idStock = id + "__stock"

    console.log(idMarca)

    document.getElementById(idMarca).appendChild(document.createTextNode(obj.marca))
    document.getElementById(idMaterial).appendChild(document.createTextNode(obj.material))
    document.getElementById(idMedida).appendChild(document.createTextNode(obj.measure))
    document.getElementById(idPrecio).appendChild(document.createTextNode(obj.price))
    document.getElementById(idStock).appendChild(document.createTextNode(obj.stock))
    document.getElementById(idName).appendChild(document.createTextNode(obj.name))

}


// CODIGO --- CODIGO --- CODIGO --- CODIGO --- CODIGO --- CODIGO --- CODIGO --- CODIGO

HTMLCatalogoIdenti()