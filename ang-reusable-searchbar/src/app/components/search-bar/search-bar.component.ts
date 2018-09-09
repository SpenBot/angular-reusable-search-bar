/////////// IMPORT DEPENDENCIES ///////////
import { Component, OnInit, Input } from '@angular/core';
// import { Router } from '@angular/router';


/////////// IMPORT COMPONENTS ///////////
import { Contact } from '../../models/contact-model';



/////////// COMPONENT DECORATORS ///////////
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})



/////////// COMPONENT CLASS ///////////
export class SearchBarComponent implements OnInit {

  //// COMPONENT PROPERTIES ////
  searchResults = [];
  searchTerm: String;
  selectedOption: String;
  view = 'condensed';
  showClearBtn = false;

  @Input() options: string[];
  @Input() contactsAll: Contact[];

  //// CONSTRUCTOR ////
  constructor() { }
  // constructor(public router: Router) { }

  //// ON INIT ////
  ngOnInit() {
    this.selectedOption = this.options[0]
  }

  //// ON SEARCH ////
  search(): void {

    this.setClearBtn();
    this.searchResults = []

    if (this.searchTerm === '') {
      return
    } else {
      this.searchByOption()
    }

  }

  //// SEARCH BY OPTION ////
  searchByOption (): void {

    // IF SEARCHING USERS //
    if (this.selectedOption === "Name") {
      this.contactsAll.forEach(ct => {
        let fN = ct.first_name.toLowerCase();
        let lN = ct.last_name.toLowerCase();
        let searchItem = this.searchTerm.toLowerCase();

        if ( fN.includes(`${searchItem}`) || lN.includes(`${searchItem}`) ) {
          this.searchResults.push(ct)
        }
      })
    }

  }

  //// CLICK RESULT ////
  // clickResult (id): void {
  //   this.router.navigate([`memberdetail/${id}`])
  // }

  //// SET CLEAR BUTTON ////
  setClearBtn (): void {
    if (this.searchTerm === '') {
      this.showClearBtn = false;
    }
    else {
      this.showClearBtn = true;
    }
  }

  //// CLEAR SEARCH ////
  clearSearch (): void {
    this.searchResults = []
    this.searchTerm = ''
    this.showClearBtn = false
  }

  //// TOGGLE VIEW ////
  toggleView (): void {
    this.view === 'condensed' ? this.view = 'expanded' : this.view = 'condensed'
  }

}



// search by options can be broken into functions
// html and css can be sub-components



// END /////////////////////////////////////
