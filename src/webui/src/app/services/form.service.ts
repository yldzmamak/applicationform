import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class FormService {
  constructor(
    @Inject('apiUrl')
    private apiUrl,
    private http:HttpClient){
  }
  

  addApplicationForm(obj){
    return this.http.post(this.apiUrl + '/forminformations/',obj);
  }

  getAllApplicationForms(){
    return this.http.get(this.apiUrl + '/forminformations/');
  }
}
