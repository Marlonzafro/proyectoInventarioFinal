import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-producto',
  templateUrl: './gestion-producto.component.html',
  styleUrls: ['./gestion-producto.component.scss']
})
export class GestionProductoComponent implements OnInit {

    tituloComponete: string = 'crear'

    constructor() { }

    ngOnInit(): void {
    }

}
