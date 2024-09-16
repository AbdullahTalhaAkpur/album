// src/components/Album/Book.js
import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "turn.js";

const Book = ({ albums }) => {
  const bookRef = useRef(null);

  useEffect(() => {
    const bookElement = bookRef.current; // Store the ref in a local variable

    $(bookElement).turn({
      width: 400,
      height: 300,
      autoCenter: true,
    });

    return () => {
      $(bookElement).turn("destroy"); // Cleanup the flipbook when the component unmounts
    };
  }, []);

  return (
    <div ref={bookRef} className="flipbook">
      {albums && albums.length > 0 ? (
        albums.map((album, index) => (
          <div key={index} className="page">
            <h3>{album.title}</h3>
            <p>Created by: {album.creator}</p>
            {/* You can also add more details like album content or collaborators */}
          </div>
        ))
      ) : (
        <div className="page">
          <p>No albums available</p>
        </div>
      )}
    </div>
  );
};

export default Book;