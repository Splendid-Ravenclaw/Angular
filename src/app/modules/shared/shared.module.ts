import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { RowComponent } from './components/sidebar/row/row.component';
import { ChildComponent } from './components/header/main/child/child.component';
import { SecondComponent } from './components/header/main/second/second.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MainComponent,
    RowComponent,
    ChildComponent,
    SecondComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent

  ]
})
export class SharedModule { }
