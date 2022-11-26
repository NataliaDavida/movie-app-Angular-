import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  
 items: string[] = [];

  constructor(
    private http: HttpClient
  ) {}

  addToCart(item: any) {
    
    this.items.push(item);
    localStorage.setItem("movie", JSON.stringify(this.items))
  }


  deleteFromCart(item: any) {
    for(let i = 0; i< this.items.length; i++) {
      localStorage.removeItem(item)
      if (this.items[i] == item )
      this.items.slice(i, 1)
     
       return this.items     
    }
    console.log(this.items)
  }

}
