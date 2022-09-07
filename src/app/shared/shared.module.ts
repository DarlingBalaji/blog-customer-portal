import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecentpostComponent } from './recentpost/recentpost.component';
import { CommentsComponent } from './comments/comments.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RecentpostComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RecentpostComponent,
    CommentsComponent
  ]
})
export class SharedModule { }
