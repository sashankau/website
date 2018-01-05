import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule, MatCardModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { ContentService } from './shared/services/content.service';
import { BackGroundDirective } from './shared/directives/back-ground.directive';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    BackGroundDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
