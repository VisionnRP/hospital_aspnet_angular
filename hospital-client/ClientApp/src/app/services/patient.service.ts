import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Patient } from '../Interfaces/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURL = '/Patients';
  public patients$ = new BehaviorSubject<Patient[]>(null);

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.baseURL)
      .pipe(tap(patients => this.patients$.next(patients)));
  }

  public create(patient: Patient): Observable<Patient[]> {
    return this.http.post<Patient[]>(this.baseURL + '/Create', patient)
      .pipe(tap(patients => this.patients$.next(patients)));
  }

  public update(patient: Patient): Observable<Patient[]> {
    return this.http.post<Patient[]>(this.baseURL + `/Edit/${patient.id}`, patient)
      .pipe(tap(patients => this.patients$.next(patients)));
  }

  public deleteById(id: string): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.baseURL + `/Delete/${id}`)
      .pipe(tap(patients => this.patients$.next(patients)));
  }
}
