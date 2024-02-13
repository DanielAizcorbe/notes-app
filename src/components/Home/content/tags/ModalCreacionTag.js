import { ColorPicker, Flex } from 'antd'
import Input from 'antd/es/input/Input'
import Modal from 'antd/es/modal/Modal'
import Title from 'antd/es/typography/Title'
import React from 'react'

const ModalCreacionTag = ({ showModal, closeModal, create, text }) => {

    return (
        <Modal
            open={showModal}
            onCancel={closeModal}
            onOk={create}
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
                <Input
                    maxLength={20}
                    allowClear
                    showCount
                    placeholder='Ej: Computación, familia, SAP, AM 2'
                />
                <ColorPicker
                    allowClear

                />
            </Flex>
        </Modal>
    )
}

export default ModalCreacionTag
