import React from 'react'; 
import Item from '../Item/Item'

const ItemList = ({ todoItems }) => (<ul>
    <li><Item todoItem={todoItems.task1} /></li>
    <li><Item todoItem={todoItems.task2} /></li>
    <li><Item todoItem={todoItems.task3} /></li>    
    </ul>);

export default ItemList;