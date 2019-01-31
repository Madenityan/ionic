import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
    tab1 = 'HomePage';
    tab2 = 'AboutPage';
    tab3 = 'ContactPage';

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {}


}
