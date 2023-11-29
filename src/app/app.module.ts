import { NgModule } from '@angular/core';
import { UsersModule} from './users/users.module';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ChildComponent } from './child/child.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { BlueElDirective } from './blue-el.directive';
import { FooterComponent } from './footer/footer.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';



@NgModule({
  declarations: [
AppComponent,
HeaderComponent,
ChildComponent,
UsdInrPipe,
BlueElDirective,
FooterComponent,
UserListComponent,
AdminListComponent,



  ],
  imports: [
    BrowserModule,
   MatSlideToggleModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    UsersModule
   
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
