import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss']
})
export class EditAddressComponent implements OnInit {
  editAddressFrom: FormGroup;
  constructor(public fb: FormBuilder) { 
    this.editAddressFrom = this.fb.group({
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      email: new FormControl(''),
      street_address: new FormControl(''),
      street_address2: new FormControl(''),
      pinCode: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
    })
  }

  ngOnInit() {
  }

  updateAddress(){
    let data = {
      first_name: this.editAddressFrom.controls.first_name.value,
      last_name: this.editAddressFrom.controls.last_name.value,
      email: this.editAddressFrom.controls.email.value,
      street_address: this.editAddressFrom.controls.street_address.value,
      street_address2: this.editAddressFrom.controls.street_address2.value,
      pinCode: this.editAddressFrom.controls.pinCode.value,
      city: this.editAddressFrom.controls.city.value,
      state: this.editAddressFrom.controls.state.value,
        
    }
    console.log(data)
  }

}
