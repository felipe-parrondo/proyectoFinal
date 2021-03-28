$(document).ready( function() {

    /*$.ajax({
        url: "index.js",
        dataType: "script",
    })*/

    let comprasString = sessionStorage.getItem("compras")

    comprasString = JSON.parse(comprasString)

    comprasString.forEach(HTMLCarritoBuilder)

    deleteBtn()

    $("td:last-child input").on("click", function(){ 
        comprasString = deleteCompra(event, comprasString)

        console.log(comprasString)

        comprasString = JSON.stringify(comprasString)

        console.log(comprasString)

        sessionStorage.setItem("compras", comprasString)
    })

})