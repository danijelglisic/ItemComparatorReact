import classes from './CompareRow.module.css'

type CompareRowProps = {
    name1: string;
    name2: string;
    value1: number;
    value2: number;
    setValue1: (value: number) => void;
    setValue2: (value: number) => void;
    onSubmit: () => void;
}

const CompareRow = ({ name1, value1, name2, value2, setValue1, setValue2, onSubmit }: CompareRowProps) => {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
        }}>
            <div className={classes.values}>
                <label>{name1}</label>
                <input type="number" value={value1} onChange={(e) => setValue1(parseInt(e.target.value))} />
                <input type="number" value={value2} onChange={(e) => setValue2(parseInt(e.target.value))} />
                <label>{name2}</label>
            </div>
            <div className={classes.button}>
                <button type="submit">Submit</button>
            </div>
        </form >
    )
}

export default CompareRow
