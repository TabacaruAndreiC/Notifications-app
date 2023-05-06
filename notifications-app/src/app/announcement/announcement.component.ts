import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Announcement } from '../announcement';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-announcement', //tag name
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss'],
})
export class AnnouncementComponent {
  @Input()
  announcement: Announcement;
  constructor(private announcementService: AnnouncementService) {}
  onDelete(id: string) {
    this.announcementService.deleteAnnouncement(id).subscribe();
  }
}
