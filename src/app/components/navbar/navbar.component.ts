import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faCartShopping, faHouseUser, faRightFromBracket, faBagShopping, faBasketShopping } from '@fortawesome/free-solid-svg-icons'
// import { AuthService } from '../auth.service';
import { Product } from '../../product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  category: string = '';
  public totalItem: number= 0;

  @Output()
  searchCategory: EventEmitter<string> = new EventEmitter<string>()

  collapsed = true;
  faCartShopping=faCartShopping;
  faHouseUser= faHouseUser;
  faRightFromBracket= faRightFromBracket;
  faBagShopping= faBagShopping;
  faBasketShopping= faBasketShopping;
  siteName= "Shopperz";

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getProduct()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  onSearchCategory(){
    this.searchCategory.emit(this.category)
  }


}