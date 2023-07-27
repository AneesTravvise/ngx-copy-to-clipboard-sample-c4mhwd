import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxCopyToClipboardModule } from 'ngx-copy-to-clipboard';

@NgModule({
  imports: [BrowserModule, FormsModule, NgxCopyToClipboardModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
