import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoadingModule } from '@stackline/angular-loading';
import { AppComponent } from './app.component';
import { PlaygroundComponent } from './playground.component';

@NgModule({
  declarations: [AppComponent, PlaygroundComponent],
  imports: [
    BrowserModule,
    FormsModule,
    LoadingModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
