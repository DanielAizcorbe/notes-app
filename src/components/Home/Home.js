import { Layout } from 'antd'
import React from 'react'
import HeaderHome from './header/HeaderHome';
import { ContentHome } from './content/ContentHome';

export const Home = () => {
    
    return (
        <Layout
            style={{ width: "100%", height: "100%" }}
        >
            <HeaderHome />
            <ContentHome />
        </Layout>
    )
}


export default Home;
