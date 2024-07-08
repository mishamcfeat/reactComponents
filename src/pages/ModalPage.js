import Modal from '../components/Modal';
import Button from '../components/Button';
import { useState, useEffect } from 'react';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        document.body.style.overflow = showModal ? 'hidden' : 'auto';

        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [showModal]);

    const handleShowModal = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const modal = <Modal onClose={handleClose} actionBar={<Button primary onClick={handleClose}>I Accept</Button>}>
        <p>This is an important agreement for you to accept</p>
    </Modal>;


    return (
        <div>
            <Button primary onClick={handleShowModal}>
                Show Modal
            </Button>
            {showModal && modal}
        </div>
    );
}

export default ModalPage;
