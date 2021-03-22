import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { AcademicTitleDialogComponent } from '../../dialogs/academic-title-dialog/academic-title-dialog.component';
import { PatientDialogComponent } from '../../dialogs/patient-dialog/patient-dialog.component';
import { AcademicTitle, Patient } from '../../Interfaces/Interfaces';
import { AcademicTitleService } from '../../services/academic-title.service';

@Component({
  selector: 'app-patient-page',
  templateUrl: './academic-title-page.component.html',
  styleUrls: ['./academic-title-page.component.scss']
})
export class AcademicTitlePageComponent implements OnInit {
  public academicTitles$: Observable<AcademicTitle[]>;

  constructor(private academicTitleService: AcademicTitleService, private dialog: MatDialog) { }

  ngOnInit() {
    this.academicTitles$ = this.academicTitleService.academicTitles$;
    this.academicTitleService.getAll().subscribe();
  }

  onEdit(academicTitle: AcademicTitle) {
    const dialogRef = this.dialog.open(AcademicTitleDialogComponent, {
      width: '660px',
      height: '350px',
      data: { header: 'Update Academic Title', academicTitle }
    })

    dialogRef.afterClosed().subscribe(data => {
      console.log(data);
      if (data) {
        this.academicTitleService.update(data).subscribe();
      }
    })
  }

  onDelete(academicTitle: AcademicTitle) {
    this.academicTitleService.deleteById(academicTitle.id).subscribe();
  }

  onCreate() {
    const dialogRef = this.dialog.open(AcademicTitleDialogComponent, {
      width: '660px',
      height: '350px',
      data: { header: 'Create Academic Title' }
    })

    dialogRef.afterClosed().subscribe(data => {
      console.log(data);
      delete data?.id;

      if (data) {
        this.academicTitleService.create(data).subscribe();
      }
    })
  }
}
