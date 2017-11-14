import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

/**
 * Generated class for the RegistroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  registro:any = {
    nombre: '',
    apellidos: '',
    correo: '',
    escuela: ''
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HTTP) {
  }

  registrar(){
    console.log(this.registro);

    this.http.post('http://ipmapi.jpena.ga/index.php/registro',this.registro,{}).then(data => {
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);

      this.navCtrl.popToRoot();
    }).catch(error => {
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

}
