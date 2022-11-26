import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './componentes/search-bar/search-bar.component';
import { HomeComponent } from './componentes/home/home.component';
import { DetailsComponent } from './componentes/details/details.component';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './shared/filter.pipe';
import { AuthModule } from './auth/auth.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
;



@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent,
    DetailsComponent,
    FilterPipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule ,
    AppRoutingModule,
    MatIconModule,
    RouterModule,
    AuthModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
