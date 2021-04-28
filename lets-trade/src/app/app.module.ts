import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorsComponent } from './cors/cors.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { MaterialModule } from './date-picker/material-module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StockPricesComponent } from './stock-prices/stock-prices.component';
import { StockTradeComponent } from './stock-trade/stock-trade.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    CorsComponent,
    LoginFormComponent,
    WelcomeScreenComponent,
    RegisterFormComponent,
    StockPricesComponent,
    StockTradeComponent,
    DatePickerComponent,
  ],
  imports: [
    FormsModule,
    MatRadioModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'cors', component: CorsComponent },
      { path: '', component: WelcomeScreenComponent },
      { path: 'stock', component: StockPricesComponent },
      { path: 'date', component: DatePickerComponent },
    ]),
    NgbModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MaterialModule,
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
