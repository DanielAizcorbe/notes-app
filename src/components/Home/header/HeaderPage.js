import { Header } from 'antd/es/layout/layout'
import React from 'react'
import { NavBar } from './NavBar'

const HeaderPage = ({selectedSection}) => {

    return (
        <Header
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: "center"
            }}
        >
            <NavBar selectedSection={selectedSection}/>
        </Header>
    )
}

export default HeaderPage
