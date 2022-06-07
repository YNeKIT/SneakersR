
import axios from 'axios';
import {Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';
import Home from './pages/Home';
import Favorites from './pages/Favorites';



function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavotites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {

   axios.get('https://628d4363a3fd714fd041de1e.mockapi.io/items').then((res) =>{
     setItems(res.data);
   } );
   axios.get('https://628d4363a3fd714fd041de1e.mockapi.io/cart').then((res) =>{
     setCartItems(res.data);
   } );
   axios.get('https://628d4363a3fd714fd041de1e.mockapi.io/favorites').then((res) =>{
    setFavotites(res.data);
  } );
  }, [] );

  const onAddToCard = (obj) => {
    console.log(obj);
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://628d4363a3fd714fd041de1e.mockapi.io/cart/${obj.id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
    } else {
      axios.post('https://628d4363a3fd714fd041de1e.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
    }
  };

    const onRemoveItem = (id) => {
      axios.delete(`https://628d4363a3fd714fd041de1e.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== id ));
    };

    const onAddToFavorite = async (obj) => {
      try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://628d4363a3fd714fd041de1e.mockapi.io/favorites/${obj.id}`);
       
      }
      else {
       const { data } = await axios.post('https://628d4363a3fd714fd041de1e.mockapi.io/favorites', obj);
      setFavotites((prev) => [...prev, data]);
      }
    } catch (error) {
        alert('Nu sa primit de adaugat in Favorite');
      }
    };

  
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  
  return (
    <div className="wrapper clear ">
    {cartOpened && (
    <Drawer items={cartItems} onClose={() =>setCartOpened(false)} onRemove={onRemoveItem} />  
    )}
   
    <Header onClickCart={() => setCartOpened(true)} />
      

      <Routes>
   <Route path='/' element={<Home
    items={items}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    onChangeSearchInput={onChangeSearchInput}
    onAddToFavorite={onAddToFavorite}
    onAddToCard={onAddToCard} />
         } /> 


    <Route path='Favorites' element={
      <Favorites
      items={favorites} 
      onAddToFavorite={onAddToFavorite} 
      />} />

      </Routes>
    
      

    
    </div>
  );
}

export default App;
