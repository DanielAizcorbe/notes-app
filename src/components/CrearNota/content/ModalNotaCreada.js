import { Button, Flex } from 'antd';
import Modal from 'antd/es/modal/Modal'
import Title from 'antd/es/typography/Title';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ModalNotaCreada = ({ open }) => {
    
    const navegar = useNavigate();
    const nextPage = () => {
        navegar("/notes");
    }

    return (
        <Modal
            open={open}
            onCancel={nextPage}
            maskClosable={false}
            centered
            footer={null}
            closable={false}
            style={{
                width: "500px"
            }}
        >
            <Flex
                vertical
                align='center'
            >
                <Title level={4}>
                    La nota fue creada con exito
                </Title>
                <Button
                    onClick={nextPage}
                    style={{
                        width: "4rem"
                    }}
                >
                    Ok
                </Button>
            </Flex>
        </Modal>
    )
}

export default ModalNotaCreada
