import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 
  public movies : any = []

  constructor(private cartService : CartService) { }
  
  ngOnInit(): void {
    this.cartService.getMovies()
    .subscribe(res=>{this.movies = res;})
  }

  removeItem(movie: any){
    this.cartService.removeCartItem(movie);
  }
  
  emptycart(){
    this.cartService.removeAllCart();
    
  }

}
