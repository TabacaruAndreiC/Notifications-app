import { Component } from '@angular/core';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';
@Component({
  selector: 'app-add-announcement-form',
  templateUrl: './add-announcement-form.component.html',
  styleUrls: ['./add-announcement-form.component.scss'],
})
export class AddAnnouncementFormComponent {
  title: string = '';
  author: string = '';
  message: string = '';
  imageUrl: string = '';
  categorySelected: string = '';

  listOfCategories: Category[] = [
    { id: '1', name: 'Courses' },
    { id: '2', name: 'General' },
    { id: '3', name: 'Labs' },
  ];

  constructor(private announcementService: AnnouncementService) {}

  onSubmit() {
    const announcement: Announcement = {
      id: '0',
      title: this.title,
      author: this.author,
      message: this.message,
      categoryId: this.categorySelected,
      imageUrl: this.imageUrl,
    };
    console.log(announcement);
    this.announcementService.addAnnouncement(announcement).subscribe();
  }
}
