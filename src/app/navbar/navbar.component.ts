import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCartShopping, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons'
import { AuthService } from '../auth.service';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  collapsed = true;
  faCartShopping=faCartShopping;
  siteName= "Shopperz";

  constructor(private authservice: AuthService, private router: Router, private itemservice: ItemsService) {
    
   }

  ngOnInit() {

}
}