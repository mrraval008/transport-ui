import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchLocationComponent } from './fetch-location/fetch-location.component';
import { ReciptGeneratorComponent } from './recipt-generator/recipt-generator/recipt-generator.component';
import { StoreLocationComponent } from './store-location/store-location.component';

const routes: Routes = [
  {
    path: "store-location",
    component: StoreLocationComponent,
    pathMatch: "full"
  },
  {
    path: "fetch-location",
    component: FetchLocationComponent,
    pathMatch: "full"
  },
  {
    path: "recipt-generator",
    component: ReciptGeneratorComponent,
    pathMatch: "full"
  },
  {
    path: "",
    redirectTo: "store-location",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
