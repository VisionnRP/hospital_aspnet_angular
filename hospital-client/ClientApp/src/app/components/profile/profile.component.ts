import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AcademicTitleDialogComponent } from '../../dialogs/academic-title-dialog/academic-title-dialog.component';
import { PatientDialogComponent } from '../../dialogs/patient-dialog/patient-dialog.component';
import { AcademicTitle, Patient } from '../../Interfaces/Interfaces';
import { AcademicTitleService } from '../../services/academic-title.service';

@Component({
  selector: 'app-profile',
  templateUrl: '.profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {


}
