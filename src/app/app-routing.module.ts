import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './components/display/display.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component'
import { GuardService } from './services/guard.service';
import { EnlargedComponent } from './components/enlarged/enlarged.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DeliveryComponent } from './components/delivery/delivery.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'display', component: DisplayComponent, canActivate: [GuardService]},
  { path: 'enlarged/:id', component: EnlargedComponent},
  { path: 'cart', component: CartComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'delivery', component: DeliveryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// canActivate: [GuardService]- display component