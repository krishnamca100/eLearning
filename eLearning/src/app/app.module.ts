import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HomepageModule } from './homepage/homepage.module';
import { AdminModule } from './admin/admin.module';
import { AccountSettingsModule } from './account-settings/account-settings.module';
import { CoursesModule } from './courses/courses.module';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { Header1Component } from './header1/header1.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Header2Component } from './header2/header2.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    Header1Component,
    PageNotFoundComponent,
    Header2Component,
  ],
  imports: [
    BrowserModule,
    HomepageModule,
    AdminModule,
    AccountSettingsModule,
    CoursesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
