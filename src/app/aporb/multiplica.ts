export class Multiplica {
  a = 0
  b = 0
  resultado = 0
  proceso = ''
  mostrar = false

  calcular(): void {
    this.resultado = 0
    this.proceso = ''
    this.mostrar = false

    if (this.a === 0 || this.b === 0) {
      this.proceso = 'Ingresa ambos valores'
      this.mostrar = true
      return
    }

    this.multiplicar()
  }

  multiplicar(): void {
    this.resultado = this.a * this.b
    this.proceso = ''
    this.suma(1)
    this.mostrar = true
  }

  suma(n: number): void {
    if (n <= this.b) {
      if (this.proceso === '') {
        this.proceso = this.a.toString()
      } else {
        this.proceso = this.proceso + ' + ' + this.a
      }
      this.suma(n + 1)
    } else {
      this.proceso = this.proceso + ' = ' + this.resultado
    }
  }
}

