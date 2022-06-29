import { Combination, Item } from '../App';

type useCreateCombinationsProps = {
    items: Item[];
}

const useCreateCombinations = ({items}: useCreateCombinationsProps) => {
    const allCombinations: Combination[] = [];
        for (let i = 0; i < items.length; i++) { 
            for (let j = i + 1; j < items.length; j++) { 
                allCombinations.push({item1: items[i], item2: items[j], value1: 0, value2: 0})
            }
        }
  return allCombinations;
}

export default useCreateCombinations
