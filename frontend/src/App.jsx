import React from 'react';
import './App.scss';
import PhotoList from 'components/PhotoList';


// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <div className='photo-list'>
        <PhotoList/>
      </div>
    </div>
  );
};

export default App;
