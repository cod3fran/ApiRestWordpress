import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostComponent } from './post/post.component';
import {AppMaterialModule} from './app-material.module';
import {HttpClientModule} from '@angular/common/http';
import { CockpitListComponent } from './cockpit-list/cockpit-list.component';
import { CockpitArticleComponent } from './cockpit-article/cockpit-article.component';
import { DirectusListComponent } from './directus-list/directus-list.component';
import { DirectusArticleComponent } from './directus-article/directus-article.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostComponent,
    CockpitListComponent,
    CockpitArticleComponent,
    DirectusListComponent,
    DirectusArticleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    AppMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
