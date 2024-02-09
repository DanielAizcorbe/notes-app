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
    * *    favourite: boolean,
    * *    content
    * TODO lastEdited: date
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
            grid={{
                gutter: 16,
                xs: 1,
                sm: 1,
                md: 2,
                lg: 3,
                xl: 3,
                xxl: 3,
            }}
            size="large"
            bordered
            dataSource={notas}
            renderItem={renderItem}
            locale={{ emptyText: <ListaVacia /> }}
        />
    )
}

export default ListaNotas