import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ServicesComponent } from './services/services.component';
import {PricingComponent} from './pricing/pricing.component';
import { GridComponent } from './grid/grid.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HomeComponent, JumbotronComponent, ServicesComponent, PricingComponent, GridComponent, GalleryComponent, FooterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
