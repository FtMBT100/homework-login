import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFormComponent } from './components/my-form/my-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { GreetComponent } from './components/greet/greet.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { FriendComponent } from './components/friend/friend.component';
import { CoffeshopComponent } from './components/coffeshop/coffeshop.component';

@NgModule({
 declarations: [AppComponent, MyFormComponent, GreetComponent, DirectiveComponent, FriendComponent, CoffeshopComponent],
 imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule {}
