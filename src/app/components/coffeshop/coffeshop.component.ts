import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-coffeshop',
  templateUrl: './coffeshop.component.html',
  styleUrls: ['./coffeshop.component.css']
})
export class CoffeshopComponent implements OnInit {
  datePlaceOrder: String = '';
  userProfileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    drink: new FormControl('', Validators.required),
    tempPreference: new FormControl('', Validators.required),
    sendText: new FormControl(false),
  });
  resultName: String = '';
  resultEmail: String = '';
  resultPhone: String = '';
  resultDrink: String = '';
  resultTempPreference: String = '';
  resultSendText: Boolean = false;

  constructor() { }

  ngOnInit(): void {}
  onSubmit(): void {


    Swal.fire({
      title: 'Are you sure to confirm item?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Confirmed', 'Your Order is successfully', 'success').then(
          () => {
            this.datePlaceOrder = new Date().toLocaleString();
            this.resultName = this.userProfileForm.value.name;
            this.resultEmail = this.userProfileForm.value.email;
            this.resultPhone = this.userProfileForm.value.phone;
            this.resultDrink = this.userProfileForm.value.drink;
            this.resultTempPreference =
              this.userProfileForm.value.tempPreference;
            this.resultSendText = this.userProfileForm.value.sendText;
          }
        );
      }
    });
  }


}
