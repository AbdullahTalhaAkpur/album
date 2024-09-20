import React, { useState, useRef } from 'react';
import './Photo.module.css';

const PhotoAlbum = () => {
  const [pages, setPages] = useState([{ photos: Array(6).fill(null) }]);
  const [currentPage, setCurrentPage] = useState(0);
  const albumRef = useRef(null);

  const addPhoto = (pageIndex, slotIndex) => (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          const desiredWidth = 300; // Adjust as needed
          const desiredHeight = 300; // Adjust as needed
          canvas.width = desiredWidth;
          canvas.height = desiredHeight;

          ctx.drawImage(img, 0, 0, desiredWidth, desiredHeight);

          const resizedPhoto = canvas.toDataURL('image/jpeg');
          const newPages = [...pages];
          newPages[pageIndex].photos[slotIndex] = resizedPhoto;
          setPages(newPages);
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const addPage = () => {
    setPages([...pages, { photos: Array(6).fill(null) }]);
    setCurrentPage(pages.length);
  };

  const turnPage = (direction) => {
    const newPage = currentPage + direction;
    if (newPage >= 0 && newPage < pages.length) {
      setCurrentPage(newPage);
      albumRef.current.style.transform = `rotateY(${newPage * -180}deg)`;
    }
  };

  return (
    <div className="album-container">
      <div className="album-book" ref={albumRef}>
        {pages.map((page, pageIndex) => (
          <div key={pageIndex} className={`album-page ${pageIndex === currentPage ? 'current' : ''}`}>
            <div className="photo-grid">
              {page.photos.map((photo, photoIndex) => (
                <div key={photoIndex} className="photo-slot">
                  {photo ? (
                    <img src={photo} alt={`Photo ${photoIndex + 1}`} />
                  ) : (
                    <label className="add-photo-label">
                      <input
                        type="file"
                        onChange={addPhoto(pageIndex, photoIndex)}
                        accept="image/*"
                      />
                      + Fotoğraf Ekle
                    </label>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="album-controls">
        <button onClick={() => turnPage(-1)} disabled={currentPage === 0}>Önceki Sayfa</button>
        <button onClick={addPage}>Yeni Sayfa Ekle</button>
        <button onClick={() => turnPage(1)} disabled={currentPage === pages.length - 1}>Sonraki Sayfa</button>
      </div>
    </div>
  );
};

export default PhotoAlbum;