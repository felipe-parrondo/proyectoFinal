$(document).ready( function() {

    /*$.ajax({
        url: "index.js",
        dataType: "script",
    })*/

    let comprasString = sessionStorage.getItem("compras")

    comprasString = JSON.parse(comprasString)

    comprasString.forEach(HTMLCarritoBuilder)

    deleteBtn()

    $("td:last-child input").on("click", function(){ deleteCompra(event) })

    $(".modal-body__quant").on("change", function() { quantityModificador(event) })

})