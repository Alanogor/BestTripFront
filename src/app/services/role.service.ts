import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private baseURL="http://localhost:8080/roles";
  constructor(private httpClient:HttpClient) { }
  
  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseURL);  
  }

  public save(role:Role):Observable<any>{
    return this.httpClient.post(this.baseURL,role);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id);
  }
}
