import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {FirstCryCare} from 'src/app/first-cry-care';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class FirstCryService {

  constructor(private http: HttpClient) { }

  
getAllnames():Observable<FirstCryCare[]>
{
  return this.http.get<FirstCryCare[]>('http://localhost:8080/api/names');
}
}
