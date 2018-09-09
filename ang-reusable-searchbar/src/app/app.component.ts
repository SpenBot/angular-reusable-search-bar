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
      {
        id: "001",
        first_name: "Luke",
        last_name: "Skywalker",
        company: "Buffalo Group",
        team: "Pink",
        role: "Software Developer"
      },
      {
        id: "002",
        first_name: "Han",
        last_name: "Solo",
        company: "Falcon Logic",
        team: "Blue",
        role: "Dev Ops"
      },
      {
        id: "003",
        first_name: "Leia",
        last_name: "Organa",
        company: "Buffalo Group",
        team: "Yellow",
        role: "Software Developer"
      },
      {
        id: "004",
        first_name: "Lando",
        last_name: "Calrissian",
        company: "Falcon Logic",
        team: "Red",
        role: "Scrum Master"
      },
      {
        id: "005",
        first_name: "Darth",
        last_name: "Vader",
        company: "Buffalo Group",
        team: "Pink",
        role: "Tester"
      },
      {
        id: "006",
        first_name: "Emperor",
        last_name: "Palpatine",
        company: "iSenpai",
        team: "Blue",
        role: "Dev Ops"
      },
      {
        id: "007",
        first_name: "Boba",
        last_name: "Fett",
        company: "Falcon Logic",
        team: "Yellow",
        role: "Tester"
      },
      {
        id: "008",
        first_name: "Obi-Wan",
        last_name: "Kenobi",
        company: "Buffalo Group",
        team: "Pink",
        role: "Software Developer"
      }
    ]
  }

}
