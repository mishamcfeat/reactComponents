import { useState, useRef, useEffect } from "react";
import { AiFillCaretLeft, AiFillCaretDown } from "react-icons/ai";

function Accordion({ items }) {
    const [activeIndex, setActiveIndex] = useState(null);
    const [height, setHeight] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
        if (activeIndex !== null) {
            setHeight(contentRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [activeIndex]);

    const renderedItems = items.map((item) => {
        const isActive = item.id === activeIndex;

        return (
            <div key={item.id}>
                <div className="flex justify-between border bg-green-300">
                    <div className="pl-3">{item.label}</div>
                    <button onClick={() => setActiveIndex(isActive ? null : item.id)}>
                        {isActive ? <AiFillCaretDown /> : <AiFillCaretLeft />}
                    </button>
                </div>
                <div
                    ref={isActive ? contentRef : null}
                    className={`border overflow-hidden transition-all duration-1000 ease-in-out`}
                    style={{ height: isActive ? `${height}px` : "0px" }}
                >
                    <div className="pl-7 py-2 bg-green-100">{item.content}</div>
                </div>
            </div>
        );
    });

    return (
        <div className="w-1/2 mx-auto">
            {renderedItems}
        </div>
    );
}

export default Accordion;
