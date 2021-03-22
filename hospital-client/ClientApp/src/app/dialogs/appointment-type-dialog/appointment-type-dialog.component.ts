import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as moment from 'moment';

@Component({
  templateUrl: './appointment-type-dialog.component.html',
  styleUrls: ['./appointment-type-dialog.component.scss']
})

export class AppointmentTypeDialogComponent implements OnInit {
  public formGroup: FormGroup;


  constructor(public dialogRef: MatDialogRef<AppointmentTypeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      id: new FormControl(this?.data?.appointmentType?.id || null),
      name: new FormControl(this?.data?.appointmentType?.name || null, [Validators.required]),
      color: new FormControl(this?.data?.appointmentType?.color || null, [Validators.required]),
      duration: new FormControl(this?.data?.appointmentType?.duration || null, [Validators.required]),
    })
    console.log(this.formGroup.value);
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSave() {
    this.dialogRef.close(this.formGroup.value);
  }

  colorChange(color) {
    this.formGroup.get('color').setValue(color)
  }
}
