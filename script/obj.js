// ALMACEN DE REFERENCIAS PARA LAS FOTOS DE LOS PRODUCTOS


// OBJETOS --- OBJETOS --- OBJETOS --- OBJETOS --- OBJETOS --- OBJETOS --- OBJETOS --- OBJETOS --- OBJETOS


// objeto reservado para almacenar los items del catalogo
function ItemSave (pic, name, price, material, measure, id, marca, stock) {
    this.pic = pic
    this.name = name
    this.price = price
    this.material = material
    this.measure = measure
    this.id = id  //id de 5 numeros --- los primeros 2 indicando la categoria y los ultimos 3 indicando el item especifico dentro de esa categoria
    this.marca = marca  
    this.stock = stock
}


//objeto reservado para guardar los items en el carrito y la información para hacerle display
function ItemCompras (pic, name, shipp, price, quantity, total) {
    this.pic = pic
    this.name = name
    this.shipp = shipp          // usado para calcular el costo de envío, se va a usar un valor númerico para calcular la distancia del cliente al almacen + tamaño del producto
    this.price = price
    this.quantity = quantity
    this.total = total
    this.id = id
}


// INSTANCIAS --- INSTANCIAS --- INSTANCIAS --- INSTANCIAS --- INSTANCIAS --- INSTANCIAS --- INSTANCIAS

var instanciasItemCompras = new Array()

var instanciasItemSave = new Array()

instanciasItemSave.push(new ItemSave("", "Tijera de Sastre", "$99.99", "Filo de Acero con Mango de Plástico", '9"', "01001", "Mundial", "Disponible"))  //TMS 1

instanciasItemSave.push(new ItemSave("", "Tijera de Sastre", "$105.50", "Acero con Mango Pintado", '12"', "01002", "Mundial", "Disponible"))  //TMS 2

instanciasItemSave.push(new ItemSave("", "Tijera de Modista", "$149.99", "Acero", '10"', "01003", "Mundial", "Disponible"))  //TMM

instanciasItemSave.push(new ItemSave("", "Tijera de Sastre", "$170.25", "Acero", '11"', "01004", "Mundial", "Disponible")) //TMS 4

instanciasItemSave.push(new ItemSave("", "Tijera de Sastre", "$114.99", "Filo de Acero con Mango de Plástico", '8"', "01005", "Mundial", "Disponible"))  //TMS 5

instanciasItemSave.push(new ItemSave("", "Tijera Pajarito", "$120.20", "Acero Tornasolado", '5"', "01006", "Germania", "Disponible"))  //TPajarito

instanciasItemSave.push(new ItemSave("", "Tijera Peluquería - Entresacar", "$120.20", "Acero", '8"', "01007", "Germania", "Disponible"))  //TPEntre

instanciasItemSave.push(new ItemSave("", "Tijera Peluquería - Pulir", "$120.20", "Acero", '8"', "01008", "Germania", "Disponible"))  //TPPulir

instanciasItemSave.push(new ItemSave("", "Caja de Hilos Blancos", "$39.99", "Poliéster", "4000 metros", "02001", "Genérica", "Disponible"))  //HBlanco

instanciasItemSave.push(new ItemSave("", "Caja de Hilos Negro", "$39.99", "Poliéster", "4000 metros", "02002", "Genérica", "Disponible"))  //HNegro

instanciasItemSave.push(new ItemSave("", "Pack de Agujas", "$49.99", "Acero", '1"', "03001", "Genérica", "Disponible"))  //Agujas

instanciasItemSave.push(new ItemSave("", "Cortahilachas", "$24.99", "Acero con Mango de Plástico", '3"', "04001", "Germania", "Disponible"))  //Cortahilacha

instanciasItemSave.push(new ItemSave("", "Parches", "$69.99", "Tela Reforzada", "5x5 / 10x10", "05001", "Genérica", "Disponible"))  //Parches

instanciasItemSave.push(new ItemSave("", "Enhebradores", "$64.99", "Madera y Plástico", '5"', "05002", "Genérica", "Disponible"))  //Enhebrador

instanciasItemSave.push(new ItemSave("", "Pack de Cierres", "$37.50", "Tela y Acero", "5 metros", "05003", "Genérica", "Disponible"))  //Cierre

instanciasItemSave.push(new ItemSave("", "Caja de Botones", "$34.99", "Madera y Plástico", '1" - 6"', "06001", "Genérica", "Disponible"))  //Boton

instanciasItemSave.push(new ItemSave("", "Cinta Métrica", "$80.50", "Plástico", "10 metros", "07001", "Genérica", "Disponible"))  //CMetrica

instanciasItemSave.push(new ItemSave("", "Cinta Reflectiva", "$87.50", "Plástico Reflectivo", "10 metros", "07002", "Bulfer", "Disponible"))  //CReflectiva