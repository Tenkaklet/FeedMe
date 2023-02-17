import { Component } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import { message } from '@tauri-apps/api/dialog';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  showModal = false;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [ dayGridPlugin, interactionPlugin, listPlugin, timeGridPlugin ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth, dayGridWeek, timeGridWeek, timeGridDay, listWeek',
    },
    select: this.handleSelect.bind(this),
    eventClick: this.handleClick.bind(this),
    selectable: true,
    editable: true,
    weekends: true,
    events: [
      { title: 'My event 2 ', date: '2023-02-17'}
    ],
  };

  async handleSelect(selectInfo: DateSelectArg) {
    console.log('select', selectInfo);
    this.showModal = true;
    const title = prompt('Name of Event');
    console.log(title);
    
    // await message('Notis from Feed Me', selectInfo.start.toDateString());
  }

  async handleClick(clickInfo: EventClickArg) {
    console.log('click info ', clickInfo);
    await message('Notis from Feed Me', {title:clickInfo.event.title});
  }
}
