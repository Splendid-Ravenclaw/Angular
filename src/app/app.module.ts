
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DefaultComponent } from './layouts/default/default.component';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { FooterComponent } from './modules/shared/components/footer/footer.component';
import { SidebarComponent } from './modules/shared/components/sidebar/sidebar.component';
import { MainComponent } from './modules/shared/components/main/main.component';
import { ChildComponent } from './modules/shared/components/header/main/child/child.component';
import { SecondComponent } from './modules/shared/components/header/main/second/second.component';









@NgModule({
  declarations: [
   AppComponent,
   DefaultComponent,
   HeaderComponent,
   FooterComponent,
   SidebarComponent,
   MainComponent,
   ChildComponent,
   SecondComponent
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
