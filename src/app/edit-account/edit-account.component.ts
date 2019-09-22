import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {
  editAccountFrom: FormGroup;
  showDiv:boolean;

  show()
  {
    this.showDiv=!this.showDiv;
  }

  constructor(public fb : FormBuilder) { 
    this.editAccountFrom = this.fb.group({
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      email: new FormControl(''),
      current_password: new FormControl(''),
      new_password: new FormControl(''),
      confirm_passoword: new FormControl(''),
      mobile_number: new FormControl(''),
    })
  }

  ngOnInit() {
   
  }

  accountUpdate(){
    // if(this.editAccountFrom.valid){
      
    // }
    let data = {
      first_name: this.editAccountFrom.controls.first_name.value,
      last_name: this.editAccountFrom.controls.last_name.value,
      email: this.editAccountFrom.controls.email.value,
      current_password: this.editAccountFrom.controls.current_password.value,
      new_password: this.editAccountFrom.controls.new_password.value,
      confirm_passoword: this.editAccountFrom.controls.confirm_passoword.value,
      mobile_number: this.editAccountFrom.controls.mobile_number.value
    }
    console.log(data)
     }
}
