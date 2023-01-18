import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardTitleComponent } from './components/card-title/card-title.component';
import { CardContentComponent } from './components/card-content/card-content.component';

@NgModule({
  declarations: [
    AppComponent,
    CardTitleComponent,
    CardContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
