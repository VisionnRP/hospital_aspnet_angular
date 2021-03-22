import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppointmentDialogComponent } from '../../dialogs/appointment-dialog/appointment-dialog.component';
import { PatientDialogComponent } from '../../dialogs/patient-dialog/patient-dialog.component';
import { PractitionerDialogComponent } from '../../dialogs/practitioner-dialog/practitioner-dialog.component';
import { Sex } from '../../Enums/enums';
import { AcademicTitle, Appointment, AppointmentType, Patient, Practitioner } from '../../Interfaces/Interfaces';
import { AcademicTitleService } from '../../services/academic-title.service';
import { AppointmentTypeService } from '../../services/appointment-type.service';
import { AppointmentService } from '../../services/appointment.service';
import { PatientService } from '../../services/patient.service';
import { PractitionerService } from '../../services/practitioner.service';

@Component({
  selector: 'app-appointment-page',
  templateUrl: './appointment-page.component.html',
  styleUrls: ['./appointment-page.component.scss']
})
export class AppointmentPageComponent implements OnInit {

  public patients: Patient[];
  public academicTitles: AcademicTitle[];
  public practitioners: Practitioner[];
  public appointmentTypes: AppointmentType[];

  public appointments$: Observable<Appointment[]>;
   

  constructor(
    private practitionerService: PractitionerService,
    private academicTitleService: AcademicTitleService,
    private patientService: PatientService,
    private appointmentTypeService: AppointmentTypeService,
    private appointmentService: AppointmentService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.academicTitleService.getAll().subscribe(academicTitles => {
      this.academicTitles = academicTitles;
    });

    this.patientService.getAll().subscribe(patients => {
      this.patients = patients;
    });

    this.appointmentTypeService.getAll().subscribe(appointmentTypes => {
      this.appointmentTypes = appointmentTypes;
    });

    this.practitionerService.getAll().subscribe(practitioners => {
      this.practitioners = practitioners;
    });


    this.appointmentService.getAll().subscribe();
    this.appointments$ = this.appointmentService.mergeAppointmentData();
  }

  onEdit(appointment: Appointment) {
    const dialogRef = this.dialog.open(AppointmentDialogComponent, {
      width: '660px',
      height: '600px',
      data: {
        header: 'Update Appointment',
        appointment,
        patients: this.patients,
        practitioners: this.practitioners,
        appointmentTypes: this.appointmentTypes
      }
    })

    dialogRef.afterClosed().subscribe(data => {
      console.log(data);
      if (data) {
        this.appointmentService.update(data).subscribe();
      }
    })
  }

  onDelete(appointment: Appointment) {
    this.appointmentService.deleteById(appointment.id).subscribe();
  }

  onCreate() {
    const dialogRef = this.dialog.open(AppointmentDialogComponent, {
      width: '660px',
      height: '600px',
      data: {
        header: 'Create Appointment',
        patients: this.patients,
        practitioners: this.practitioners,
        appointmentTypes: this.appointmentTypes
      }
    })

    dialogRef.afterClosed().subscribe(data => {
      console.log(data);
      delete data?.id;

      if (data) {
        this.appointmentService.create(data).subscribe();
      }
    })
  }
}
