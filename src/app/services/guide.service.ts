import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guide } from 'app/models/guide';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuideService {

  baseURL="http://localhost:8080/guide";

  constructor(private guide:Guide,private httpClient:HttpClient) { }

  public findAll():Observable<any>{
    return this.httpClient.get(this.baseURL);
  }

  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id);
  }

  public save(obj:Guide):Observable<any>{
    return this.httpClient.post(this.baseURL,obj);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id);
  }

  public update(id:number,obj:Guide){
    return this.httpClient.put(this.baseURL+"/"+id,obj);
  }

}
