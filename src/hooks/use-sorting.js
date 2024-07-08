import { useState, useMemo } from 'react';

const useSortedData = (data) => {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    const sortedData = useMemo(() => {
        const sorted = [...data];
        if (sortConfig.key) {
            const { key, direction } = sortConfig;
            sorted.sort((a, b) => {
                const aValue = a[key];
                const bValue = b[key];

                if (typeof aValue === 'string' && typeof bValue === 'string') {
                    return direction === 'ascending'
                        ? aValue.localeCompare(bValue)
                        : bValue.localeCompare(aValue);
                } else {
                    return direction === 'ascending'
                        ? aValue - bValue
                        : bValue - aValue;
                }
            });
        }
        return sorted;
    }, [data, sortConfig]);

    const requestSort = (sortKey, direction) => {
        setSortConfig(prevConfig => ({
            key: prevConfig.key === sortKey && prevConfig.direction === direction ? null : sortKey,
            direction
        }));
    };

    return { sortedData, sortConfig, requestSort };
};

export default useSortedData;
