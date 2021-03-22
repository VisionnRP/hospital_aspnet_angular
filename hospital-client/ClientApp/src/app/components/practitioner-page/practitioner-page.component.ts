import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PatientDialogComponent } from '../../dialogs/patient-dialog/patient-dialog.component';
import { PractitionerDialogComponent } from '../../dialogs/practitioner-dialog/practitioner-dialog.component';
import { Sex } from '../../Enums/enums';
import { AcademicTitle, Patient, Practitioner } from '../../Interfaces/Interfaces';
import { AcademicTitleService } from '../../services/academic-title.service';
import { PatientService } from '../../services/patient.service';
import { PractitionerService } from '../../services/practitioner.service';

@Component({
  selector: 'app-practitioner-page',
  templateUrl: './practitioner-page.component.html',
  styleUrls: ['./practitioner-page.component.scss']
})
export class PractitionerPageComponent implements OnInit {
  public sex = Sex;
  public practitioner$: Observable<Practitioner[]>;
  public academicTitle$: Observable<AcademicTitle[]>;

  public academicTitles: AcademicTitle[];

  constructor(private practitionerService: PractitionerService, private academicTitleService: AcademicTitleService, private dialog: MatDialog) { }

  ngOnInit() {
    this.academicTitleService.getAll().subscribe(academicTitles => {
      this.academicTitles = academicTitles;
    });
    this.practitionerService.getAll().subscribe();
    this.practitioner$ = this.practitionerService.mergeData();
  }

  onEdit(practitioner: Practitioner) {
    const dialogRef = this.dialog.open(PractitionerDialogComponent, {
      width: '660px',
      height: '600px',
      data: { header: 'Update practitioner', practitioner, academicTitles: this.academicTitles }
    })

    dialogRef.afterClosed().subscribe(data => {
      console.log(data);
      if (data) {
        this.practitionerService.update(data).subscribe();
      }
    })
  }

  onDelete(practitioner: Practitioner) {
    this.practitionerService.deleteById(practitioner.id).subscribe();
  }

  onCreate() {
    const dialogRef = this.dialog.open(PractitionerDialogComponent, {
      width: '660px',
      height: '600px',
      data: { header: 'Create Practitioner', academicTitles: this.academicTitles }
    })

    dialogRef.afterClosed().subscribe(data => {
      console.log(data);
      delete data?.id;

      if (data) {
        this.practitionerService.create(data).subscribe();
      }
    })
  }
}
