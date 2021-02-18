
// FUNCIONES --- FUNCIONES --- FUNCIONES --- FUNCIONES --- FUNCIONES --- FUNCIONES

//secuencia de funciones para tomar la info del usuario de la sección catalogo y almacenarla en el storage
function itemSaveToCompras(objId, quantity) {

    let ItemObject

    //recorrer instancias
    for(let i = 0; i < instanciasItemSave.length; i++) {

        let objTemp = instanciasItemSave[i]
        console.log(instanciasItemSave[i])

        if(objTemp.id == objId) {
            ItemObject = instanciasItemSave
            break
        }
    }

    let pic = ItemObject.pic
    let name = ItemObject.name
    let price = ItemObject.price
    let measure = ItemObject.measure
    let id = ItemObject.id
    let shipp = measure * 3
    let total = quantity * price


    let newObject = new ItemCompras(pic, name, shipp, price, quantity, total, id)

    itemComprasStorage(newObject)
}

function itemComprasStorage(obj) {
    let identi = toString(obj.id) 
    let quan = toString(obj.quantity) 

    let final = identi + quan
    
    sessionStorage.setItem(identi, final) //se almacena de esta forma para saber como llamarlo en el carrito, se va a usar un split(). usando el id como key de almacenamiento evito tener un objeto repetido en mi checkout.

    window.location.href = "carrito.html"  //redirección al carrito
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

    document.getElementById(idMarca).appendChild(document.createTextNode(obj.marca))
    document.getElementById(idMaterial).appendChild(document.createTextNode(obj.material))
    document.getElementById(idMedida).appendChild(document.createTextNode(obj.measure))
    document.getElementById(idPrecio).appendChild(document.createTextNode(obj.price))
    document.getElementById(idStock).appendChild(document.createTextNode(obj.stock))
    document.getElementById(idName).appendChild(document.createTextNode(obj.name))

}


// CODIGO --- CODIGO --- CODIGO --- CODIGO --- CODIGO --- CODIGO --- CODIGO --- CODIGO


HTMLCatalogoIdenti()


// EVENTOS --- EVENTOS --- EVENTOS --- EVENTOS --- EVENTOS --- EVENTOS --- EVENTOS


document.getElementById("01001_buy").addEventListener("click", itemSaveToCompras, ["01001", 1])
document.getElementById("01002_buy").addEventListener("click", itemSaveToCompras, ["01002", 1])
document.getElementById("01003_buy").addEventListener("click", itemSaveToCompras, ["01003", 1])
document.getElementById("01004_buy").addEventListener("click", itemSaveToCompras, ["01004", 1])
document.getElementById("01005_buy").addEventListener("click", itemSaveToCompras, ["01005", 1])
document.getElementById("01006_buy").addEventListener("click", itemSaveToCompras, ["01006", 1])
document.getElementById("01007_buy").addEventListener("click", itemSaveToCompras, ["01007", 1])
document.getElementById("01008_buy").addEventListener("click", itemSaveToCompras, ["01008", 1])
document.getElementById("02001_buy").addEventListener("click", itemSaveToCompras, ["02001", 1])
document.getElementById("02002_buy").addEventListener("click", itemSaveToCompras, ["02002", 1])
document.getElementById("03001_buy").addEventListener("click", itemSaveToCompras, ["03001", 1])
document.getElementById("04001_buy").addEventListener("click", itemSaveToCompras, ["04001", 1])
document.getElementById("05001_buy").addEventListener("click", itemSaveToCompras, ["05001", 1])
document.getElementById("05002_buy").addEventListener("click", itemSaveToCompras, ["05002", 1])
document.getElementById("05003_buy").addEventListener("click", itemSaveToCompras, ["05003", 1])
document.getElementById("06001_buy").addEventListener("click", itemSaveToCompras, ["06001", 1])
document.getElementById("07001_buy").addEventListener("click", itemSaveToCompras, ["07001", 1])
document.getElementById("07002_buy").addEventListener("click", itemSaveToCompras, ["07002", 1])