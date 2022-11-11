import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faCartShopping, faHouseUser, faRightFromBracket, faBagShopping } from '@fortawesome/free-solid-svg-icons'
// import { AuthService } from '../auth.service';
import { ItemsService } from '../items.service';
import { Product } from '../product';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  category: string = '';

  @Output()
  searchCategory: EventEmitter<string> = new EventEmitter<string>()

  collapsed = true;
  faCartShopping=faCartShopping;
  faHouseUser= faHouseUser;
  faRightFromBracket= faRightFromBracket;
  faBagShopping= faBagShopping;
  siteName= "Shopperz";

  constructor(private itemService: ItemsService) { }

  ngOnInit() {
  }

  onSearchCategory(){
    this.searchCategory.emit(this.category)
  }


}