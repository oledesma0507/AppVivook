import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registrocondomino',
  templateUrl: './registrocondomino.component.html',
  styleUrls: ['./registrocondomino.component.sass']
})
export class RegistrocondominoComponent implements OnInit {
  @ViewChild('f', { static: true}) condoUser: NgForm;
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.condoUser.reset();
  }
}
