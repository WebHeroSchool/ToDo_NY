import React from 'react'; 
import InputItem from '../InputItem/InputItem'
import ItemList from '../ItemList/ItemList'
import Footer from '../Footer/Footer'

  const todoItem = {
	task1: 'Доделать и сдать урок',
	task2: 'Прочитаь кучу книг',
	task3: 'Сделать еще что-нибудь'
  };

const App = () => (
	<div>
		<h1>Важные дела:</h1>
		<InputItem />
		<ItemList todoItems={todoItem} />
		<Footer count={6} />
	</div>);

export default App;