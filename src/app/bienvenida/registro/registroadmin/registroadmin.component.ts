import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registroadmin',
  templateUrl: './registroadmin.component.html',
  styleUrls: ['./registroadmin.component.sass']
})
export class RegistroadminComponent implements OnInit {
  @ViewChild('f', { static: true }) adminRegisterForm: NgForm;
  paises = ['México', 'Chile', 'Guatemala', 'Estados Unidos', 'Honduras', 'República Dominicana', 'Panamá', 'Paraguay', 'Perú', 'Colombia', 'Costa Rica', 'Ecuador', 'El Salvador'];
  defaultPais = 'México';

  constructor() { }

  ngOnInit() {
  }

}
