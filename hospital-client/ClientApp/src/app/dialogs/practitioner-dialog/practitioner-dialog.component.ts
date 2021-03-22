import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as moment from 'moment';
import { AcademicTitle } from '../../Interfaces/Interfaces';

@Component({
  templateUrl: './practitioner-dialog.component.html',
  styleUrls: ['./practitioner-dialog.component.scss']
})

export class PractitionerDialogComponent implements OnInit {
  public formGroup: FormGroup;
  public selectedAcademicTitle: AcademicTitle;


  constructor(public dialogRef: MatDialogRef<PractitionerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      id: new FormControl(this?.data?.practitioner?.id || null),
      firstname: new FormControl(this?.data?.practitioner?.firstname || null, [Validators.required]),
      lastname: new FormControl(this?.data?.practitioner?.lastname || null, [Validators.required]),
      sex: new FormControl(this?.data?.practitioner?.sex || null, [Validators.required]),
      birthday: new FormControl(this?.data?.practitioner?.birthday || null, [Validators.required]),
      academicTitleId: new FormControl(this?.data?.practitioner?.academicTitleId || null),
    })
    console.log(this.data)
    this.selectedAcademicTitle = this.data.academicTitles.find(academicTitle => this?.data?.practitioner?.academicTitleId === academicTitle.id);
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSave() {
    const valueToEmit = {
      birthday: moment(this.formGroup.get('birthday').value).toISOString(),
      ...this.formGroup.value,
    }
    console.log(valueToEmit);
    this.dialogRef.close(valueToEmit);
  }
}
