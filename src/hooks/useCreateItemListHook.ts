import { Item } from '../App';

const useCreateItemsListHook = () => {
  const itemsList: Item[] = [];

  for(let i = 1; i < 7; i++) {
    itemsList.push({position: i, name: 'Item'+i, score: 0});
  }

  return itemsList;
}

export default useCreateItemsListHook;
