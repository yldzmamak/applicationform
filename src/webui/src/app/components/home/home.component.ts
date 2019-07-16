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

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

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
      this.formControl.hasError('email') ? 'gerçerli mail girin' : '';
  }

}
