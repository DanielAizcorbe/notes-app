import { List } from 'antd'
import React from 'react'
import ItemNota from './ItemNota';
import { useSelector } from 'react-redux';

const ListaNotas = ({ selectedTags, notas }) => {

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
        />
    )
}

export default ListaNotas