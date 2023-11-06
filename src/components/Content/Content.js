import React from 'react';

const Content = ({ selectedItem }) => {
  return (
    <div className="content">
      <h2>{selectedItem}</h2>
      {/* Add content for the selected item */}
    </div>
  );
};

export default Content;
