import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { CorsComponent } from './cors/cors.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { StockPricesComponent } from './stock-prices/stock-prices.component';
import { StockTradeComponent } from './stock-trade/stock-trade.component';
import { ChartComponent } from './chart/chart.component';
import { CurrentStocksComponent } from './current-stocks/current-stocks.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { AccountBalanceComponent } from './account-balance/account-balance.component';
import { AppAlertComponent } from './app-alert/app-alert.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';

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
    CurrentStocksComponent,
    DatePickerComponent,
    AccountBalanceComponent,
    AppAlertComponent,
    MainPageComponent,
    HeaderComponent,
  ],

  imports: [
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'main', component: MainPageComponent },
      { path: '**', component: WelcomeScreenComponent },
    ]),
    NgbModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDialogModule,
  ],
  providers: [
    LoginFormComponent,
    CorsComponent,
    RegisterFormComponent,
    StockPricesComponent,
    StockTradeComponent,
    MatDatepickerModule,
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
