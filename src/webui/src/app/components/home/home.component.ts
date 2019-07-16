import {Component, OnInit, ViewChild} from '@angular/core';
import {FormService} from "../../services/form.service";
import {FormApplication} from "../../models/form-application";
import {FormControl, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formApplication:FormApplication=new FormApplication();

  constructor(
    private formApplicationService : FormService
  ) {
  }

  @ViewChild('appForm',{static : true}) appForm: NgForm

  formControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  ngOnInit() {
  }

  addFormApplication(obj){
    debugger;
    this.formApplicationService.addApplicationForm(obj).subscribe((res) =>{
      console.log(res);
      this.appForm.reset()
    },(err) => {
      console.log(err);
    });
  }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Zorunlu alan!' :
      this.formControl.hasError('email') ? 'Geçerli bir mail girin' : '';
  }

}
