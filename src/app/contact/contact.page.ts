import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
declare var google;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  address: string;

  latitude: number;
  longitude: number;
  mapHeight = "400px";
  constructor(private popoverController: PopoverController,
              private router: Router) { }
  
  ngOnInit() {
    this.loadMap();
  }


  loadMap() {

      this.latitude =6.453060;
      this.longitude = 3.390030;

      this.map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: this.latitude, lng: this.longitude },
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
        // styles: this.mStyle,
      
      });

      const marker = new google.maps.Marker({
        position: {
          lat: 6.453060,
          lng: 3.390030
        },
        // animation: google.maps.Animation.DROP,
        icon: 'assets/icon/location-image.png',
        map: this.map
      })
  }

  
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  showCategories(x: any) {
    this.presentPopover(x);
  }

  login() {
    this.router.navigateByUrl("login");
  }
}
