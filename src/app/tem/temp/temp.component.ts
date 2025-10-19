import { Component } from '@angular/core';
import { TemhComponent } from '../temh/temh.component';

@Component({
  selector: 'app-temp',
  standalone: true,
  imports: [TemhComponent],
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent {
  title: string = 'Hola desde padre';
  mensajeRecibido: string = '';

  recibirMensaje(event: string) {
    this.mensajeRecibido = event;
  }
}

