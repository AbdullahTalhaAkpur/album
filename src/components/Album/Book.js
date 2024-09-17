import React from "react";
import HTMLFlipBook from "react-pageflip";
import './Book.css'; // Make sure the CSS file is linked

// Import images
import abdullahImage from '../../assets/images/ABDULLAH.jpg';
import apoImage from '../../assets/images/apo.jpg';

const Book = () => {
  return (
    <div className="book-container">
      <HTMLFlipBook width={300} height={400} showCover={true}>
        {/* Page 1 */}
        <div className="book-page">
          <h3>My First Album</h3>
          <img src={abdullahImage} alt="Denizli Landscape" />
          <p>Page 1: Add your description here.</p>
        </div>

        {/* Page 2 */}
        <div className="book-page">
          <h3>Memories</h3>
          <img src={apoImage} alt="At Home" />
          <p>Page 2: Add another description here.</p>
        </div>

        {/* Additional pages can be added here */}
      </HTMLFlipBook>
    </div>
  );
};

export default Book;