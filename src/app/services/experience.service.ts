import { HttpClient, HttpRequest } from '@angular/common/http';
import { compilePipeFromMetadata } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  baseURL="http://localhost:8080/experience";

  constructor(private httpClient:HttpClient) { }

  public findAll():Observable<any>{
    return this.httpClient.get(this.baseURL);
  }

  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id);
  }

  public save(file:File,obj:Experience):Observable<any>{
    const formData=new FormData;
    formData.append("TitreE",obj.titreExperience);
    formData.append("descriptionE",obj.descriptionExperience);
    formData.append("ratingE",obj.ratingExperience.toString());
    formData.append("typeE",obj.typeExperience);
    formData.append("prixE",obj.prixExperience.toString());
    formData.append("mediaU",file);
    const requete=new HttpRequest('POST',this.baseURL,formData,{reportProgress:true,responseType:'text'})
    return this.httpClient.request(requete);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id);
  }

  public update(experience:any):Observable<any>{
    var experienceParse=JSON.parse(experience); //communication avec serveur, convertion texte vers Json
    return this.httpClient.put(this.baseURL+"/"+experienceParse.idExperience,experienceParse);
  }

}
