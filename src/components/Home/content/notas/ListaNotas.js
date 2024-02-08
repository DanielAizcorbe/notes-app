import { List } from 'antd'
import React from 'react'
import ItemNota from './ItemNota';
import { useSelector } from 'react-redux';


const ListaNotas = ({tags, selectedTags, handleSelectedTags}) => {

    const notas = useSelector(state => state.notas);

    const styles = {
        
    };

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
                id={item.id} 
                title={item.title}
                tags={tags}
                handleSelectedTags={handleSelectedTags}
                selectedTags={selectedTags}
                onClick={() => alert("abriendo nota "+ item.id)}
            />
        )
    }

    return (
        <List
            size="large"
            bordered
            dataSource={notas}
            renderItem={renderItem}
            style={styles}
        />
    )
}

export default ListaNotas