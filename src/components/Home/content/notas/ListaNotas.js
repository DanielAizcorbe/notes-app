import { List } from 'antd'
import React from 'react'
import ItemNota from './ItemNota';
import ListaVacia from "./ListaVacia"

const ListaNotas = ({ notas }) => {

    /**
    * * LAS NOTAS TIENEN LA FORMA
    * * nota = {
    * *    title: string,
    * *    id: number,
    * *    tags: array,
    * *    favourite: boolean
    * * }
    */

    const renderItem = (item) => {
        return (
            <ItemNota
                nota={item}
            />
        )
    }

    return (
        <List
            size="large"
            bordered
            dataSource={notas}
            renderItem={renderItem}
            pagination={true}
            locale={{emptyText: <ListaVacia />}}
        />
    )
}

export default ListaNotas