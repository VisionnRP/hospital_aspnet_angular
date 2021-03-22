import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as moment from 'moment';
import { AcademicTitle } from '../../Interfaces/Interfaces';

@Component({
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.scss']
})

export class AppointmentDialogComponent implements OnInit {
  public formGroup: FormGroup;


  constructor(public dialogRef: MatDialogRef<AppointmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      id: new FormControl(this?.data?.appointment?.id || null),
      begin: new FormControl(this?.data?.appointment?.begin || null, [Validators.required]),
      end: new FormControl(this?.data?.appointment?.end || null, [Validators.required]),
      status: new FormControl(this?.data?.appointment?.status || null, [Validators.required]),
      appointmentTypeId: new FormControl(this?.data?.appointment?.appointmentTypeId || null, [Validators.required]),
      patientId: new FormControl(this?.data?.appointment?.patientId || null, [Validators.required]),
      practitionerId: new FormControl(this?.data?.appointment?.practitionerId || null, [Validators.required]),
    })
    console.log(this.data)
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSave() {
    const valueToEmit = {
      begin: moment(this.formGroup.get('begin').value).toISOString(),
      end: moment(this.formGroup.get('end').value).toISOString(),
      ...this.formGroup.value,
    }
    console.log(valueToEmit);
    this.dialogRef.close(valueToEmit);
  }
}
