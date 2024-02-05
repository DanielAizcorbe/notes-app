import { Content } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { Filters } from './Filters'
import Title from 'antd/es/typography/Title';
import ListaNotas from './ListaNotas';

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
    };

    return (
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
                
            />
        </Content>
    )
}
