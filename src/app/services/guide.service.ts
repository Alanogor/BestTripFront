import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guide } from '../models/guide';

@Injectable({
  providedIn: 'root'
})
export class GuideService {

  baseURL="http://localhost:8080/guide";

  constructor(private httpClient:HttpClient) { }

  public findAll():Observable<any>{
    return this.httpClient.get(this.baseURL);
  }

  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id);
  }

  /*public save(obj:Guide):Observable<any>{
    return this.httpClient.post(this.baseURL,obj);
  }*/

  public save(file:File,guide:Guide):Observable<any>{
		const formData = new FormData();
		formData.append('descriptionG', guide.descriptionGuide);
		formData.append('paysG', guide.paysGuide);
		formData.append('villeG', guide.villeGuide);
		formData.append('prix', guide.prixGuide.toString());
		formData.append('fileU', file);
		const req = new HttpRequest('POST', this.baseURL, formData,
		{reportProgress:true, responseType:'text'});
		return this.httpClient.request(req);
	}

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id);
  }

  public update(guide:any):Observable<any>{
    var guideParse=JSON.parse(guide); //communication avec serveur, convertion texte vers Json
    return this.httpClient.put(this.baseURL+"/"+guideParse.idGuide,guideParse);
  }

}
