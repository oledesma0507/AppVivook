import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recuperacioncontrasenia',
  templateUrl: './recuperacioncontrasenia.component.html',
  styleUrls: ['./recuperacioncontrasenia.component.sass']
})
export class RecuperacioncontraseniaComponent implements OnInit {
  @ViewChild('f', { static: true}) passRecoverForm: NgForm;
  submitted= false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.passRecoverForm.reset();
  }
}
