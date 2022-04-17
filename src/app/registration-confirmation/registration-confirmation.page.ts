import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-registration-confirmation',
  templateUrl: './registration-confirmation.page.html',
  styleUrls: ['./registration-confirmation.page.scss'],
})
export class RegistrationConfirmationPage implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute) {

    this.route.queryParams.subscribe(params => {
      const marca = params.marca;
      const modelo = params.modelo;
      const cor = params.cor;
      const placa = params.placa;

      this.setTextOnScreen(marca, modelo, cor, placa);
  });
  }

  setTextOnScreen(marca: any, modelo: any, cor: any, placa: any) {
    document.getElementById('text-view-marca').textContent = marca;
    document.getElementById('text-view-modelo').textContent = modelo;
    document.getElementById('text-view-cor').textContent = cor;
    document.getElementById('text-view-placa').textContent = placa;
  }

  ngOnInit() {
  }

  redirectToHomePage() {
    this.router.navigateByUrl('/home');
  }
  redirectToRegistrationCompletedPage() {
    this.router.navigateByUrl('/registration-completed');
  }
}
