import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoaderDirective } from './directives/loader.directive';
import { DataTableComponent } from './components/data-table/data-table.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderDirective,
    DataTableComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
