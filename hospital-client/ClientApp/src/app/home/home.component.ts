import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.http.getAllPatients().subscribe(v => console.log(v))
  }
}
