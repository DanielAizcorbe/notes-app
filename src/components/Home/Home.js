import React, { useState } from 'react'
import { BodyPage } from '../utils/BodyPage';
import { Content } from 'antd/es/layout/layout';
import Title from 'antd/es/typography/Title';
import { Filters } from './content/filtros/Filters';
import ListaNotas from './content/notas/ListaNotas';
import { useSelector } from 'react-redux';

export const Home = () => {

    const [selectedTags, setSelectedTags] = useState([]);
    const [titleSearch, setTitleSearch] = useState("");

    const notas = useSelector(state => state.notas);
    const filteredTagNotes = selectedTags.length > 0 ? notas.filter(n => selectedTags.every(t => n.tags.includes(t.id))) : notas;
    const filteredTextNotes = titleSearch !== "" ? filteredTagNotes.filter(n => n.title.includes(titleSearch)) : filteredTagNotes;

    return (
        <BodyPage selectedSection={1}>
            <Title>
                Notas
            </Title>
            <Filters
                handleSelectedTags={setSelectedTags}
                selectedTags={selectedTags}
                setSearchText={setTitleSearch}
            />
            <ListaNotas
                notas={filteredTextNotes}
            />
        </BodyPage>
    )
}

export default Home;
