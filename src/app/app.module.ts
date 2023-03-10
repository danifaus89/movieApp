// MODULS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PagesModule } from './pages/pages.module';

// COMPONENTS
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
