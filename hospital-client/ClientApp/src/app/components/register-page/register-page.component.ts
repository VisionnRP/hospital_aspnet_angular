import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AcademicTitleDialogComponent } from '../../dialogs/academic-title-dialog/academic-title-dialog.component';
import { PatientDialogComponent } from '../../dialogs/patient-dialog/patient-dialog.component';
import { AcademicTitle, Patient } from '../../Interfaces/Interfaces';
import { AcademicTitleService } from '../../services/academic-title.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      firstname: new FormControl(null, [Validators.required]),
      lastname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      confirmPassword: new FormControl(null, [Validators.required])
    })
  }

  onSubmit() {
    const data = this.formGroup.value;
    delete data.confirmPassword;

    this.http.post<any>('api/Accounts/registration', data).subscribe(data => {
      if (data) {
        this.router.navigate(['/appointment-records']);
      }
    })
  }

  onAuthPage() {
    this.router.navigate(['/authorize-page']);
  }

}
