import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatNativeDateModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_layout/header/header.component';
import { FooterComponent } from './_layout/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { MatTableModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule, MatSelectModule} from '@angular/material';
import { MatDatepickerModule } from "@angular/material/datepicker";
// @ts-ignore
@NgModule({
  declarations: [ //kullandığımız componentleri burada belirtiyoruz. Component bir sayfa veya bölümleri olabilir.
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [ // import ettiğimiz modülleri tanımlıyoruz.
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    { provide : 'apiUrl', useValue : 'http://localhost:8080' } //kullanmak istediğimiz url yi tanımlıyoruz
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
