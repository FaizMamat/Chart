import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagespertagPieComponent } from './imagespertag-pie/imagespertag-pie.component';
import { LikepertagBarComponent } from './likepertag-bar/likepertag-bar.component';
import { ImagespermonthLineComponent } from './imagespermonth-line/imagespermonth-line.component';

const routes: Routes = [
  {path: 'imagespertag-pie', component: ImagespertagPieComponent},
  {path: 'likepertag-bar', component: LikepertagBarComponent},
  {path: 'imagespermonth-line', component: ImagespermonthLineComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
