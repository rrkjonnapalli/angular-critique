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
import { PageHeadComponent } from './components/parts/page-head/page-head.component';
import { PageComponent } from './components/parts/page/page.component';
import { DashboardComponent } from './components/parts/dashboard/dashboard.component';
import { CategoriesComponent } from './components/parts/categories/categories.component';
import { PopularComponent } from './components/parts/popular/popular.component';
import { InfoCardDirective } from './directives/info-card/info-card.directive';
import { ListDirective } from './directives/list/list.directive';
import { ListItemDirective } from './directives/list-item/list-item.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NavComponent, FootComponent, MainComponent, EditorComponent, ViewerComponent, PageHeadComponent, PageComponent, DashboardComponent, CategoriesComponent, PopularComponent, InfoCardDirective, ListDirective, ListItemDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
