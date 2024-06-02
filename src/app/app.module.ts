import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreLocationComponent } from './store-location/store-location.component';
import { FetchLocationComponent } from './fetch-location/fetch-location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipe/filter.pipe';
import { SafePipeModule } from 'safe-pipe';
import { ReciptGeneratorComponent } from './recipt-generator/recipt-generator/recipt-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreLocationComponent,
    FetchLocationComponent,
    FilterPipe,
    ReciptGeneratorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SafePipeModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
