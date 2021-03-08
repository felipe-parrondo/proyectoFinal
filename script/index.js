
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

    console.log(ItemObject)

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
    console.log(ItemObject.id)

    let newObject = new ItemCompras(pic, name, shipp, price, quantity, total, id)
    newObject.id = ItemObject.id

    itemComprasStorage(newObject)
}

function itemComprasStorage(obj) {

    console.log(obj)

    let identi = obj.id
    identi = identi.toString() 

    let quan = obj.quantity
    quan = quan.toString()
    
    console.log(quan)
    console.log(identi)

    let final = identi + quan
    
    sessionStorage.setItem(identi, final) //se almacena de esta forma para saber como llamarlo en el carrito, se va a usar un split(). usando el id como key de almacenamiento evito tener un objeto repetido en mi checkout.

    //window.location.href = "carrito.html"  //redirección al carrito
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

//secuencia de funciones para la construcción del carrito/checkout

function carritoOnLoadStorage() {

    for(let i = 0; i < instanciasItemSave.length; i++) {

        let objTemp = instanciasItemSave[i] 

        let newObjectId = localStorage.getItem(objTemp.id)

        carritoBuilder(newObjectId)
    } 
}

function carritoBuilder(objId) {

    for(let i = 0; i < instanciasItemSave.length; i++) {

        let objTemp = instanciasItemSave[i] 

        if(objTemp.id == objId) {
            ItemObject = instanciasItemSave[i]
            break
        }
    }
}

// CODIGO --- CODIGO --- CODIGO --- CODIGO --- CODIGO --- CODIGO --- CODIGO --- CODIGO


HTMLCatalogoIdenti()


// EVENTOS --- EVENTOS --- EVENTOS --- EVENTOS --- EVENTOS --- EVENTOS --- EVENTOS


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