import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppointmentType } from '../Interfaces/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class AppointmentTypeService {

  private baseURL = '/AppointmentTypes';
  public appointmentTypes$ = new BehaviorSubject<AppointmentType[]>(null);

  constructor(private http: HttpClient) { }

  public getAll(): Observable<AppointmentType[]> {
    return this.http.get<AppointmentType[]>(this.baseURL)
      .pipe(tap(appointmentTypes => this.appointmentTypes$.next(appointmentTypes)));
  }

  public create(appointmentType: AppointmentType): Observable<AppointmentType[]> {
    return this.http.post<AppointmentType[]>(this.baseURL + '/Create', appointmentType)
      .pipe(tap(appointmentTypes => this.appointmentTypes$.next(appointmentTypes)));
  }

  public update(appointmentType: AppointmentType): Observable<AppointmentType[]> {
    return this.http.post<AppointmentType[]>(this.baseURL + `/Edit/${appointmentType.id}`, appointmentType)
      .pipe(tap(appointmentTypes => this.appointmentTypes$.next(appointmentTypes)));
  }

  public deleteById(id: string): Observable<AppointmentType[]> {
    return this.http.get<AppointmentType[]>(this.baseURL + `/Delete/${id}`)
      .pipe(tap(appointmentTypes => this.appointmentTypes$.next(appointmentTypes)));
  }
}
