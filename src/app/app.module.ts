import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { ImagespertagPieComponent } from './imagespertag-pie/imagespertag-pie.component';
import { AppRoutingModule } from './app-routing.module';
import { ImagespermonthLineComponent } from './imagespermonth-line/imagespermonth-line.component';
import { LikepertagBarComponent } from './likepertag-bar/likepertag-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagespertagPieComponent,
    ImagespermonthLineComponent,
    LikepertagBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
