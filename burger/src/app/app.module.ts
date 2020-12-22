import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoverComponent } from './cover/cover.component';
import { PriceComponent } from './price/price.component';
import { PutburgertogetherComponent } from './putburgertogether/putburgertogether.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    PriceComponent,
    PutburgertogetherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
