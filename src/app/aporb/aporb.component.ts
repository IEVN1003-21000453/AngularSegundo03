import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms'
import { Multiplica } from './multiplica'

@Component({
  selector: 'app-aporb',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './aporb.component.html',
  styleUrls: ['./aporb.component.css']
})
export class AporbComponent implements OnInit {

  formulario!: FormGroup
  mult = new Multiplica()

  ngOnInit(): void {
    this.formulario = new FormGroup({
      a: new FormControl(''),
      b: new FormControl('')
    })
  }

  calcular(): void {
    this.mult.a = Number(this.formulario.value.a)
    this.mult.b = Number(this.formulario.value.b)
    this.mult.calcular()
  }
}


