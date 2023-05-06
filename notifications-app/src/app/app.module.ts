import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { AnnouncementService } from './services/announcement.service';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnnouncementComponent } from './announcement/announcement.component';
import { CategoriesComponent } from './categories/categories.component';
import { AuthorpipePipe } from './authorpipe.pipe';
import { AddAnnouncementFormComponent } from './add-announcement-form/add-announcement-form.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, AnnouncementComponent, CategoriesComponent, AuthorpipePipe, AddAnnouncementFormComponent, HomeComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatButtonModule, FormsModule, MatInputModule, MatSelectModule, AppRoutingModule, RouterModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
