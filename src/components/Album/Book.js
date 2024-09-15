// src/components/Album/Book.js
import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'turn.js';

const Book = () => {
          const bookRef = useRef(null);
        
          useEffect(() => {
            const bookElement = bookRef.current; // Store the ref in a local variable
        
            $(bookElement).turn({
              width: 400,
              height: 300,
              autoCenter: true,
            });
        
            return () => {
              $(bookElement).turn('destroy'); // Use the local variable in the cleanup function
            };
          }, []);

  return (
    <div ref={bookRef} className="flipbook">
      <div className="page">Page 1</div>
      <div className="page">Page 2</div>
      <div className="page">Page 3</div>
      <div className="page">Page 4</div>
    </div>
  );
};

export default Book;
