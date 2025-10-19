export class Distancia {
  x1 = 0
  y1 = 0
  x2 = 0
  y2 = 0

  asignarX1(valor: any): void {
    this.x1 = parseFloat(valor)
  }

  asignarY1(valor: any): void {
    this.y1 = parseFloat(valor)
  }

  asignarX2(valor: any): void {
    this.x2 = parseFloat(valor)
  }

  asignarY2(valor: any): void {
    this.y2 = parseFloat(valor)
  }

  elevarCuadrado(valor: number): number {
    return valor * valor
  }

  calcular(): number {
    return Math.sqrt(
      this.elevarCuadrado(this.x2 - this.x1) +
      this.elevarCuadrado(this.y2 - this.y1)
    )
  }
}


