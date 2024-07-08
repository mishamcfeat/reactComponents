import React from 'react';
import { GoChevronUp, GoChevronDown } from 'react-icons/go';
import useSortedData from '../hooks/use-sorting';

function Table({ data, config, keyFn }) {
    const { sortedData, sortConfig, requestSort } = useSortedData(data);

    const renderedRows = sortedData.map((row) => (
        <tr key={keyFn(row)} className="border-b">
            {config.map((column) => (
                <td key={column.label} className="px-4 py-2">
                    {column.render(row)}
                </td>
            ))}
        </tr>
    ));

    return (
        <table>
            <thead>
                <tr>
                    {config.map((column) => (
                        <th key={column.label} className="px-4 py-2 border-b-2">
                            <div className="flex items-center cursor-pointer">
                                {column.label}
                                {column.sortKey && (
                                    <div className="flex flex-col justify-center ml-2">
                                        <GoChevronUp
                                            onClick={() => requestSort(column.sortKey, 'ascending')}
                                            className={`${sortConfig.key === column.sortKey && sortConfig.direction === 'ascending' ? 'text-blue-800' : 'text-gray-400'}`}
                                        />
                                        <GoChevronDown
                                            onClick={() => requestSort(column.sortKey, 'descending')}
                                            className={`${sortConfig.key === column.sortKey && sortConfig.direction === 'descending' ? 'text-blue-800' : 'text-gray-400'}`}
                                        />
                                    </div>
                                )}
                            </div>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>{renderedRows}</tbody>
        </table>
    );
}

export default Table;
