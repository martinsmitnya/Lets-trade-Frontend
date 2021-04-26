import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorsComponent } from './cors/cors.component';

@NgModule({
  declarations: [AppComponent, CorsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([{ path: 'cors', component: CorsComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
