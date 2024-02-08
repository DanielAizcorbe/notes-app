import { Empty, Flex } from 'antd'
import Typography from 'antd/es/typography/Typography'
import React from 'react'

const ListaVacia = () => {
    return (
        <Flex
            align='center'
            justify='center'
            style={{ padding: "1rem", border: "1px solid lightgray", borderRadius: "10px" }}
        >
            <Empty
                description={
                    <Typography style={{padding: "10px", fontStyle: "italic", fontSize: "1.1rem"}}>
                        No se encontraron notas
                    </Typography>
                }
            >

            </Empty>
        </Flex>
    )
}

export default ListaVacia
