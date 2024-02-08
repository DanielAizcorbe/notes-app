import React from 'react'
import Title from 'antd/es/typography/Title';
import { Flex, List } from 'antd'
import { BotonTag } from './BotonTag';
import BotonFav from './BotonFav';
import { BotonBorrar } from './BotonBorrar';
import { useDispatch } from 'react-redux';
import {deleteNote, toggleFavourite}  from '../../../../redux/slices/notasSlice';

const ItemNota = ({ nota, className, onClick }) => {

    const dispatch = useDispatch();

    const handleFavourite = () => {
        dispatch(toggleFavourite({id:nota.id}));
    };

    const handleDelete = () => {
        dispatch(deleteNote({id: nota.id}))
    }

    return (
        <List.Item className={className}>
            <Flex
                vertical
                onClick={onClick}
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
                <BotonTag />
                <BotonFav
                    toggleFavourite={handleFavourite}
                    favourite={nota.favourite}
                />
                <BotonBorrar 
                    handleDelete={handleDelete}
                />
            </Flex>
        </List.Item>
    )
}

export default ItemNota
