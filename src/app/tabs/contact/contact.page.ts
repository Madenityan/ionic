import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  items;

  constructor() {
    this.items = [
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

  filteredItems() {

  }

}
