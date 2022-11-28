import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  
public cartItemList : any =[]
public moviesList = new BehaviorSubject<any>([]);

constructor() { }

getMovies(){
  return this.moviesList.asObservable();
}

setMovies(movie : any){
  this.cartItemList.push(...movie);
  this.moviesList.next(movie);
}

addtoCart(movie : any){
  this.cartItemList.push(movie);
  this.moviesList.next(this.cartItemList);
  localStorage.setItem("movie", JSON.stringify(this.cartItemList))
  console.log(this.cartItemList)
}

removeCartItem(movie: any){
  this.cartItemList.map((a:any, index:any)=>{
    if(movie.id=== a.id){
      this.cartItemList.splice(index,1);
    }
  })
  this.moviesList.next(this.cartItemList);
}

removeAllCart(){
  this.cartItemList = []
  localStorage.removeItem("movie")
  this.moviesList.next(this.cartItemList);
}
}
