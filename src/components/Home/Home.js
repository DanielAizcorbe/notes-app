import { Layout } from 'antd'
import { Footer } from 'antd/es/layout/layout';
import React, { useState } from 'react'
import HeaderHome from './header/HeaderHome';
import { ContentHome } from './content/ContentHome';

export const Home = () => {
    
    return (
        <Layout
            style={{ width: "100%", height: "100%" }}
        >
            <HeaderHome />
            <ContentHome />
            <Footer>
                Este es mi footer
            </Footer>
        </Layout>
    )
}


export default Home;
