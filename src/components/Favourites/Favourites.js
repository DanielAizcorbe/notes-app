import { Content } from 'antd/es/layout/layout'
import React from 'react'
import { useSelector } from 'react-redux';
import Title from 'antd/es/typography/Title';
import ListaNotas from '../Home/content/notas/ListaNotas';
import { BodyPage } from '../utils/BodyPage';

const Favourites = () => {

    const notas = useSelector(state => state.notas).filter(n => n.favourite);

    return (
        <BodyPage selectedSection={2}>
            <Title level={1}>
                Favoritos
            </Title>
            <ListaNotas
                notas={notas}
            />
        </BodyPage>
    )
}

export default Favourites
