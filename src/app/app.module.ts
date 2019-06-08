import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BindingComponent } from './binding';

// FormsModule contains NgModel, and is necessary for NgModel to work.

@NgModule({
  declarations: [BindingComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [BindingComponent]
})
export class AppModule {}
