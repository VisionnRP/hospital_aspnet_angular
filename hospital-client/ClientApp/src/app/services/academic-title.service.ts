import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AcademicTitle } from '../Interfaces/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class AcademicTitleService {

  private baseURL = '/AcademicTitles';
  public academicTitles$ = new BehaviorSubject<AcademicTitle[]>(null);

  constructor(private http: HttpClient) { }

  public getAll(): Observable<AcademicTitle[]> {
    return this.http.get<AcademicTitle[]>(this.baseURL)
      .pipe(tap(titles => this.academicTitles$.next(titles)));
  }

  public create(academicTitle: AcademicTitle): Observable<AcademicTitle[]> {
    return this.http.post<AcademicTitle[]>(this.baseURL + '/Create', academicTitle)
      .pipe(tap(titles => this.academicTitles$.next(titles)));
  }

  public update(academicTitle: AcademicTitle): Observable<AcademicTitle[]> {
    return this.http.post<AcademicTitle[]>(this.baseURL + `/Edit/${academicTitle.id}`, academicTitle)
      .pipe(tap(titles => this.academicTitles$.next(titles)));
  }

  public deleteById(id: string): Observable<AcademicTitle[]> {
    return this.http.get<AcademicTitle[]>(this.baseURL + `/Delete/${id}`)
      .pipe(tap(titles => this.academicTitles$.next(titles)));
  }
}
