import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as moment from 'moment';

@Component({
  templateUrl: './patient-dialog.component.html',
  styleUrls: ['./patient-dialog.component.scss']
})

export class PatientDialogComponent implements OnInit {
  public formGroup: FormGroup;


  constructor(public dialogRef: MatDialogRef<PatientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      id: new FormControl(this?.data?.patient?.id || null),
      firstname: new FormControl(this?.data?.patient?.firstname || null, [Validators.required]),
      lastname: new FormControl(this?.data?.patient?.lastname || null, [Validators.required]),
      sex: new FormControl(this?.data?.patient?.sex || null, [Validators.required]),
      birthday: new FormControl(this?.data?.patient?.birthday || null, [Validators.required]),
      insurance: new FormControl(this?.data?.patient?.insurance || null, [Validators.required])
    })
    console.log(this.formGroup.value);
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSave() {
    const valueToEmit = {
      insurance: this.formGroup.get('insurance').value === 1,
      birthday: moment(this.formGroup.get('birthday').value).toISOString(),
      ...this.formGroup.value,
    }
    this.dialogRef.close(valueToEmit)
  }
}
