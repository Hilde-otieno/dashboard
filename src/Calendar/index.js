import React, {useState, useEffect} from 'react'
import './index.css'
import icon from '../Images/icon.png';


const Calendar = ()=>{

    const [nav] = useState(0);
    const [clicked, setClicked] = useState(null);
    const [events, setEvents] = useState([]);
    const [newEventModalVisible, setNewEventModalVisible] = useState(false);
    const [deleteEventModalVisible, setDeleteEventModalVisible] = useState(false);
    const [backDropVisible, setBackDropVisible] = useState(false);
    const [eventTitle, setEventTitle] = useState('');
    
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
    useEffect(() => {
      const storedEvents = localStorage.getItem('events');
      if (storedEvents) {
        setEvents(JSON.parse(storedEvents));
      }
    }, []);
  
    const openModal = (date) => {
      setClicked(date);
      const eventForDay = events.find(e => e.date === date);
      if (eventForDay) {
        setDeleteEventModalVisible(true);
      } else {
        setNewEventModalVisible(true);
      }
      setBackDropVisible(true);
    };
  
    const displayCalendar = () => {
      const dat = new Date();
      if (nav !== 0) {
        dat.setMonth(new Date().getMonth() + nav);
      }
      const day = dat.getDate();
      const month = dat.getMonth();
      const year = dat.getFullYear();
      const firstDayOfMonth = new Date(year, month, 1);
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      });
      const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
      
      const days = [];
  
      for (let i = 1; i <= paddingDays + daysInMonth; i++) {
        const dayString = `${month + 1}/${i - paddingDays}/${year}`;
        const isCurrentDay = (i - paddingDays === day && nav === 0);
        const eventForDay = events.find(e => e.date === dayString);
  
        days.push(
          <div
            key={i}
            className={`day ${i > paddingDays ? '' : 'padding'} ${isCurrentDay ? 'current-day' : ''}`}
            onClick={() => i > paddingDays && openModal(dayString)}
          >
            {i > paddingDays ? (
              <>
                <div className="day-number">{i - paddingDays}</div>
                {eventForDay && <div className="event">{eventForDay.title}</div>}
              </>
            ) : null}
          </div>
        );
      }
  
      return days;
    };
  
    const closeModal = () => {
      setEventTitle('');
      setNewEventModalVisible(false);
      setDeleteEventModalVisible(false);
      setBackDropVisible(false); 
      setClicked(null);
    };
  
    const saveEvent = () => {
      if (eventTitle) {
        const updatedEvents = [...events, { date: clicked, title: eventTitle }];
        setEvents(updatedEvents);
        localStorage.setItem('events', JSON.stringify(updatedEvents));
        closeModal();
      } else {
  
      }
    };
  
    const deleteEvent = () => {
      const updatedEvents = events.filter(e => e.date !== clicked);
      setEvents(updatedEvents);
      localStorage.setItem('events', JSON.stringify(updatedEvents));
      closeModal();
    };
    useEffect(() => {
      // displayCalendar();
    }, [nav, events]);
  
      return(
  
                      <div className='student-side'>
                  <div className='student-topic'><h1>Student Profile</h1></div>
                  <img src={icon} alt='icon' className='studentprofile'/>
                  <div className='student-profile'>
                      <h2 className='profile-name'>Name: Anonymous lion</h2>
                      <h2 className='profile-name'>Class: 6 Red</h2>
                  </div>
                  <div className='student-courses'>
                      <h1 className='student-courses-offered'>
                          <div className='student-course-one'>
                              <h3>Maths</h3>
                              <h3>Kiswahili</h3>
                              <h3>Science</h3>
                          </div>
                          <div className='student-course-one'>
                              <h3>English</h3>
                              <h3>Social</h3>
                              <h3>C.R.E</h3>
                          </div>
                      </h1>
                  </div>
                  <h1 className='calendar-name'>Calendar</h1>
                  <div className="calendar-app">
      <div className="calendar-nav">
        <div id="monthDisplay">
          {new Date().toLocaleDateString('en-us', { month: 'long', year: 'numeric' })}
        </div>
      </div>
  
      <div className="calendar-grid">
        {weekdays.map(day => (
          <div key={day} className="week-day">{day}</div>
        ))}
        {displayCalendar()}
      </div>
  
      {backDropVisible && (
        <div className="modal-backdrop" onClick={closeModal}></div>
      )}
  
      {newEventModalVisible && (
        <div className="modal new-event-modal">
          <div className="modal-header">
            <h2>New Assignment</h2>
            <button className="close-button" onClick={closeModal}>X</button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
              placeholder="Assignment title"
            />
            <button onClick={saveEvent}>Save</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}
  
      {deleteEventModalVisible && (
        <div className="modal delete-event-modal">
          <div className="modal-header">
            <h2>Delete assignment?</h2>
            <button className="close-button" onClick={closeModal}>X</button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this assignment?</p>
            <button onClick={deleteEvent}>Delete</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  
    
    
    </div>
              
                  
      )
  };
  export default  Calendar;
  
  
  
  
  
  
  
  
  
  