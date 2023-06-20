/* Crear una pagina de Vero AVON, con arrays que contengan productos, realiazar un carrito de compras
donde se muestre lo que el cliente va comprando y agregando al carrito.  */

let productos = [

    {id: 1,categoria: "perfumeria", nombre: "Attraction", precio: 8580},
    {id: 2,categoria: "perfumeria", nombre: "Rare Flowers", precio: 6270},
    {id: 3,categoria: "perfumeria", nombre: "Pur Blanca", precio: 3110},

    {id: 4,categoria: "perfumeria", nombre: "Attraction para él", precio: 11070},
    {id: 5,categoria: "perfumeria", nombre: "300Km/h", precio: 6050},
    {id: 6,categoria: "perfumeria", nombre: "Maxime", precio: 13100},

    {id: 7,categoria: "maquillaje", nombre: "Paleta de sombras", precio: 3200},
    {id: 8,categoria: "maquillaje", nombre: "Delineadores retráctiles", precio: 1435},
    {id: 9,categoria: "maquillaje", nombre: "Pinturas de uñas", precio: 1200},
    {id: 10,categoria: "maquillaje", nombre: "Labiales", precio: 730},

    {id: 11,categoria: "cuidado personal", nombre: "Cremas faciales", precio: 3600},
    {id: 12,categoria: "cuidado personal", nombre: "Mascarillas faciales", precio: 860},
    {id: 13,categoria: "cuidado personal", nombre: "Locion corporal", precio: 2600},
    {id: 14,categoria: "cuidado personal", nombre: "Cremas de manos", precio: 590}

  ]
  
  let carrito = []

  let mensaje = "Bienvenidos a la tienda de Vero AVON \n 1- Lista de productos\n 2- Agregar producto al carrito \n 3- Filtrar por categoria \n 4- Ordenar por precio \n 5- Mostrar mi carrito \n 0- SALIR "
  alert(mensaje)
  
  let opcion
  
  do {
      opcion = Number(prompt(mensaje));
      
      if (opcion === 1) {
          //Muestro lista de productos
        alert(listar(productos));
      } else if (opcion === 2) {
          // Opcion para comprar productos, donde muestro los productos y doy opciones para comprar
          let id = Number(prompt("Seleccione id del producto que desea comprar\n" + listarPrecios(productos)))
          let productoBuscado = productos.find(prod => prod.id === id)
          let posicionProductoEnCarrito = carrito.findIndex(prod => prod.id === productoBuscado.id)
      
          if (posicionProductoEnCarrito === -1) {
            carrito.push({
              id: productoBuscado.id,
              nombre: productoBuscado.nombre,
              precioUnitario: productoBuscado.precio,
              unidades: 1,
              subtotal: productoBuscado.precio
            })
          } else {
            carrito[posicionProductoEnCarrito].unidades++
            carrito[posicionProductoEnCarrito].subtotal = carrito[posicionProductoEnCarrito].precioUnitario * carrito[posicionProductoEnCarrito].unidades
          }
      } else if (opcion === 3) {
          // Ordenar productos por categoria
          let categoria = prompt("Selecciones categoria:\n - Perfumeria \n - Maquillaje \n - Cuidado personal")
          let productosFiltrados = productos.filter(producto => producto.categoria === categoria)
          alert(listar(productosFiltrados))
      } else if (opcion === 4) {
        // Ordenar productos por precio
        productos.sort((a, b) => a.precio - b.precio);
        alert("Productos ordenados por precio \n" + listarPrecios(productos))
      } else if (opcion === 5) {
          //Mostrar carrito de compra
          if (carrito.length > 0) {
              alert(listar(carrito))
              console.log(carrito)
            } else {
              alert("Primero debe agregar productos al carrito")
            }
      }
    } while (opcion !== 0);
  
  
  // creo funcion para listar
    function listar(listas) {
      let listado = "ID - Nombre \n"
      listas.forEach(elemen => {
        listado = listado + elemen.id + " - " + elemen.nombre + "\n"
      })
      return listado
    }
  
  // creo funcion para listar precios de productos
  function listarPrecios(listas) {
      let listado = "ID - Nombre - Precio \n";
      listas.forEach(elemen => {
        listado += elemen.id + " - " + elemen.nombre + " - $" + elemen.precio + "\n";
      });
      return listado;
    }  


