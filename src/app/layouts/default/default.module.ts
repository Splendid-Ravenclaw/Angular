import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/modules/shared/components/header/header.component';
import { SidebarComponent } from 'src/app/modules/shared/components/sidebar/sidebar.component';

import { FooterComponent } from 'src/app/modules/shared/components/footer/footer.component';
import { MainComponent } from 'src/app/modules/shared/components/main/main.component';





@NgModule({
  declarations: [
   
  HeaderComponent,
  SidebarComponent,
  FooterComponent,
  MainComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class DefaultModule { }
