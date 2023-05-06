import { Component } from '@angular/core';
import { AnnouncementService } from '../services/announcement.service';
import { Announcement } from './../announcement';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'notifications-app';
  filteredAnnouncements: Announcement[] = [];
  ngOnInit(): void {
    this.announcementService.serviceCall();
    this.announcementService
      .getAnnouncements()
      .subscribe((announcement) => (this.filteredAnnouncements = announcement));
  }

  filterAnnouncements(selectedCategory: string) {
    if (!selectedCategory) {
      this.announcementService
        .getAnnouncements()
        .subscribe(
          (announcement) => (this.filteredAnnouncements = announcement)
        );
      return;
    }
    this.announcementService
      .getAnnouncements()
      .subscribe(
        (announcement) =>
          (this.filteredAnnouncements = announcement.filter(
            (ann) => ann.categoryId === selectedCategory
          ))
      );
  }

  constructor(private announcementService: AnnouncementService) {}
}
