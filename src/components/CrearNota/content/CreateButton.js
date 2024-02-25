import { PlusOutlined } from '@ant-design/icons'
import { Button, Flex } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from '../../../redux/slices/notasSlice'

export const CreateButton = ({ nextId, title, content, selectedTags }) => {

    const dispatch = useDispatch();

    const create = () => {
        const nuevaNota = {
            id: nextId,
            title: title,
            content: content,
            tags: selectedTags.map(t => t.id),
            favourite: false
        }

        dispatch(createNote(nuevaNota));
    }
    return (
        <Flex
            justify='center'
            align='center'
            style={{ width: "100%" }}
        >
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
