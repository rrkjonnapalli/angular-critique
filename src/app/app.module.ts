import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavComponent } from './components/nav/nav.component';
import { FootComponent } from './components/foot/foot.component';
import { MainComponent } from './components/main/main.component';
import { EditorComponent } from './components/parts/editor/editor.component';
import { ViewerComponent } from './components/parts/viewer/viewer.component';
import { ListComponent } from './components/parts/list/list.component';
import { ListItemComponent } from './components/parts/list-item/list-item.component';
import { PageHeadComponent } from './components/parts/page-head/page-head.component';
import { PageComponent } from './components/parts/page/page.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NavComponent, FootComponent, MainComponent, EditorComponent, ViewerComponent, ListComponent, ListItemComponent, PageHeadComponent, PageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
