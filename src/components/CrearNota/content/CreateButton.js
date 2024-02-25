import { PlusOutlined } from '@ant-design/icons'
import { Button, Flex } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from '../../../redux/slices/notasSlice'
import ModalNotaCreada from './ModalNotaCreada'

export const CreateButton = ({ nextId, title, content, selectedTags }) => {

    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false);

    const create = () => {
        const nuevaNota = {
            id: nextId,
            title: title,
            content: content,
            tags: selectedTags.map(t => t.id),
            favourite: false
        }

        dispatch(createNote(nuevaNota));
        setOpenModal(true);
    }

    return (
        <Flex
            justify='center'
            align='center'
            style={{ width: "100%" }}
        >
            <ModalNotaCreada
                open={openModal}
            />
            <Button
                type='primary'
                icon=<PlusOutlined />
                onClick={create}
            >
                Crear
            </Button>
        </Flex>
    )
}
