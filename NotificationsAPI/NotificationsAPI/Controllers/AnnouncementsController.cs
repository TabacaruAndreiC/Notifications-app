using Microsoft.AspNetCore.Mvc;
using NotificationsAPI.Models;

namespace NotificationsAPI.Controllers
{
	[Route("[controller]")]
	[ApiController]
	public class AnnouncementsController : ControllerBase
	{
		static List<Announcement> _announcements = new List<Announcement> { new Announcement { Id = Guid.NewGuid(), CategoryId = "1", Title = "First Announcement", Description = "First Announcement Description" , Author = "Author_1"},
		new Announcement { Id = Guid.NewGuid(), CategoryId = "1", Title = "Second Announcement", Description = "Second Announcement Description", Author = "Author_1" },
		new Announcement { Id = Guid.NewGuid(), CategoryId = "1", Title = "Third Announcement", Description = "Third Announcement Description", Author = "Author_2"  },
		new Announcement { Id = Guid.NewGuid(), CategoryId = "1", Title = "Fourth Announcement", Description = "Fourth Announcement Description", Author = "Author_3"  },
		new Announcement { Id = Guid.NewGuid(), CategoryId = "1", Title = "Fifth Announcement", Description = "Fifth Announcement Description", Author = "Author_4"  }
		};
		
		/// <summary>
		/// Gets all the announcements from the repository
		/// </summary>
		/// <returns></returns>
		[HttpGet]
		public IActionResult GetAnnouncements()
		{
			return Ok(_announcements);
		}

		[HttpPost]
		public IActionResult CreateAnnouncement([FromBody] Announcement? announcement)
		{
			if (announcement == null)
			{
				return BadRequest("Announcement cannot be null");
			}
			_announcements.Add(announcement);
			return Ok(_announcements);
		}

		[HttpPut]
		public IActionResult UpdateAnnouncement([FromBody] Announcement? announcement)
		{
			if (announcement == null)
			{
				return BadRequest("Announcement cannot be null");
			}

			var announcementInApp = _announcements.FirstOrDefault(a => a.Id.Equals(announcement.Id));
			if (announcementInApp == null)
			{
				_announcements.Add(announcement);
			}
			else
			{
				_announcements[_announcements.IndexOf(announcementInApp)] = announcement;
			}
			return Ok(announcement);
		}

		[HttpDelete]
		public IActionResult DeleteAnnouncement([FromBody] Guid id)
		{
			var announcement = _announcements.Find(a => a.Id.Equals(id));

			if(announcement == null)
			{
				return NotFound(id);
			}
			else
			{
				_announcements.Remove(announcement);
				return Ok(announcement);
			}
		}
	}
}
