import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { LandingPage } from '../landing/landing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  
  //Declarations
  username = '';
  password = '';
  alert = '';
  color = '';

  constructor(public navCtrl: NavController) {}

  //Validation
  checkLogin(){
    let un = this.username;
    let pw = this.password;
    if(un == 'admin' && pw == 'admin'){
      this.color = 'secondary'
      this.alert = 'Login';
      this.navCtrl.push(LandingPage);
    }else{
      this.color = 'danger';
      this.alert = 'Wrong Username or Password';
    }
  }

}
