import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorsComponent } from './cors/cors.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StockPricesComponent } from './stock-prices/stock-prices.component';
import { StockTradeComponent } from './stock-trade/stock-trade.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    CorsComponent,
    LoginFormComponent,
    WelcomeScreenComponent,
    RegisterFormComponent,
    StockPricesComponent,
    StockTradeComponent,
    ChartComponent,
  ],
  imports: [
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'cors', component: CorsComponent },
      { path: '', component: WelcomeScreenComponent },
      { path: 'stock', component: StockPricesComponent },
      { path: 'chart', component: ChartComponent },
    ]),
    NgbModule,
  ],
  providers: [
    LoginFormComponent,
    CorsComponent,
    RegisterFormComponent,
    StockPricesComponent,
    StockTradeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
