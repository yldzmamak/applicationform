import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class FormService {
  constructor(
    @Inject('apiUrl') //app.module de provider da tanımlanan apiUrl yi alıyoruz.
    private apiUrl,
    private http:HttpClient){
  }
  

  addApplicationForm(obj){
    return this.http.post(this.apiUrl + '/forminformations/',obj); //genel url ye istekte bulunacağımız yolu ekliyoruz
  }

  getAllApplicationForms(){
    return this.http.get(this.apiUrl + '/forminformations/');
  }
}
