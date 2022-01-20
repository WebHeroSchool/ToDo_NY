import React from 'react'; 
import InputItem from '../InputItem/InputItem'
import ItemList from '../ItemList/ItemList'
import Footer from '../Footer/Footer'

const App = () => {
  const items = [
	{
		value: 'Доделать и сдать урок'
	},
	{
		value: 'Прочитаь кучу книг'
	},
	{
		value: 'Сделать еще что-нибудь'
	}
	];

    return (
	<div>
		<h1>Важные дела:</h1>
		<InputItem />
		<ItemList items={items} />
		<Footer count={6} />
	</div>);
}

export default App;