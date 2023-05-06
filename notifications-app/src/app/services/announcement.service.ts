import { Injectable } from '@angular/core';
import { Announcement } from './../announcement';
import { Observable, of } from 'rxjs';
import {
  HttpClient,
  HttpHeaderResponse,
  HttpHeaders,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  private readonly baseUrl: string =
    'https://newsapi20221108120432.azurewebsites.net/api/Announcements';
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  serviceCall() {
    console.log('Service was called');
  }

  constructor(private httpClient: HttpClient) {}

  getAnnouncements(): Observable<Announcement[]> {
    return this.httpClient.get<Announcement[]>(this.baseUrl, this.httpOptions);
  }

  addAnnouncement(announcement: Announcement): Observable<Announcement> {
    return this.httpClient.post<Announcement>(
      this.baseUrl,
      announcement,
      this.httpOptions
    );
  }

  deleteAnnouncement(id: string): Observable<Announcement> {
    console.log("deleted " + id);
    return this.httpClient.delete<Announcement>(`${this.baseUrl}/${id}`, this.httpOptions);
  }
}
