import Layout, { Header } from 'antd/es/layout/layout'
import React from 'react'
import { NavBar } from '../NavBar/NavBar';

export const Home = () => {
    return (
        <Layout>
            <Header>
                <NavBar />
            </Header>
        </Layout>
    )
}


export default Home;
