import { useState, useRef, useEffect } from 'react';
import { GoChevronDown } from 'react-icons/go';

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) {
                return;
            }

            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler);
        };

    }, [])

    useEffect(() => {
        if (dropdownRef.current) {
            dropdownRef.current.style.maxHeight = isOpen ? `${dropdownRef.current.scrollHeight}px` : '0px';
        }
    }, [isOpen]);

    const handleClick = (option) => {
        onChange(option);
        setIsOpen(false);
    };

    const renderedOptions = options.map((option) => (
        <div
            key={option.id}
            className="w-full text-center hover:bg-sky-100 cursor-pointer p-2 border-b"
            onClick={() => handleClick(option)}
        >
            {option.label}
        </div>
    ));

    return (
        <div>
            <div ref={divEl} className="w-20 mx-auto">
                <div className="flex justify-between items-center bg-orange-400 py-2 pl-8 rounded-t-lg shadow">
                    <div>{value?.label || '0'}</div>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <GoChevronDown />
                    </button>
                </div>
                <div
                    ref={dropdownRef}
                    className="border rounded-b-lg w-full overflow-hidden shadow transition-max-height duration-300 ease-in-out"
                    style={{ maxHeight: '0px' }}
                >
                    {renderedOptions.length > 0 ? renderedOptions : "No options available"}
                </div>
            </div>
        </div>
    );
}

export default Dropdown;
