import Dropdown from '../components/Dropdown'
import { useState } from 'react'

function DropdownPage() {
    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option);
    }


    const options = Array.from({ length: 5 }, (_, index) => ({
        id: index + 1,
        label: (index).toString(),
    }));

    return (
        <div>
            <Dropdown options={options} value={selection} onChange={handleSelect} />
        </div>
    );

}

export default DropdownPage;
