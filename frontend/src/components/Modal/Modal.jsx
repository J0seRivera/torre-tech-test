import React from 'react';
import './Modal.css'

const UserModal = ({ userData, onClose }) => {
  let data = userData.person


  const getLink = (data) => {
    // Encuentra el enlace que contiene la palabra "torre" en el nombre
    const enlaceTorre = data.links.find((enlace) => enlace.address.toLowerCase().includes('torre'));

    // Verifica si se encontró el enlace
    if (enlaceTorre) {
      const urlTorre = enlaceTorre.address;
      console.log('Enlace con la palabra "torre":', urlTorre);
      return urlTorre
    } else {
      console.log('No se encontró ningún enlace con la palabra "torre".');
    }
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <a href={getLink(data)}>
          <p className='searchUser'>{data.name} {data.professionalHeadline}</p>
          {/* Showind the data here*/}
        </a>
        <button className='close-searchButton' onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export { UserModal };
