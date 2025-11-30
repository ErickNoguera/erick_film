class CarritoDeCompras {
  constructor() {
    this.listaDeCompras = [];
  }
  agregarProducto(producto) {
    this.listaDeCompras.push(producto);
  }
  calcularTotal() {
    return this.listaDeCompras.reduce((acum, next) => acum + next.price, 0);
  }
  
  aplicarDescuento(descuento) {
    const total = this.calcularTotal()
    const desc = total *(descuento / 100)
    return total - desc;
  }
}

module.exports = CarritoDeCompras;
