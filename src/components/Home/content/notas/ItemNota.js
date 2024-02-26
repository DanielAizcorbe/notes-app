import React from 'react'
import { List } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote, toggleFavourite } from '../../../../redux/slices/notasSlice';
import Card from 'antd/es/card/Card';
import { BotonBorrar } from './botones/BotonBorrar';
import BotonFav from './botones/BotonFav';
import BotonAbrir from './botones/BotonAbrir';
import { ListaTags } from './ListaTags';
import TextArea from 'antd/es/input/TextArea';
import { useNavigate } from 'react-router-dom';

const ItemNota = ({ nota, className }) => {

    const tags = useSelector(state => state.tags);
    const navegar = useNavigate();

    const dispatch = useDispatch();

    const handleFavourite = () => {
        dispatch(toggleFavourite({ id: nota.id }));
    };

    const handleDelete = () => {
        dispatch(deleteNote({ id: nota.id }))

    }

    const openNote = () => {
        const linkNota = '/notes/' + nota.id;
        navegar(linkNota);
    }

    const lineasMostradas = 6;

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
                <TextArea
                    rows={lineasMostradas}
                    variant='borderless'
                    readOnly
                    style={{
                        resize: "none",
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        margin: "0 0 1rem 0"
                    }}
                    value={nota.content}
                >
                </TextArea>
                <ListaTags
                    tags={tags.filter(t => nota.tags.includes(t.id))}
                />
            </Card>
        </List.Item>
    )
}

export default ItemNota
