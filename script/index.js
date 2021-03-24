
// FUNCIONES --- FUNCIONES --- FUNCIONES --- FUNCIONES --- FUNCIONES --- FUNCIONES

//secuencia de funciones para tomar la info del usuario de la sección catalogo y almacenarla en el storage
function itemSaveToCompras(objId, quantity) {

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
    newPrice = newPrice.slice(1)        //se eleimina el signo "$" para poder operar con el valor numerico
    let newShipp = parseInt(ItemObject.measure) * 3
    let newTotal = parseInt(quantity) * parseFloat(newPrice)

    let pic = ItemObject.pic
    let name = ItemObject.name
    let price = ItemObject.price
    let id = ItemObject.id
    let shipp = newShipp
    let total = newTotal

    let newObject = new ItemCompras(pic, name, shipp, price, quantity, total, id)
    newObject.id = ItemObject.id

    instanciasItemCompras.push(newObject)

    /*let saveStorage = JSON.stringify(instanciasItemCompras)

    $("#01002_buy").click(function() {
        $.ajax ({

            url: "./carrito.json",
            type: "POST",
            data: saveStorage,
            dataType: "json"
    
        })  .done( function(r){ 
            console.log(r) 
            })

            .fail( function(xhr, status, error){
                console.log(xhr)
                console.log(status)
                console.log(error)
            })
    })*/
    

    window.location.href = "carrito.html"  //redirección al carrito
}

//secuencia de funciones para la construcción del carrito/checkout
    /*function carritoOnLoadStorage() {

        for(let i = 0; i < instanciasItemSave.length; i++) {

            let objTemp = instanciasItemSave[i] 

            let newObjectId = localStorage.getItem(objTemp.id)

            carritoBuilder(newObjectId)
        } 
    }*/

function HTMLCarritoBuilder() {

    for(let i = 0; i < instanciasItemCompras.length; i++) {

        let objTemp = instanciasItemCompras[i]

        console.log(objTemp)

        
        let tdPic = "<img src=" + objTemp.pic + ">"

        let tdName = (objTemp.name).toString()

        let tdShipp = (objTemp.shipp).toString()

        let tdPrice = "$" + (objTemp.price).toString()

        let tdQuantity = (objTemp.quantity).toString()

        let tdTotal = "$" +(objTemp.total).toString()

        let infoArray = [tdPic, tdName, tdShipp, tdPrice, tdQuantity, tdTotal]
        


        let parent = $("#carrito__table--body")

        parent.append("<tr></tr>")

        $("#carrito__table--body > tr").addClass("carrito__table--row")

        let underParent = $(".carrito__table--row")

        for(let o = 0; o < 6; o++) {

            underParent.append("<td></td>")

        }

        let tableArray = $(".carrito__table--row > td")
        
        for(let o = 0; o < tableArray.length; o++) {

            tableArray[o].addClass("carrito__table--bodyRow")

            tableArray[o].append(infoArray[o])

        }
    }
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


// EVENTOS --- EVENTOS --- EVENTOS --- EVENTOS --- EVENTOS --- EVENTOS --- EVENTOS

$(document).ready(function() {

    $("#01001_buy").click( function() { itemSaveToCompras("01001", 1) })
    $("#01002_buy").click( function() { itemSaveToCompras("01002", 1) })
    $("#01003_buy").click( function() { itemSaveToCompras("01003", 1) })
    $("#01004_buy").click( function() { itemSaveToCompras("01004", 1) })
    $("#01005_buy").click( function() { itemSaveToCompras("01005", 1) })
    $("#01006_buy").click( function() { itemSaveToCompras("01006", 1) })
    $("#01007_buy").click( function() { itemSaveToCompras("01007", 1) })
    $("#01008_buy").click( function() { itemSaveToCompras("01008", 1) })
    $("#02001_buy").click( function() { itemSaveToCompras("02001", 1) })
    $("#02002_buy").click( function() { itemSaveToCompras("02002", 1) })
    $("#03001_buy").click( function() { itemSaveToCompras("03001", 1) })
    $("#04001_buy").click( function() { itemSaveToCompras("04001", 1) })
    $("#05001_buy").click( function() { itemSaveToCompras("05001", 1) })
    $("#05002_buy").click( function() { itemSaveToCompras("05002", 1) })
    $("#05003_buy").click( function() { itemSaveToCompras("05003", 1) })
    $("#06001_buy").click( function() { itemSaveToCompras("06001", 1) })
    $("#07001_buy").click( function() { itemSaveToCompras("07001", 1) })
    $("#07002_buy").click( function() { itemSaveToCompras("07002", 1) })

})




// CODIGO --- CODIGO --- CODIGO --- CODIGO --- CODIGO --- CODIGO --- CODIGO --- CODIGO

$(document).ready(function() {

    HTMLCatalogoIdenti()
    
    console.log()

})