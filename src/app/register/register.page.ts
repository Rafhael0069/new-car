import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public formData: FormGroup;

  constructor(public router: Router, public navCtrl: NavController) {}

  ngOnInit() {
    this.formData = new FormGroup({
      marca: new FormControl(),
      modelo: new FormControl(),
      cor: new FormControl(),
      placa: new FormControl(),
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
        marca: this.formData.get('marca').value,
        modelo: this.formData.get('modelo').value,
        cor: this.formData.get('cor').value,
        placa: this.formData.get('placa').value,
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

  /*
pushPage() {

      if (this.formData.get('marca').value === '') {
        alert('Preencha o campo Marca!');
        return false;
      } else {
          if (this.formData.get('modelo').value === '') {
              alert('Preencha o campo Modelo!');
              return false;
          } else {
              if (this.formData.get('cor').value === '') {
                  alert('Preencha o campo Cor!');
                  return false;
              } else {
                  if (this.formData.get('placa').value === '') {
                      alert('Preencha o campo Placa!');
                      return false;
                  }else{

                    const navigationExtras: NavigationExtras = {
                      queryParams: {
                        marca: this.formData.get('marca').value,
                        modelo: this.formData.get('modelo').value,
                        cor: this.formData.get('cor').value,
                        placa: this.formData.get('placa').value
                      }
                    };
                  this.navCtrl.navigateForward(['registration-confirmation'], navigationExtras);
              }
          }
      }
    };
  }
  */
}
