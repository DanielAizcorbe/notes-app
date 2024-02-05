import { Layout } from 'antd'
import { Content, Footer } from 'antd/es/layout/layout';
import React from 'react'
import HeaderHome from './header/HeaderHome';


export const Home = () => {
    return (
        <Layout>
            <HeaderHome />
            <Content>
                Este es mi content
            </Content>
            <Footer>
                Este es mi footer
            </Footer>
        </Layout>
    )
}


export default Home;
