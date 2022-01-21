import React from 'react'; 
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from'./App.module.css';

const App = () => {
  const items = [
	{
		value: 'Доделать и сдать урок',
		isDone: true
	},
	{
		value: 'Прочитаь кучу книг',
		isDone: false
	},
	{
		value: 'Сделать еще что-нибудь',
		isDone: true
	}
	];

    return (
	<div className={styles.wrap}>
		<h1 className={styles.title}>Важные дела:</h1>
		<InputItem />
		<ItemList items={items} />
		<Footer count={6} />
	</div>);
}

export default App;