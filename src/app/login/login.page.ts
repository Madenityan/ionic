import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    username: string;
    password: string;
    constructor(private navCtrl: NavController, private router: Router) {}

    ngOnInit() {}

    Submit() {
        console.log('userName: ' + this.username);
        console.log('password: ' + this.password);
    }

    goRegister() {
        this.navCtrl.setDirection('back');
        this.router.navigateByUrl('register');
    }
}
