import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BuyersComponentComponent } from './components/buyers-component/buyers-component.component';
import { ProductsComponentComponent } from './components/products-component/products-component.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BuyersService } from './services/buyers.service';

const appRoutes: Routes = [
  { path: '', component: ProductsComponentComponent },
  { path: 'buyers', component: BuyersComponentComponent },
  { path: 'buyers/:id', component: BuyersComponentComponent },
  { path: 'products', component: ProductsComponentComponent },
  { path: 'products/:id', component: ProductsComponentComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BuyersComponentComponent,
    ProductsComponentComponent,
    NavbarComponent 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
