import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from '../Auth/state.service';

@Injectable()
export class GoogleDriveService {
  private readonly apiUrl = 'https://www.googleapis.com/drive/v3';

  constructor(private http: HttpClient, private state: StateService) {}

  listFiles(): Observable<any> {
    const accessToken = this.state.accessToken$.value;
    console.log('accessToken');
    console.log(accessToken);

    // Add the authorization header to the request
    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`,
    });

    // Make an HTTP GET request to the Drive API's files.list endpoint
    return this.http.get(`${this.apiUrl}/files`, { headers });
  }

  uploadFile() {}
}
