import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { useState } from 'react'
import ModalCreacionTag from './ModalCreacionTag';

export const CrearTag = ({ closeMenu }) => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
        closeMenu()
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const create = () => {
        
    }

    return (
        <>
            <Button
                type='link'
                icon=<PlusOutlined />
                onClick={openModal}
            >
                Nueva tag
            </Button>
            <ModalCreacionTag 
                showModal={showModal}
                closeModal={closeModal}
                text={""}
                create={create}
            />
        </>
    )
}
