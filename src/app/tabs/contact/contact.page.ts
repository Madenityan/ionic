import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  items;
  filterItems: any = {title: '' };

  constructor() {
    this.items = [
      {
        'title': 'Lorem ipsum 11',
        'description': 'Lorem ipsum Lorem ipsum Lorem ipsum'
      },
      {
        'title': 'Lorem ipsum',
        'description': 'Lorem ipsum Lorem ipsum Lorem ipsum'
      },
      {
        'title': 'Lorem',
        'description': 'Lorem ipsum Lorem ipsum Lorem ipsum'
      },
      {
        'title': 'Lorem 555',
        'description': 'Lorem ipsum Lorem ipsum Lorem ipsum'
      },
      {
        'title': 'Lorem ipsum',
        'description': 'Lorem ipsum Lorem ipsum Lorem ipsum'
      },
      {
        'title': 'Lorem ipsum',
        'description': 'Lorem ipsum Lorem ipsum Lorem ipsum'
      },
      {
        'title': 'Lorem ipsum',
        'description': 'Lorem ipsum Lorem ipsum Lorem ipsum'
      },
      {
        'title': 'Lorem ipsum',
        'description': 'Lorem ipsum Lorem ipsum Lorem ipsum'
      }
    ];
  }

  ngOnInit() {}

}
