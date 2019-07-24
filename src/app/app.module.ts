import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ExoComponent } from './exo/exo.component';
import { TweetComponent } from './tweet/tweet.component';
import { Html2brPipe } from './pipes/html2br.pipe';
import { KeepHtmlPipe } from './pipes/keep-html.pipe';
import { DemoBindingComponent } from './demo-binding/demo-binding.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ChucknorrisComponent } from './chucknorris/chucknorris.component';
import { InputTextDirective } from './directives/input-text.directive';
import { ToggleTextDirective } from './directives/toggle-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ExoComponent,
    TweetComponent,
    Html2brPipe,
    KeepHtmlPipe,
    DemoBindingComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ChucknorrisComponent,
    InputTextDirective,
    ToggleTextDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
