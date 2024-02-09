import React from 'react'
import { List } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote, toggleFavourite } from '../../../../redux/slices/notasSlice';
import Card from 'antd/es/card/Card';
import { BotonBorrar } from './botones/BotonBorrar';
import BotonFav from './botones/BotonFav';
import Paragraph from 'antd/es/typography/Paragraph';
import BotonAbrir from './botones/BotonAbrir';
import { ListaTags } from './ListaTags';

const ItemNota = ({ nota, className }) => {

    const tags = useSelector(state => state.tags);

    const dispatch = useDispatch();

    const handleFavourite = () => {
        dispatch(toggleFavourite({ id: nota.id }));
    };

    const handleDelete = () => {
        dispatch(deleteNote({ id: nota.id }))

    }

    /**
     * TODO hacer un fetch de datos
     */
    const openNote = () => {
        alert("abriendo la nota: " + nota.id);
    }

    return (
        <List.Item className={className}>
            <Card
                title={nota.title}
                actions={[
                    <BotonAbrir
                        openNote={openNote}
                    />,
                    <BotonFav
                        toggleFavourite={handleFavourite}
                        favourite={nota.favourite}
                    />,
                    <BotonBorrar
                        handleDelete={handleDelete}
                    />
                ]}
            >
                <Paragraph
                    ellipsis={{
                        rows: 3,
                        expandable: false
                    }}
                >
                    {nota.content}
                </Paragraph>
                <ListaTags
                    tags={tags.filter(t => nota.tags.includes(t.id))}
                />
            </Card>
        </List.Item>
    )
}

/**
 * <Flex
                vertical
                onClick={openNote}
                style={{ width: "100%" }}
            >
                <Title
                    level={3}
                    style={{ margin: 0, padding: "0.5rem 0" }}
                >
                    {nota.title}
                </Title>
            </Flex>
            <Flex
                gap={"1rem"}
            >
                <BotonFav
                    toggleFavourite={handleFavourite}
                    favourite={nota.favourite}
                />
                <BotonBorrar
                    handleDelete={handleDelete}
                />
            </Flex>
 * 
 */

export default ItemNota
