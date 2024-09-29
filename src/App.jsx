// App.jsx
import React from 'react';
import Card from './components/cart';


const App = () => {
  const cardData = [
    {
      title: 'Mountain Adventure',
      description: 'Explore the beautiful mountains with us.',
      image:'https://s.yimg.com/fz/api/res/1.2/fXrO64HJl4.2w8nnbHDllg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTE0Ng--/https://s.yimg.com/zb/imgv1/97007d9e-ee78-3895-af4b-f736a2fdda50/t_500x300',
    },
    {
      title: 'Mountain Adventure pro max',
      description: 'Explore the beautiful mountains with us.',
      image: 'https://s.yimg.com/fz/api/res/1.2/fXrO64HJl4.2w8nnbHDllg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTE0Ng--/https://s.yimg.com/zb/imgv1/97007d9e-ee78-3895-af4b-f736a2fdda50/t_500x300',
    },
    {
      title: 'Beach Vacation',
      description: 'Relax by the sunny beaches.',
      image: 'https://s.yimg.com/fz/api/res/1.2/fXrO64HJl4.2w8nnbHDllg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTE0Ng--/https://s.yimg.com/zb/imgv1/97007d9e-ee78-3895-af4b-f736a2fdda50/t_500x300',
    },
    {
      title: 'City Exploration',
      description: 'Discover the amazing city life.',
      image: 'https://s.yimg.com/fz/api/res/1.2/fXrO64HJl4.2w8nnbHDllg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTE0Ng--/https://s.yimg.com/zb/imgv1/97007d9e-ee78-3895-af4b-f736a2fdda50/t_500x300',
    },
  ];

  return (
    <div className="app">
      {cardData.map((item, index) => (
        <Card 
          key={index} 
          title={item.title} 
          description={item.description} 
          image={item.image} 
        />
      ))}
    </div>
  );
};

export default App;
