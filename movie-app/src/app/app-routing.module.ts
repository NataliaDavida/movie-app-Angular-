import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/components/cart/cart.component';
import { DetailsComponent } from './componentes/details/details.component';
import { HomeComponent } from './componentes/home/home.component';
import { AuthorizationGuard } from './guards/authorization.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search/:movie-search',
    component: HomeComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
  { 
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then((m) =>m.CartModule),
    canActivate: [AuthorizationGuard]
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
