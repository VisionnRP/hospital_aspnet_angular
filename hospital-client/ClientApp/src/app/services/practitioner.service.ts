import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { combineAll, map, tap } from 'rxjs/operators';
import { Practitioner } from '../Interfaces/Interfaces';
import { AcademicTitleService } from './academic-title.service';


@Injectable({
  providedIn: 'root'
})
export class PractitionerService {

  private baseURL = '/Practitioners';
  public practitioners$ = new BehaviorSubject<Practitioner[]>(null);

  constructor(private http: HttpClient, private academicTitleService: AcademicTitleService) { }

  public getAll(): Observable<Practitioner[]> {
    return this.http.get<Practitioner[]>(this.baseURL)
      .pipe(tap(practitioners => this.practitioners$.next(practitioners)));
  }

  public create(practitioner: Practitioner): Observable<Practitioner[]> {
    return this.http.post<Practitioner[]>(this.baseURL + '/Create', practitioner)
      .pipe(tap(practitioners => this.practitioners$.next(practitioners)));
  }

  public update(practitioner: Practitioner): Observable<Practitioner[]> {
    return this.http.post<Practitioner[]>(this.baseURL + `/Edit/${practitioner.id}`, practitioner)
      .pipe(tap(practitioners => this.practitioners$.next(practitioners)));
  }

  public deleteById(id: string): Observable<Practitioner[]> {
    return this.http.get<Practitioner[]>(this.baseURL + `/Delete/${id}`)
      .pipe(tap(practitioners => this.practitioners$.next(practitioners)));
  }

  public mergeData() {
    return combineLatest([this.practitioners$, this.academicTitleService.academicTitles$])
      .pipe(map(([practitioners, academicTitles]) => {
        return practitioners?.map(practitioner => {
          return {
            ...practitioner,
            academicTitle: academicTitles.find(academicTitle => academicTitle?.id === practitioner.academicTitleId)
          }
        })
      }))
  }
}
