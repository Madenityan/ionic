import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string;
  password: string;
  phone: number;

  constructor(private navCtrl: NavController, private router: Router) { }

    ngOnInit() {}

    registerNow() {
      console.log('name: ' + this.username);
      console.log('password: ' + this.password);
      console.log('phone: ' + this.phone);
        this.navCtrl.setDirection('back');
        this.router.navigateByUrl('tabs/home');
    }
}
