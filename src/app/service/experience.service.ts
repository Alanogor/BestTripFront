import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experience } from 'app/models/experience';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  baseURL="http://localhost:8080/experience";

  constructor(private experience:Experience,private httpClient:HttpClient) { }

  public findAll():Observable<any>{
    return this.httpClient.get(this.baseURL);
  }

  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id);
  }

  public save(obj:Experience):Observable<any>{
    return this.httpClient.post(this.baseURL,obj);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id);
  }

  public update(id:number,obj:Experience){
    return this.httpClient.put(this.baseURL+"/"+id,obj);
  }

}
