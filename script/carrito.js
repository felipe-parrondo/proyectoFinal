$(document).ready( function() {

    /*$.ajax({
        url: "index.js",
        dataType: "script",
    })*/

    let comprasString = sessionStorage.getItem("compras")

    comprasString = JSON.parse(comprasString)

    console.log(comprasString)

    comprasString.forEach(HTMLCarritoBuilder)

    deleteBtn()

    $("td:last-child input").on("click", function(){ 
        deleteCompra(event, comprasString)
    })

})