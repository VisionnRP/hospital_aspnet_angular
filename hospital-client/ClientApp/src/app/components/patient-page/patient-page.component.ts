import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { PatientDialogComponent } from '../../dialogs/patient-dialog/patient-dialog.component';
import { Sex } from '../../Enums/enums';
import { Patient } from '../../Interfaces/Interfaces';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.scss']
})
export class PatientPageComponent implements OnInit {
  public sex = Sex;
  public patients$: Observable<Patient[]>;

  constructor(private patientService: PatientService, private dialog: MatDialog) { }

  ngOnInit() {
    this.patients$ = this.patientService.patients$;
    this.patientService.getAll().subscribe();
  }

  onEdit(patient: Patient) {
    const dialogRef = this.dialog.open(PatientDialogComponent, {
      width: '660px',
      height: '600px',
      data: { header: 'Update patient', patient }
    })

    dialogRef.afterClosed().subscribe(data => {
      console.log(data);
      if (data) {
        this.patientService.update(data).subscribe();
      }
    })
  }

  onDelete(patient: Patient) {
    this.patientService.deleteById(patient.id).subscribe();
  }

  onCreate() {
    const dialogRef = this.dialog.open(PatientDialogComponent, {
      width: '660px',
      height: '600px',
      data: { header: 'Create patient' }
    })

    dialogRef.afterClosed().subscribe(data => {
      console.log(data);
      delete data?.id;

      if (data) {
        this.patientService.create(data).subscribe();
      }
    })
  }
}
