import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public getAllPatients(): Observable<any> {
    const params = {
      firstname: "Max",
      lastname: "Mustermann",
      birthday: "2021-03-10T19:43:06.664Z",
      sex: "Female",
      insurance: true,
      avatar: 'nt'
    }
    // "Max", "Mustermann", "2021-03-10T19:43:06.664Z", Sex.Female, true
    return of({})
      .pipe(switchMap(createdPatient => {
        return this.http.get('/Patients')
      }
        ));
  }
}
