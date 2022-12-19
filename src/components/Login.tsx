import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';

export const Login = () => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    
    return (
        <Modal open={open} onClose={onCloseModal} center>
            <h2>Simple centered modal</h2>
        </Modal>
    )
}
