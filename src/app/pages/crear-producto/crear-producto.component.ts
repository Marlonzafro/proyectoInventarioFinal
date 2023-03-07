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

            modelos: ['', Validators.required],
            fabricante: ['', Validators.required],
            precio: ['', Validators.required],
            rutaImg: ['', Validators.required],
            asignado_a: ['', Validators.required],
            estado: ['', Validators.required],
            //stok//
            numeroDocumento: ['', Validators.required],


        })
    }

    enviarInformacion(){
        console.log(this.productoForm)
    }

}
