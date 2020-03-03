import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  profileForm;
  openModal: boolean = false;
  formBuilder: FormGroup;
  profiles: Array<any> = [];
  currentUser: any = {};

  constructor(public http: HttpClient) {
    this.profileForm = new FormGroup({
      size: new FormControl('')
    });
  }

  getProfiles() {
    let url = `https://randomuser.me/api/?results=${this.profileForm.value.size}`;
    this.http.get(url).subscribe((data: any) => {
      this.profiles = data.results;
    });
  }

  toggleModal(profile) {
    this.openModal = true;
    this.currentUser = profile;
  }

}
