import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorize-page',
  templateUrl: './authorize-page.component.html',
  styleUrls: ['./authorize-page.component.scss']
})
export class AuthorizePageComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      rememberMe: new FormControl(true)
    })
  }

  onLogin() {
    const data = this.formGroup.value;
    delete data.confirmPassword;

    this.http.post<any>('api/Accounts/login', data).subscribe(data => {
      if (data) {
        this.router.navigate(['/appointment-records']);

      }
    })
  }

  onAuthPage() {
    this.router.navigate(['/']);
  }


}
