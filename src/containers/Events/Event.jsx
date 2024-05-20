import React, { useState, useEffect } from 'react';
import Card from "../../components/Card/Card";
import { useData } from "../../contexts/DataContext";
import Modal from "../Modal/Modal";
import ModalEvent from "../ModalEvent/ModalEvent";

const PER_PAGE = 9;

const EventList = () => {
  const { data, error } = useData();
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    let events = data?.events || [];
    console.log('kjhdgkjdgkj: ', events);
    setFilteredEvents(events.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE));
  }, [currentPage, data]);

  return (
    <>
      {error && <div>An error occured</div>}
      {data === null ? (
        "loading"
      ) : (
        <>
          {filteredEvents.map((event) => (
            <Modal key={event.id} Content={<ModalEvent event={event} />}>
              {({ setIsOpened }) => (
                <Card
                  onClick={() => setIsOpened(true)}
                  imageSrc={event.cover}
                  imageAlt={event.title} // Ajout de la prop imageAlt
                  dataTestid={`card-${event.id}`} // Ajout de la prop dataTestid
                />             
              )}
            </Modal>
          ))}
          <div className="Pagination">
            {[...Array(Math.ceil((data?.events.length || 0) / PER_PAGE))].map((_, n) => (
              // eslint-disable-next-line react/no-array-index-key
              <a key={`page-link-${n}`} href="#events" onClick={() => setCurrentPage(n + 1)}>
                {n + 1}
              </a>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default EventList;
