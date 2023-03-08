import { PRECONNECT_CHECK_BLOCKLIST } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent {

    tituloComponente: string = 'crear'
    productoForm: FormGroup


    constructor(private fb: FormBuilder){
        this.productoForm = this.fb.group ({

            fabricante: ['', Validators.required],
            precio: ['', Validators.required],
            rutaImg: ['', Validators.required],
            asignadoA: ['', Validators.required],
            estado: ['', Validators.required],
            tock: ['', Validators.required],
            cedula: ['', Validators.required],

        })
    }

    enviarInformacion(){
        console.log(this.productoForm)

    }

}
