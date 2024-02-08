import { Content } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { Filters } from './filtros/Filters'
import Title from 'antd/es/typography/Title';
import ListaNotas from "./notas/ListaNotas";
import { Flex } from 'antd';
import { useSelector } from 'react-redux';

export const ContentHome = () => {

    const [selectedTags, setSelectedTags] = useState([]);
    const notas = useSelector(state => state.notas);

    const styleContent = {
        padding: "2rem 4rem",
        maxWidth: "1400px",
        width: "100%",
    };

    return (
        <Flex
            justify='center'
            align='center'
        >
            <Content
                style={styleContent}
            >
                <Title>
                    Notas
                </Title>
                <Filters
                    handleSelectedTags={setSelectedTags}
                    selectedTags={selectedTags}
                />
                <ListaNotas
                    notas={notas}
                />
            </Content>
        </Flex>
    )
}
