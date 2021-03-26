
// FUNCIONES --- FUNCIONES --- FUNCIONES --- FUNCIONES --- FUNCIONES --- FUNCIONES


function HTMLCarritoBuilder() {

    for(let i = 0; i < instanciasItemCompras.length; i++) {

        let objTemp = instanciasItemCompras[i]

        
        let tdPic = "<img src=" + objTemp.pic + ">"

        let tdName = (objTemp.name).toString()

        let tdShipp = (objTemp.shipp).toString()

        let tdPrice = "$" + (objTemp.price).toString()

        let tdQuantity = (objTemp.quantity).toString()

        let tdTotal = "$" +(objTemp.total).toString()

        let infoArray = [tdPic, tdName, tdShipp, tdPrice, tdQuantity, tdTotal]

        let parent = $("#carrito__table--body")

        parent.append("<tr></tr>")

        $("#carrito__table--body tr").addClass("carrito__table--row")

        let underParent = $(".carrito__table--row")

        console.log(underParent[0])

        for(let o = 0; o < 6; o++) {

            underParent.append("<td></td>")

        }

        let tableArray = $(".carrito__table--row td")
        
        for(let o = 0; o < tableArray.length; o++) {

            tableArray[o].addClass("carrito__table--bodyRow")

            tableArray[o].append(infoArray[o])

        }
    }
}

//secuencia de funciones para tomar la info del usuario de la sección catalogo y almacenarla en el storage
function cargaArray (id) {

    let arrayID = []

    let falseFactor = 0

    for(let j = 0; j < instanciasItemCompras.length; j++) {

        let instancia = instanciasItemCompras[j]

        arrayID[j] = instancia.id

    }

    for(let j = 0; j < arrayID.length; j++) {

        if (arrayID[j] == id) {
            return 0
        } else {
            falseFactor = 1
        }
    }

    return falseFactor
}

function itemSaveToCompras(objId, quantity) {           //nose por que, pero se ejecuta dos veces la funcion //solucionado

    let ItemObject
    let objTemp

    //recorrer instancias
    for(let i = 0; i < instanciasItemSave.length; i++) {

        objTemp = instanciasItemSave[i] 

        if(objTemp.id == objId) {
            ItemObject = instanciasItemSave[i]
            break
        }
    }

    let newPrice = ItemObject.price
    newPrice = newPrice.slice(1)        //se elimina el signo "$" para poder operar con el valor numerico
    let newShipp = parseInt(ItemObject.measure) * 3
    let newTotal = parseInt(quantity) * parseFloat(newPrice)

    let pic = ItemObject.pic
    let name = ItemObject.name
    let price = ItemObject.price
    let id = ItemObject.id
    let shipp = newShipp
    let total = newTotal

    let trueFactor = cargaArray(id)

    console.log(trueFactor)

    if(instanciasItemCompras.length == 0) {

        instanciasItemCompras.push(new ItemCompras(pic, name, shipp, price, quantity, total, id))

    } else {

        if(trueFactor == 1) {

            instanciasItemCompras.push(new ItemCompras(pic, name, shipp, price, quantity, total, id))

        } else {

            alert("Item ya selecionado!")

        }
    }  

    console.log(instanciasItemCompras)
}

//secuencia de funciones para la construcción del catálogo de forma automática (ponele)
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

    $("#" + idMarca).text(obj.marca)
    $("#" + idMaterial).text(obj.material)
    $("#" + idMedida).text(obj.measure)
    $("#" + idPrecio).text(obj.price)
    $("#" + idStock).text(obj.stock)
    $("#" + idName).text(obj.name)

}

function cargaMemoria() {

    let stringTemp = JSON.stringify(instanciasItemCompras)

    Storage.setItem("compras", stringTemp)

}


// EVENTOS --- EVENTOS --- EVENTOS --- EVENTOS --- EVENTOS --- EVENTOS --- EVENTOS


$(document).ready(function() {

    $("#01001_buy").on("click", ( function() { 
        itemSaveToCompras("01001", 1) 
        cargaMemoria()
        location.href= "/carrito.html"
        alert("veamos que pasa")
    }))  

    $("#01002_buy").on("click", ( function() { itemSaveToCompras("01002", 1) }))
    $("#01003_buy").on("click", ( function() { itemSaveToCompras("01003", 1) }))
    $("#01004_buy").on("click", ( function() { itemSaveToCompras("01004", 1) }))
    $("#01005_buy").on("click", ( function() { itemSaveToCompras("01005", 1) }))
    $("#01006_buy").on("click", ( function() { itemSaveToCompras("01006", 1) }))
    $("#01007_buy").on("click", ( function() { itemSaveToCompras("01007", 1) }))
    $("#01008_buy").on("click", ( function() { itemSaveToCompras("01008", 1) }))
    $("#02001_buy").on("click", ( function() { itemSaveToCompras("02001", 1) }))
    $("#02002_buy").on("click", ( function() { itemSaveToCompras("02002", 1) }))
    $("#03001_buy").on("click", ( function() { itemSaveToCompras("03001", 1) }))
    $("#04001_buy").on("click", ( function() { itemSaveToCompras("04001", 1) }))
    $("#05001_buy").on("click", ( function() { itemSaveToCompras("05001", 1) }))
    $("#05002_buy").on("click", ( function() { itemSaveToCompras("05002", 1) }))
    $("#05003_buy").on("click", ( function() { itemSaveToCompras("05003", 1) }))
    $("#06001_buy").on("click", ( function() { itemSaveToCompras("06001", 1) }))
    $("#07001_buy").on("click", ( function() { itemSaveToCompras("07001", 1) }))
    $("#07002_buy").on("click", ( function() { itemSaveToCompras("07002", 1) }))

})




// CODIGO --- CODIGO --- CODIGO --- CODIGO --- CODIGO --- CODIGO --- CODIGO --- CODIGO

$(document).ready(function() {

    HTMLCatalogoIdenti()
    
    console.log()

})