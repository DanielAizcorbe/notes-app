import Layout, { Content } from 'antd/es/layout/layout'
import React from 'react'
import HeaderNotes from '../Home/header/HeaderNotes'
import { useSelector } from 'react-redux';
import Title from 'antd/es/typography/Title';
import ListaNotas from '../Home/content/notas/ListaNotas';
import { Flex } from 'antd';

const Favourites = () => {

    const notas = useSelector(state => state.notas).filter(n => n.favourite);

    const styleContent = {
        padding: "2rem 4rem",
        maxWidth: "1400px",
        width: "100%",
    };

    return (
        <Layout
            style={{ width: "100%", minHeight: "100vh" }}
        >
            <HeaderNotes selectedSection={'2'} />
            <Flex
                justify='center'
                align='center'
                height={"100%"}
            >

                <Content style={styleContent}>
                    <Title level={1}>
                        Favoritos
                    </Title>
                    <ListaNotas
                        notas={notas}
                    />
                </Content>
            </Flex>
        </Layout>

    )
}

export default Favourites
