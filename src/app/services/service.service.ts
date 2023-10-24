import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrlforPost = 'http://localhost:5000/api/submitIssue'; 
  private apiUrlforGet = 'http://localhost:5000/api/getIssueList'; 
  private apiUrlforupdate = 'http://localhost:5000/api/updateIssueStatus'; 
  private apiUrlforgetUser = 'http://localhost:5000/api/getuser'; 
  private apiUrlforSendEmail = 'http://localhost:5000/api/SendEmail'; 


  constructor(private http: HttpClient) { }



  postData(data: any): Observable<any> {

    console.log("data",data)
    return this.http.post(this.apiUrlforPost, data);
  }


  getIssueData(): Observable<any> {
    return this.http.get(this.apiUrlforGet);
  }

  updateData(data:any):Observable<any>{
    console.log("data for update",data)
    return this.http.post(this.apiUrlforupdate, data);
  }

  getUserData(): Observable<any> {
    return this.http.get(this.apiUrlforgetUser);
  }


  sendEmaitoUser(user:any):Observable<any>{
    console.log("User Email",user)
    return this.http.post(this.apiUrlforSendEmail, user);
  }

}
