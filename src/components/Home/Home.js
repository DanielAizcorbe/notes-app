import { Layout } from 'antd'
import React from 'react'
import HeaderNotes from './header/HeaderNotes';
import { ContentHome } from './content/ContentHome';

export const Home = () => {

    return (
        <Layout
            style={{ width: "100%", minHeight: "100vh" }}
        >
            <HeaderNotes selectedSection={'1'} />
            <ContentHome />
        </Layout>
    )
}


export default Home;
