import React, { useState } from 'react';
import classes from './CompareForm.module.css';
import { Combination, Item } from '../App';
import CompareRow from './CompareRow';

type CompareFormProps = {
    items: Item[];
    setItems: React.Dispatch<React.SetStateAction<Item[]>>;
    combinations: Combination[];
}

const CompareForm = ({ items, setItems, combinations }: CompareFormProps) => {
    const [combinationNumber, setCombinationNumber] = useState(0)
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);

    const onSubmit = () => {
        const newItems = items.map((item) => {
            if (item.name === combinations[combinationNumber].item1.name) {
                if (value1 > value2) return { ...item, score: item.score + 1 }
            }
            else if (item.name === combinations[combinationNumber].item2.name) {
                if (value1 < value2) return { ...item, score: item.score + 1 }
            }
            return item;
        }).sort((item1, item2) => item2.score - item1.score).map((item, index) => {
            return {
                ...item,
                position: index + 1,
            }
        });
        setItems(newItems);
        if (combinationNumber < combinations.length) {
            setCombinationNumber(combinationNumber + 1);
        }
    }

    if (combinationNumber === combinations.length) return (
        <div className={classes.final}>
            Comparing over, there are final results! Please refresh page!
        </div>
    )

    return (
        <>
            <CompareRow name1={combinations[combinationNumber].item1.name}
                name2={combinations[combinationNumber].item2.name}
                value1={value1}
                value2={value2}
                setValue1={setValue1}
                setValue2={setValue2}
                onSubmit={onSubmit}
            />
        </>
    )
}

export default CompareForm
