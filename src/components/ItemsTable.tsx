import React from 'react'
import './ItemsTable.module.css'
import { Item } from '../App'

type ItemsTableProps = {
    items: Item[];
}

const ItemsTable = ({ items }: ItemsTableProps) => {
    return (
        <div className="styled-table">
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => {
                        return (
                            <tr className="active-row" key={item.name}>
                                <td>{item.position}</td>
                                <td>{item.name}</td>
                                <td>{item.score}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ItemsTable

