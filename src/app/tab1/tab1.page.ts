import { ListPage } from './../list/list.page';
import { TipsService } from './../../services/tips.service';
import { Component, OnInit } from '@angular/core';
import { PublicacionService } from '../../services/publicacion.service';
import { NavController, IonSlide } from '@ionic/angular';
import { VirtualTimeScheduler } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})

export class Tab1Page implements OnInit {

  publicaciones: any;
  prefixURL: string = "https://todaviasirve.azurewebsites.net/Content/Images/";

  sabiasque

  constructor(
    public publicacion: PublicacionService,
    public tipsProvider: TipsService,
    public router: Router
  ) { 

  }


  ngOnInit() {
    console.log("Pagina Home")
  }


  ionViewDidEnter() {
    this.publicacion.obtenerTodasPublicaciones()
      .subscribe(
        (data) => {
          this.publicaciones = data;
        },
        (error) => {
          console.log(error);
        }
      )

    this.obtenerTip();
  }


  obtenerTip() {
    this.tipsProvider.obtenerTip()
      .subscribe((res) => {
        this.sabiasque = res["descripcion"];
      },
        (error) => {
          console.log("Error: " + error)
        })
  }


  irADetalle(publi) {
    /* this.navCtrl.push(DetallePage, { publi }); */
    this.router.navigate(['/list'])
  }

  





}
