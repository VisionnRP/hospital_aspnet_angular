import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Appointment } from '../Interfaces/Interfaces';
import { AcademicTitleService } from './academic-title.service';
import { AppointmentTypeService } from './appointment-type.service';
import { PatientService } from './patient.service';
import { PractitionerService } from './practitioner.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseURL = '/Appointments';
  public appointments$ = new BehaviorSubject<Appointment[]>(null);

  constructor(
    private http: HttpClient,
    private practitionerService: PractitionerService,
    private patientService: PatientService,
    private appointmentTypeService: AppointmentTypeService,
    private academicTitleService: AcademicTitleService
  ) { }

  public getAll(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.baseURL)
      .pipe(tap(appointments => this.appointments$.next(appointments)));
  }

  public create(appointment: Appointment): Observable<Appointment[]> {
    return this.http.post<Appointment[]>(this.baseURL + '/Create', appointment)
      .pipe(tap(appointments => this.appointments$.next(appointments)));
  }

  public update(appointment: Appointment): Observable<Appointment[]> {
    return this.http.post<Appointment[]>(this.baseURL + `/Edit/${appointment.id}`, appointment)
      .pipe(tap(appointments => this.appointments$.next(appointments)));
  }

  public deleteById(id: string): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.baseURL + `/Delete/${id}`)
    .pipe(tap(appointments => this.appointments$.next(appointments)));
  }

  public mergeAppointmentData() {
    return combineLatest([
      this.appointments$,
      this.practitionerService.practitioners$,
      this.patientService.patients$,
      this.appointmentTypeService.appointmentTypes$,
      this.academicTitleService.academicTitles$,

    ]).pipe(map(([appointments, practitioners, patients, appointmentTypes, academicTitles]) => {
      return appointments?.map(appointment => {
        return {
          ...appointment,
          practitioner: {
            ...practitioners?.find(practitioner => practitioner?.id === appointment.practitionerId),
            academicTitle: academicTitles?.length ? academicTitles?.find(at => at.id === practitioners?.find(practitioner => practitioner?.id === appointment.practitionerId).id) : null
          },
          appointmentType: appointmentTypes?.find(at => at.id === appointment.appointmentTypeId),
          patient: patients?.find(p => p.id === appointment.patientId),

        }
      })
    }))
  }
}
