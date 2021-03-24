//FUNCIONES

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

//CODIGO

$(document).ready(function() {

    HTMLCarritoBuilder()

})

$()