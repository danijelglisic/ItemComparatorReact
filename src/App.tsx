import React, { useState } from 'react';
import classes from './App.module.css';
import CompareForm from './components/CompareForm';
import ItemsTable from './components/ItemsTable';
import useCreateCombinations from './hooks/useCreateCombinations';
import useCreateItemsListHook from './hooks/useCreateItemListHook';

export type Item = {
  position: number;
  name: string;
  score: number;
}

export type Combination = {
  item1: Item;
  item2: Item;
  value1: number;
  value2: number;
}

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const items = useCreateItemsListHook();
  const [itemsList, setItemsList] = useState(items);
  const combinations = useCreateCombinations({ items: items });

  return (
    <div className={classes.layout}>
      <ItemsTable items={itemsList} />
      {!isFormVisible && <button onClick={() => setIsFormVisible(true)}>Start comparing</button>}
      {isFormVisible && <CompareForm items={itemsList} setItems={setItemsList} combinations={combinations} />}
    </div>
  );
}

export default App;
