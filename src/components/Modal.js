import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ onClose, children, actionBar }) {
    return ReactDOM.createPortal(
        <div>
            <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80"></div>
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="bg-white w-full sm:w-2/3 md:w-1/2 lg:w-1/3 p-10">
                    <div className="flex flex-col justify-between h-full">
                        {children}
                        <div className="flex justify-end">
                            {actionBar}
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector('.modal-container')
    );
}

export default Modal;
