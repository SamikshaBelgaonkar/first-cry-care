import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BabyNamesComponent } from './components/baby-names/baby-names.component';
import { TipsComponent } from './components/tips/tips.component';
import { FoodComponent } from './components/food/food.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

// const routes: Routes = [];

const routes: Routes = [
  // {path:'',redirectTo:'', pathMatch:'full'},
  {path:'', component: HomeComponent},
  {path:'babynames', component:BabyNamesComponent },
  {path:'tips', component: TipsComponent},
  {path:'food', component: FoodComponent}, 
  {path:'about', component: AboutComponent}



  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
