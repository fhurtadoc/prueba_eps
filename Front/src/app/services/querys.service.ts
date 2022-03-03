import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import{environment} from '../../environments/environment'
import {Doctor} from '../model/doctor'

@Injectable({
  providedIn: 'root'
})
export class QuerysService {
  private url=environment.siteUrl;
  
  constructor(private http: HttpClient ) { }

  public query_get_doctor(ruta:String){
    return this.http.get<any>(this.url + ruta);
  }

  public query_get_specialty(ruta:String){
    return this.http.get<any>(this.url + ruta);
  }
    
}



