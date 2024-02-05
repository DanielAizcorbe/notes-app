import { Layout } from 'antd'
import { Footer } from 'antd/es/layout/layout';
import React, { useState } from 'react'
import HeaderHome from './header/HeaderHome';
import { Filters } from './content/Filters';

export const Home = () => {

    const tags = [
        {
            label: "programming",
            value: "red"
        },
        {
            label: "computer",
            value: "blue"
        },
        {
            label: "language",
            value: "green"
        }
    ];

    const [selectedTags, setSelectedTags] = useState([]);

    return (
        <Layout
            style={{ width: "100%", height: "100%" }}
        >
            <HeaderHome />
            <Layout>
                <Filters 
                    tags={tags}
                    handleSelectedTags={setSelectedTags}
                    selectedTags={selectedTags}
                />
            </Layout>
            <Footer>
                Este es mi footer
            </Footer>
        </Layout>
    )
}


export default Home;
