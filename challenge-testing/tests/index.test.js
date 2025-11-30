const CarritoDeCompras = require("../index")
const carrito = new CarritoDeCompras();

describe("Testeando el carrito de compras", () => {
    it("Carrito debe ser una instancia de la clase CarritoDeCompras", () => {
        expect(carrito).toBeInstanceOf(CarritoDeCompras);
    })
    
    it("el carrito se inicializa con un array vacio", () => {
        expect(carrito.listaDeCompras.length).toBe(0)
    })
    it("agregarProducto debe ser un metodo de la clase CarritoDeCompras", () => {
        expect(carrito.agregarProducto).toBeInstanceOf(Function)
    })
    it("calcularTotal debe ser un metodo de la clase CarritoDeCompras", () => {
        expect(carrito.calcularTotal).toBeInstanceOf(Function)
    })
    it("aplicarDescuento debe ser un metodo de la clase CarritoDeCompras", () => {
        expect(carrito.aplicarDescuento).toBeInstanceOf(Function)
    })
    it("si se ejecuta agregarProducto pasando un nuevo producto, entonces debe agregarse a la lista de compras", () => {
        const producto = {
            id: 1,
            name: "Iphone 15 pro max",
            price: 1500,
            color: "Gray"
        };
        const producto2 = {
            id: 2,
            name: "Mac Book pro",
            price: 3500,
            color: "Black"
        }
        carrito.agregarProducto(producto);
        expect(carrito.listaDeCompras.length).toBe(1);
        carrito.agregarProducto(producto2);
        expect(carrito.listaDeCompras.length).toBe(2);
        expect(carrito.listaDeCompras[0]).toBe(producto);
        expect(carrito.listaDeCompras[1]).toBe(producto2);
        expect(carrito.listaDeCompras[2]).toBe(undefined);
    })
        
        it("el metodo calcular total debe devolver el precio total del carrito", () => {
            expect(carrito.calcularTotal()).toBe(5000);
        const producto3 = {
            id: 3,
            name: "appel wach",
            price: 1000,
            color: "Red",
        };   
        carrito.agregarProducto(producto3);
        expect(carrito.calcularTotal()).toBe(6000);
    });
    it("el metodo aplicar descuento debe aplicar el descuento especificado pasado por parametro", () => {
        expect(carrito.aplicarDescuento(10)).toBe(5400);
        expect(carrito.aplicarDescuento(20)).toBe(4800)
        });   
});
