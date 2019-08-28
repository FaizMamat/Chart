import { NgModule } from '@angular/core';
import { ImagespertagPieComponent } from './imagespertag-pie/imagespertag-pie.component';
import { Routes, RouterModule } from '@angular/router';
import { ImagespermonthLineComponent } from './imagespermonth-line/imagespermonth-line.component';
import { LikepertagBarComponent } from './likepertag-bar/likepertag-bar.component';

const routes: Routes = [
  {path: 'ImagespertagPieComponent ', component: ImagespertagPieComponent},
  {path: 'ImagespermonthLineComponent', component: ImagespermonthLineComponent},
  {path: 'LikepertagBarComponent', component: LikepertagBarComponent}
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
