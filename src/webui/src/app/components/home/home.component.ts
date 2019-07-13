import {Component, OnInit} from '@angular/core';
import {FormService} from "../../services/form.service";
import {FormApplication} from "../../models/form-application";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //   form-application = {
  //   fullName: String,
  //   tcNo: String,
  //   address: String,
  //   telNo: String,
  //   eMail: String,
  //   birthday: String,
  //   question1: String,
  //   question2: String,
  //   question3: String,
  //   question4: String,
  //   question5: String
  // };

  formApplication:FormApplication=new FormApplication();


  constructor(
    private formApplicationService : FormService
  ) {
  }

  ngOnInit() {
  }

  addFormApplication(obj){
    debugger;
    this.formApplicationService.addApplicationForm(obj).subscribe((res) =>{
      console.log(res);
    },(err) => {
      console.log(err);
    });
  }

}
