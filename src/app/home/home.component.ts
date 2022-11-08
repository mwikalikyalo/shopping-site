import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faCartShopping = faCartShopping;

  constructor(private authService: AuthService, private httpClient: HttpClient) { }

  ngOnInit() {
    // login(){
    //   this.authService.login()
    // }
  }

}


