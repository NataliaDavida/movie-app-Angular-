import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartRoutingModule } from './cart-routing.module';


@NgModule({
  declarations: [
    CartComponent,
  ],

  exports: [
    CartComponent
  ],
  
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
