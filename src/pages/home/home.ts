import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

import { NuevatareaPage } from '../nuevatarea/nuevatarea';
import { RegistroPage } from '../registro/registro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  correo:any = "";

  constructor(public navCtrl: NavController, public http: HTTP, public toastCtrl: ToastController) {}

  registro(){
    this.navCtrl.push(RegistroPage);
  }

  auth(){


    this.http.get('http://ipmapi.jpena.ga/index.php/auth/'+this.correo, {}, {}).then(data => {
      console.log(data.status);
      console.log(JSON.parse(data.data)); // data received by server
      console.log(data.headers);

      let usuario = JSON.parse(data.data);
      if(!usuario.error){
        this.navCtrl.push(NuevatareaPage);
      }else{
        let toast = this.toastCtrl.create({
          message: usuario.msg,
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }

    }).catch(error => {
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
    });

	}

}
