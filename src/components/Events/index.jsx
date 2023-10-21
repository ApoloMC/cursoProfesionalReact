import { useState } from 'react';

import EventItem from "./components/EventItem";
import eventjsJSON from '../../data/events.json';
console.log(10);

const Events = () => {
  const [data, setData] = useState(eventjsJSON); 
  console.log(data);
  const { _embedded: { events }} = data;
  
  const handleEventItemClick = (id) => {
    console.log('evento clickeado:', id)
  }
  
  const eventsComponent = events.map((eventItem) => ( 
      <EventItem 
        key={`event-item-${eventItem.id}`} 
        name={eventItem.name}
        info={eventItem.info}
        image={eventItem.images[0].url}
        onEventClick={handleEventItemClick}
        id={eventItem.id}
      />
  ));
  return(
    <div>
      Events
      {eventsComponent}
    </div>
  );
}

export default Events;