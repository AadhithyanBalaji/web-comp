import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement} from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './news/news.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  entryComponents: [NewsComponent]
  //bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
    const el = createCustomElement(NewsComponent,{injector});
    customElements.define('news-widget',el);
  }
  ngDoBootstrap() {}
}
