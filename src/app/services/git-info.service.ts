import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',

})
export class GitInfoService {

  constructor(private http: HttpClient) { }

  getCommitInfo(): Observable<any> {
    return this.http.get('src\assets\git-info.json');
  }
}
