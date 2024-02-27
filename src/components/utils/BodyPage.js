import Layout, { Content } from 'antd/es/layout/layout'
import React from 'react'
import HeaderPage from '../Home/header/HeaderPage'
import { Flex } from 'antd';

export const BodyPage = ({ children, selectedSection }) => {

    const styleContent = {
        padding: "2rem 4rem",
        maxWidth: "1400px",
        width: "100%",
    };

    return (
        <Layout
            style={{ width: "100%", minHeight: "100vh" }}
        >
            <HeaderPage selectedSection={selectedSection + ""} />
            <Flex
                vertical
                align='center'
                justify='flex-start'
                style={{width: "100%"}}
            >
                <Content style={styleContent}>
                    {children}
                </Content>
            </Flex>
        </Layout>
    )
}
