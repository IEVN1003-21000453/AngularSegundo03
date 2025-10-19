import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Distancia } from './distancia';

@Component({
  selector: 'app-distancia',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css']
})
export class DistanciaComponent {

  formulario: FormGroup = new FormGroup({
    x1: new FormControl(''),
    y1: new FormControl(''),
    x2: new FormControl(''),
    y2: new FormControl('')
  });

  resultado = 0;
  mostrarResultado = false;
  distancia = new Distancia();

  calcular(): void {
    this.distancia.asignarX1(this.formulario.value.x1);
    this.distancia.asignarY1(this.formulario.value.y1);
    this.distancia.asignarX2(this.formulario.value.x2);
    this.distancia.asignarY2(this.formulario.value.y2);

    this.resultado = this.distancia.calcular();
    this.mostrarResultado = true;
  }
}
