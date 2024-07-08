import React from 'react';
import Table from '../components/Table';

function TablePage() {
    const data = [{
        'Name': 'Apple',
        'Color': 'bg-red-500',
        'Score': 5,
    }, {
        'Name': 'Banana',
        'Color': 'bg-yellow-500',
        'Score': 4,
    }, {
        'Name': 'Grapes',
        'Color': 'bg-purple-500 ',
        'Score': 3,
    }, {
        'Name': 'Orange',
        'Color': 'bg-orange-500',
        'Score': 2,
    }, {
        'Name': 'Pineapple',
        'Color': 'bg-yellow-500',
        'Score': 1,
    }];

    const config = [{
        label: 'Fruits',
        render: (fruit) => fruit.Name,
        sortKey: 'Name',
    }, {
        label: 'Color',
        render: (fruit) => <div className={`w-6 h-6 rounded-full ${fruit.Color}`}></div>,
    }, {
        label: 'Score',
        render: (fruit) => fruit.Score,
        sortKey: 'Score',
    }];

    const keyFn = (data) => {
        return data.Name;
    };

    return (
        <Table data={data} config={config} keyFn={keyFn} />
    );
}

export default TablePage;
