import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCcVisa, faCcMastercard, faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { CartService } from '../../services/cart.service';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  faStar= faStar;
  faCcVisa= faCcVisa;
  faCcMastercard= faCcMastercard;
  faCcPaypal= faCcPaypal;
  
  public product: any = [];
  public totalPrice: number;
  public card:boolean = true;
  public mpesa:boolean = false;
  public shippingCost: number= 8;
  
  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
  });
  submitted = false;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cartService.getProduct()
    .subscribe(res=>{
      this.product = res;
    });
    this.totalPrice = this.cartService.getTotalPrice(this.product);

    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        phone: ['', Validators.required,  Validators.minLength(6),], 
        email: ['', [Validators.required, Validators.email]],
        address: ['', Validators.required],
        city: ['', Validators.required], 
      },
    );
   }
  
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
  }
    
  show() {
    this.card = !this.card;
  }

  hide(){
    this.mpesa = !this.mpesa;
  }
  

}