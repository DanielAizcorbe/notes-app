import { Header } from 'antd/es/layout/layout'
import React from 'react'
import { NavBar } from './NavBar'

const HeaderNotes = ({selectedSection}) => {

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

export default HeaderNotes
