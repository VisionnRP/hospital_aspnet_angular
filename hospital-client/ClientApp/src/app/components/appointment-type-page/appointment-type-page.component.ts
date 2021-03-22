import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppointmentTypeDialogComponent } from '../../dialogs/appointment-type-dialog/appointment-type-dialog.component';
import { PatientDialogComponent } from '../../dialogs/patient-dialog/patient-dialog.component';
import { PractitionerDialogComponent } from '../../dialogs/practitioner-dialog/practitioner-dialog.component';
import { Sex } from '../../Enums/enums';
import { AcademicTitle, AppointmentType, Patient, Practitioner } from '../../Interfaces/Interfaces';
import { AcademicTitleService } from '../../services/academic-title.service';
import { AppointmentTypeService } from '../../services/appointment-type.service';
import { PatientService } from '../../services/patient.service';
import { PractitionerService } from '../../services/practitioner.service';

@Component({
  selector: 'app-appointment-type-page',
  templateUrl: './appointment-type-page.component.html',
  styleUrls: ['./appointment-type-page.component.scss']
})
export class AppointmentTypePageComponent implements OnInit {

  public appointmentType$: Observable<AppointmentType[]>;

  constructor(private appointmentTypeService: AppointmentTypeService, private dialog: MatDialog) { }

  ngOnInit() {
    this.appointmentTypeService.getAll().subscribe();
    this.appointmentType$ = this.appointmentTypeService.appointmentTypes$;
  }

  onEdit(appointmentType: AppointmentType) {
    const dialogRef = this.dialog.open(AppointmentTypeDialogComponent, {
      width: '660px',
      height: '600px',
      data: { header: 'Update Appointment Type', appointmentType }
    })

    dialogRef.afterClosed().subscribe(data => {
      console.log(data);
      if (data) {
        this.appointmentTypeService.update(data).subscribe();
      }
    })
  }

  onDelete(appointmentType: AppointmentType) {
    this.appointmentTypeService.deleteById(appointmentType.id).subscribe();
  }

  onCreate() {
    const dialogRef = this.dialog.open(AppointmentTypeDialogComponent, {
      width: '660px',
      height: '600px',
      data: { header: 'Create Appointment Type' }
    })

    dialogRef.afterClosed().subscribe(data => {
      console.log(data);
      delete data?.id;

      if (data) {
        this.appointmentTypeService.create(data).subscribe();
      }
    })
  }
}
