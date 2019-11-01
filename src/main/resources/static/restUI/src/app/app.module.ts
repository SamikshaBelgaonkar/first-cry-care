import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";  
import { HttpClientModule, HttpClient } from '@angular/common/http';  
import {  
  MatButtonModule,
  MatMenuModule, 
  MatDatepickerModule,
  MatNativeDateModule ,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,  
  MatInputModule,
  MatTooltipModule,
  MatToolbarModule,
  MatTableModule,
} from '@angular/material';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BabyNamesComponent } from './components/baby-names/baby-names.component';
import { TipsComponent } from './components/tips/tips.component';
import { FoodComponent } from './components/food/food.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BabyNamesComponent,
    TipsComponent,
    FoodComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule , 
    MatIconModule, 
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,  
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    MatTableModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
