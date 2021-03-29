// FUNCIONES --- FUNCIONES --- FUNCIONES --- FUNCIONES --- FUNCIONES --- FUNCIONES

function quantityModificador(e) {

    let arrayTemp = sessionStorage.getItem("compras")

    arrayTemp = JSON.parse(arrayTemp)

    let target = e.target

    target.value // nuevo valor ingresado

    let targetParent = target.parent()

    let targetSiblings = targetParent.siblings()

    for(let i = 0; i < targetSiblings.length; i++) {

        let currentSib = targetImg[i]

        let currentImg = (arrayTemp[i].pic).toString()

        if(currentImg == currentSib.src) {
            //condicion para insertar la cantidad en el array
        }
    }
}

function deleteCompra(e) {            //function para eliminar del array el objecto eliminado visualmente (asi no vuelve a figurar si la persona sale y entra del carrito)

    let arrayTemp = sessionStorage.getItem("compras")

    arrayTemp = JSON.parse(arrayTemp)

    let target = e.target

    let targetParent = $(target).parent()

    let targetParentParent = (targetParent).parent()

    targetSiblings = targetParent.siblings()

    //console.log(targetSiblings)

    targetImg = targetSiblings.children()

    //console.log(targetImg)

    if(arrayTemp.length == 1) {

        arrayTemp.pop()

    } else {

        for(let i = 0; i < arrayTemp.length; i++) {

            let currentSib = targetImg[1]

            let currentImg = (arrayTemp[i].pic).toString()
    
            if(currentImg == currentSib.src) {
                arrayTemp.splice(i, 2)         //no termina de retirar el elemento del array -- a
            }
        }
    }

    
    targetParentParent.remove()

    //console.log(arrayTemp)

    arrayTemp = JSON.stringify(arrayTemp)

    sessionStorage.setItem("compras", arrayTemp)

    location.reload()

}

function CargaSesion() {

    let tempInfo = sessionStorage.getItem("compras")

    if(tempInfo == null) {
        return null
    }

    tempInfo = JSON.parse(tempInfo)

    instanciasItemCompras = tempInfo

}


function HTMLCarritoBuilder(currentValue, index) {

    let objTemp = currentValue
    
    let tdPic = "<img class='carrito__table--bodyRowPic' src=" + objTemp.pic + ">"

    let tdName = (objTemp.name).toString()

    let tdShipp = "$" + (objTemp.shipp).toString()

    let tdPrice = (objTemp.price).toString()

    let tdQuantity = "<input type='textarea' value='"+ (objTemp.quantity).toString() +"' class='modal-body__quant'>"

    let tdTotal = "$" + (objTemp.total).toString()

    let infoArray = [tdPic, tdName, tdShipp, tdPrice, tdQuantity, tdTotal]

    let parent = $("#carrito__table--body")

    parent.append("<tr></tr>")

    $("#carrito__table--body tr").addClass("carrito__table--row")

    let underParent = $(".carrito__table--row")

    underParent = underParent[underParent.length - 1]

    //console.log(underParent)

    for(let o = 0; o < 7; o++) {

        $("<td> </td>").appendTo(underParent)

    }

    let tableArray = $(".carrito__table--row td")
    
    for(let j = 0; j < tableArray.length; j++) {

        $(tableArray[j]).addClass("carrito__table--bodyRow")

        $(tableArray[j + (index * 7)]).append(infoArray[j])

    }
}

function deleteBtn () {

    let deleteBtn = $("td:last-child")

    deleteBtn.append('<input type="button" value="X" class="btn btn-danger"> </input>')

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

    if(newShipp > 100) {
        newShipp = newShipp / 1000
    }

    let newTotal = (parseInt(quantity) * parseFloat(newPrice)) + parseInt(newShipp)


    let pic = ItemObject.pic
    let name = ItemObject.name
    let price = ItemObject.price
    let id = ItemObject.id
    let shipp = newShipp
    let total = newTotal

    let trueFactor = cargaArray(id)

    if(instanciasItemCompras.length == 0) {

        instanciasItemCompras.push(new ItemCompras(pic, name, shipp, price, quantity, total, id))

    } else if(trueFactor == 1) {

        instanciasItemCompras.push(new ItemCompras(pic, name, shipp, price, quantity, total, id))

    }
    
}


// --- // --- // --- // --- // --- // --- //


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

    sessionStorage.setItem("compras", stringTemp)

}


// EVENTOS --- EVENTOS --- EVENTOS --- EVENTOS --- EVENTOS --- EVENTOS --- EVENTOS


$(document).ready(function() {

    

    $("#01001_buy").on("click", ( function() { 
        itemSaveToCompras("01001", 1)
        cargaMemoria()
        $("#01001_buy").notify("Agregado!", "success")
    }))  
    $("#01002_buy").on("click", ( function() { 
        itemSaveToCompras("01002", 1)
        cargaMemoria()
        $("#01002_buy").notify("Agregado!", "success")
    }))  
    $("#01003_buy").on("click", ( function() { 
        itemSaveToCompras("01003", 1)
        cargaMemoria()
        $("#01003_buy").notify("Agregado!", "success")
    }))  
    $("#01004_buy").on("click", ( function() { 
        itemSaveToCompras("01004", 1)
        cargaMemoria()
        $("#01004_buy").notify("Agregado!", "success")
    }))  
    $("#01005_buy").on("click", ( function() { 
        itemSaveToCompras("01005", 1)
        cargaMemoria()
        $("#01005_buy").notify("Agregado!", "success")
    }))  
    $("#01006_buy").on("click", ( function() { 
        itemSaveToCompras("01006", 1)
        cargaMemoria()
        $("#01006_buy").notify("Agregado!", "success")
    }))  
    $("#01007_buy").on("click", ( function() { 
        itemSaveToCompras("01007", 1)
        cargaMemoria()
        $("#01007_buy").notify("Agregado!", "success")
    }))  
    $("#01008_buy").on("click", ( function() { 
        itemSaveToCompras("01008", 1)
        cargaMemoria()
        $("#01008_buy").notify("Agregado!", "success")
    }))  
    $("#02001_buy").on("click", ( function() { 
        itemSaveToCompras("02001", 1)
        cargaMemoria()
        $("#02001_buy").notify("Agregado!", "success")
    }))  
    $("#02002_buy").on("click", ( function() { 
        itemSaveToCompras("02002", 1)
        cargaMemoria()
        $("#02002_buy").notify("Agregado!", "success")
    }))  
    $("#03001_buy").on("click", ( function() { 
        itemSaveToCompras("03001", 1)
        cargaMemoria()
        $("#03001_buy").notify("Agregado!", "success")
    }))  
    $("#04001_buy").on("click", ( function() { 
        itemSaveToCompras("04001", 1)
        cargaMemoria()
        $("#04001_buy").notify("Agregado!", "success")
    })) 
    $("#05001_buy").on("click", ( function() { 
        itemSaveToCompras("05001", 1)
        cargaMemoria()
        $("#05001_buy").notify("Agregado!", "success")
    })) 
    $("#05002_buy").on("click", ( function() { 
        itemSaveToCompras("05002", 1)
        cargaMemoria()
        $("#05002_buy").notify("Agregado!", "success")
    }))    
    $("#05003_buy").on("click", ( function() { 
        itemSaveToCompras("05003", 1)
        cargaMemoria()
        $("#05003_buy").notify("Agregado!", "success")
    }))  
    $("#06001_buy").on("click", ( function() { 
        itemSaveToCompras("06001", 1)
        cargaMemoria()
        $("#06001_buy").notify("Agregado!", "success")
    }))  
    $("#07001_buy").on("click", ( function() { 
        itemSaveToCompras("07001", 1)
        cargaMemoria()
        $("#07001_buy").notify("Agregado!", "success")
    }))  
    $("#07002_buy").on("click", ( function() { 
        itemSaveToCompras("07002", 1)
        cargaMemoria()
        $("#07002_buy").notify("Agregado!", "success")
    })) 
})




// CODIGO --- CODIGO --- CODIGO --- CODIGO --- CODIGO --- CODIGO --- CODIGO --- CODIGO

$(document).ready(function() {

    HTMLCatalogoIdenti()

    CargaSesion()

})