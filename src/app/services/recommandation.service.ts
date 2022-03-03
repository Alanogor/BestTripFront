import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recommandation } from '../models/recommandation';

@Injectable({
  providedIn: 'root'
})
export class RecommandationService {

  baseURL="http://localhost:8080/recommandations";

  constructor(private httpClient:HttpClient) { }

  public findAll():Observable<any>{
    return this.httpClient.get(this.baseURL);
  }

  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id);
  }

  public save(obj:Recommandation):Observable<any>{
    return this.httpClient.post(this.baseURL,obj);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id);
  }

  public update(id:number,obj:Recommandation){
    return this.httpClient.put(this.baseURL+"/"+id,obj);
  }
}
