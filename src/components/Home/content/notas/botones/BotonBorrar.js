import { DeleteFilled } from '@ant-design/icons';
import { Button, Popover } from 'antd';
import Modal from 'antd/es/modal/Modal';
import React, { useState } from 'react'

export const BotonBorrar = ({ handleDelete }) => {

    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    }

    const openModal = () => {
        setShowModal(true);
    }

    const confirmDelete = () => {
        handleDelete();
        closeModal();
    }
    return (
        <>
            <Popover
                placement='top'
                content="Borrar"
                trigger="hover"
            >
                <Button
                    type='text'
                    size='large'
                    icon={<DeleteFilled />}
                    onClick={openModal}
                    danger
                />
            </Popover>
            <Modal
                open={showModal}
                onOk={confirmDelete}
                onCancel={closeModal}
                title="¿Esta seguro de borrar esta nota?"
                centered
            >

            </Modal>
        </>
    );
}
