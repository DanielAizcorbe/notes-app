import { Layout } from 'antd'
import React from 'react'
import HeaderNotes from './header/HeaderNotes';
import { ContentHome } from './content/ContentHome';

export const Home = () => {
    
    return (
        <Layout
            style={{ width: "100%", height: "100%" }}
        >
            <HeaderNotes selectedSection={'1'}/>
            <ContentHome />
        </Layout>
    )
}


export default Home;
