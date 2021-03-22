import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as moment from 'moment';

@Component({
  templateUrl: './academic-title-dialog.component.html',
  styleUrls: ['./academic-title-dialog.component.scss']
})

export class AcademicTitleDialogComponent implements OnInit {
  public formGroup: FormGroup;


  constructor(public dialogRef: MatDialogRef<AcademicTitleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      id: new FormControl(this?.data?.academicTitle?.id || null),
      name: new FormControl(this?.data?.academicTitle?.name || null, [Validators.required]),
    })
    console.log(this.formGroup.value);
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSave() {
    this.dialogRef.close(this.formGroup.value);
  }
}
