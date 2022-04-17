import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage{

  carroForm: FormGroup;

  constructor(public router: Router, public navCtrl: NavController, public formBuilder: FormBuilder) {
    this.carroForm = this.formBuilder.group({
      marca: [null, Validators.required],
      modelo: [null, Validators.required],
      cor: [null, Validators.required],
      placa: [null, Validators.required]
    });
  }

  onSubmit() {
    //console.log('dentro da tela de cadastro: ');
    //console.log(this.formData.value);
    this.pushPage();
    //this.redirectToRegistrationConfirmationPage();
  }

  pushPage() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        marca: this.carroForm.get('marca').value,
        modelo: this.carroForm.get('modelo').value,
        cor: this.carroForm.get('cor').value,
        placa: this.carroForm.get('placa').value,
      }
    };
    this.navCtrl.navigateForward(
      ['registration-confirmation'],
      navigationExtras
    );
  }

  redirectToHomePage() {
    this.router.navigateByUrl('/home');
  }
}
