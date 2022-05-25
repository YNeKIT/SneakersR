
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://628d4363a3fd714fd041de1e.mockapi.io/items')
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    setItems(json);
  });
  }, [] );

  const onAddToCard = (obj) => {
   setCartItems(prev => [...prev, obj]);
   console.log(obj);
  };

  
  return (
    <div className="wrapper clear ">
    {cartOpened && <Drawer items={cartItems} onClose={() =>setCartOpened(false)}/>  }
    <Header onClickCart={() => setCartOpened(true)} />
    
     <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
      <h1>All Sneakers</h1>
      <div className="search-block d-flex">
        <img src="/img/search.svg" alt="search"/>
        <input placeholder="Searching..."/>
      </div>
      </div>

      <div className="d-flex flex-wrap "> 
       {items.map((item) => (
        <Card
         title={item.title}
          price={item.price} 
          imageUrl={item.imageUrl}
          onFavorite={() => console.log('Am adaugat fav')}
          onPlus={(obj) => onAddToCard(obj)}/>
           
          
      ))}  
     
      </div>
     </div>
    </div>
  );
}

export default App;
