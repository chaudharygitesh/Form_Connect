import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopapiService {

  constructor(private httpclient: HttpClient) { }
  getShopData(res:any){
  return this.httpclient.post<any>('https://localhost:7157/api/Registration',res)
  }
}
