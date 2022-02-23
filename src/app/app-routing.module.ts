import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyFormComponent } from './components/my-form/my-form.component';
import { GreetComponent } from './components/greet/greet.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { FriendComponent } from './components/friend/friend.component';
import { CoffeshopComponent }  from './components/coffeshop/coffeshop.component';



const routes : Routes = [
  {path:'Form',component:MyFormComponent},
  {path:'Databinding',component:GreetComponent},
  {path:'Directive',component:DirectiveComponent},
  {path:'friend',component:FriendComponent},
  {path:'CoffeeShop',component:CoffeshopComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }


