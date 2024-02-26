import { ColorPicker, Flex } from 'antd'
import Input from 'antd/es/input/Input'
import Modal from 'antd/es/modal/Modal'
import Title from 'antd/es/typography/Title'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTag } from '../../../../redux/slices/tagsSlice'

const ModalCreacionTag = ({ showModal, closeModal }) => {

    const [name, setName] = useState("");
    const [color, setColor] = useState("lightblue");

    const dispatch = useDispatch();

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleChangeColor = (color, hex) => {
        console.log(hex);
        setColor(hex);
    }

    const nextId = Math.max(...useSelector(state => state.tags).map(n => n.id)) + 1;

    const create = () => {
        const newTag = {
            id: nextId,
            label: name,
            color: color
        };

        dispatch(createTag(newTag));
        closeModal();
    }

    return (
        <Modal
            open={showModal}
            onCancel={closeModal}
            onOk={create}
            maskClosable={false}
            okText={"Crear"}
            okButtonProps={{ disabled: name === "" }}
        >
            <Flex
                vertical
                align='flex-start'
                justify='center'
                gap={"10px"}
            >
                <Title level={2}>
                    Crear Tag
                </Title>
                <Flex
                    style={{ width: "100%" }}
                >
                    <Input
                        maxLength={20}
                        allowClear
                        showCount
                        placeholder='Ej: Computación, familia, SAP, AM 2'
                        style={{ width: "70%" }}
                        onChange={handleChangeName}
                    />
                    <ColorPicker
                        showText
                        format={"hex"}
                        defaultValue={color}
                        onChange={handleChangeColor}
                    />
                </Flex>
            </Flex>
        </Modal>
    )
}

export default ModalCreacionTag
