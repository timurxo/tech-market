import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PriceInfoComponent } from './price-info/price-info.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  {
    path: '', redirectTo: "home-page", pathMatch: "full"
  },
  {
    path: 'price', component: PriceInfoComponent
  },
  {
    path: 'home-page', component: HomePageComponent
  },
  {
    path: 'product-page', component: ProductPageComponent
  },
  {
    path: 'contact-page', component: ContactPageComponent
  },
  {
    path: 'footer', component: FooterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
