import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

import { CARRERAS } from '../../config/carreras';

/**
 * Generated class for the NuevatareaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-nuevatarea',
  templateUrl: 'nuevatarea.html',
})
export class NuevatareaPage {

  public dataItems:Array<any> = CARRERAS;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP) {
  }

  cargaData(){
    this.http.get('http://ionic.io', {}, {}).then(data => {
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
    }).catch(error => {
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
    });
  }

  onInput(event: any){
    console.log("HOLA");

    let val = event.target.value;
    if (val && val.trim() != '') {
      this.dataItems = CARRERAS.filter((item) => {
        return (item.titulo.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else{
      this.dataItems = CARRERAS;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevatareaPage');
  }

}
