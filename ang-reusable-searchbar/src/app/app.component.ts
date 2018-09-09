/////////// IMPORT DEPENDENCIES ///////////
import { Component, OnInit } from '@angular/core';


/////////// IMPORT COMPONENTS ///////////
import { Contact } from './models/contact-model';


/////////// COMPONENT DECORATORS ///////////
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



/////////// COMPONENT CLASS ///////////
export class AppComponent implements OnInit {

  contacts: Contact[];

  //// ON INIT ////
  ngOnInit() {
    this.contacts = [

    ]
  }

}
