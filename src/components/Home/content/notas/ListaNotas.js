import { List } from 'antd'
import React from 'react'
import ItemNota from './ItemNota';


const ListaNotas = ({tags, selectedTags, handleSelectedTags}) => {

    const items = [
        {
            title: "Titulo 1",
            id: 1,
            tags: [],
            favourite: false
        },
        {
            title: "Titulo 2",
            id: 2,
            tags: [],
            favourite: false
        },
        {
            title: "Titulo 3",
            id: 3,
            tags: [],
            favourite: false
        },
        {
            title: "Titulo 4",
            id: 4,
            tags: [],
            favourite: false
        },
        {
            title: "Titulo 5",
            id: 5,
            tags: [],
            favourite: false
        },
        {
            title: "Titulo 6",
            id: 6,
            tags: [],
            favourite: false
        },
        {
            title: "Titulo 7",
            id: 7,
            tags: [],
            favourite: false
        },
    ];


    /**
    * * LOS ITEMS TIENEN LA FORMA
    * * item = {
    * *    title: string,
    * *    id: number,
    * *    tags: array,
    * *    favourite: boolean
    * * }
    */
    const renderItem = (item) => {
        return (
            <ItemNota 
                id={item.id} 
                title={item.title}
                tags={tags}
                handleSelectedTags={handleSelectedTags}
                selectedTags={selectedTags}
            />
        )
    }

    return (
        <List
            size="large"
            bordered
            dataSource={items}
            renderItem={renderItem}
        />
    )
}

export default ListaNotas