import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { MatSliderModule} from '@angular/material/slider';
import {MatCardModule } from '@angular/material/card'; 
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import {MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { SoaronComponent } from './soaron/soaron.component';
import { LoginSoaronComponent } from './login-soaron/login-soaron.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { WorklogComponent } from './worklog/worklog.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';
import { TimeSheetComponent } from './time-sheet/time-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    SoaronComponent,
    LoginSoaronComponent,
    ForgotPasswordComponent,
    WorklogComponent,
    TimeSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatIconModule,
    MatSliderModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatSlideToggleModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
