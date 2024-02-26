import Layout, { Content } from 'antd/es/layout/layout'
import React from 'react'
import HeaderPage from '../Home/header/HeaderPage'

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
            <Content style={styleContent}>
                {children}
            </Content>
        </Layout>
    )
}
