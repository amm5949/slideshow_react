import React from 'react';
import SlideShow from './SlideShow';
const App = () => {
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      location: 'Switzerland Alps',
      title: 'Saint Antönien',
      description: 'Beautiful mountain scenery in the Switzerland Alps.'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1669399600354-81ec22381658?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Japan Prefecture',
      title: 'Nagano',
      description: 'Home to the Japanese macaques and snowy landscapes.'
    },
    {
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Sahara Desert',
      title: 'Marrakech Merzouga',
      description: 'The vast dunes of the Sahara Desert.'
    },
    {
      image: 'https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'USA',
      title: 'Yosemite National Park',
      description: 'Famous cliffs and stunning views in California.'
    },
    {
      image: 'https://images.unsplash.com/photo-1468183654773-77e2f0bb6bf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3BhaW58ZW58MHx8MHx8fDA%3D',
      location: 'Spain',
      title: 'Los Lances Beach',
      description: 'A beach popular for kitesurfing in Tarifa, Spain.'
    },
  ];

  return (
    <div className="App">
      <SlideShow slides={slides} />
    </div>
  );
};

export default App;
