import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomComponentsComponent } from './components/custom-components.component';

const routes: Routes = [
  {
    path: '',
    component: CustomComponentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomComponentsRoutingModule {}
