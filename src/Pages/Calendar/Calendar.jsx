import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { formatDate } from "@fullcalendar/core";
import { Paper, Stack } from "@mui/material";
import { INITIAL_EVENTS, createEventId } from "./event-utils";
import Header from '../../Components/Header/Header';


const Calendar = () => {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);

  // Toggle weekends
  const handleWeekendsToggle = () => setWeekendsVisible(!weekendsVisible);

  // Select date to add event
  const handleDateSelect = (selectInfo) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  // Delete event
  const handleEventClick = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  };

  // Update current events
  const handleEvents = (events) => setCurrentEvents(events);

  // Custom event content
  const renderEventContent = (eventInfo) => (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );

  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
      {/* Sidebar */}


      {/* Calendar */}

      <div className="demo-app-main" style={{ flex: 1 }}>
        <Header title={"CALENDAR"} subTitle={"Managing the Team Members"} />

        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          initialEvents={INITIAL_EVENTS}
          select={handleDateSelect}
          eventContent={renderEventContent}
          eventClick={handleEventClick}
          eventsSet={handleEvents}
        />
      </div>
      <Paper>
        <div className="demo-app-sidebar" style={{ minWidth: 250 }}>


          <div className="demo-app-sidebar-section">
            <label>
              <input
                type="checkbox"
                checked={weekendsVisible}
                onChange={handleWeekendsToggle}
              />
              Toggle weekends
            </label>
          </div>
          <div className="demo-app-sidebar-section">
            <h2>All Events ({currentEvents.length})</h2>
            <ul>
              {currentEvents.map((event) => (
                <li key={event.id}>
                  <b>{formatDate(event.start, { year: "numeric", month: "short", day: "numeric" })}</b>
                  <i>{event.title}</i>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Paper>
    </Stack>

  );
};

export default Calendar;
