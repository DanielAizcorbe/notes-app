import { Content } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { Filters } from './filtros/Filters'
import Title from 'antd/es/typography/Title';
import ListaNotas from "./notas/ListaNotas";
import { Flex } from 'antd';

export const ContentHome = () => {

    const tags = [
        {
            label: "computer",
            color: "red"
        },
        {
            label: "language",
            color: "green"
        },
        {
            label: "teatro",
            color: "blue"
        },
        {
            label: "español",
            color: "yellow"
        },
        {
            label: "sistemas",
            color: "pink"
        },
        {
            label: "react",
            color: "lightblue"
        }
    ];

    const [selectedTags, setSelectedTags] = useState([]);

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
                    tags={tags}
                    handleSelectedTags={setSelectedTags}
                    selectedTags={selectedTags}
                />
                <ListaNotas
                    tags={tags}
                    handleSelectedTags={setSelectedTags}
                    selectedTags={selectedTags}
                />
            </Content>
        </Flex>
    )
}
