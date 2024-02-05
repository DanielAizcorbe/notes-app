import { Header } from 'antd/es/layout/layout'
import React from 'react'
import { NavBar } from './NavBar'

const HeaderHome = () => {

    return (
        <Header
            style={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <NavBar />
        </Header>
    )
}

export default HeaderHome
