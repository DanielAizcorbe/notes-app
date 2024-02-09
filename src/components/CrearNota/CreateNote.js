import Layout from 'antd/es/layout/layout'
import React from 'react'
import HeaderNotes from '../Home/header/HeaderNotes'
import { ContentCreateNote } from './content/ContentCreateNote'

const CreateNote = () => {

    return (
        <Layout
            style={{ width: "100%", minHeight: "100vh", height: "100%" }}
        >
            <HeaderNotes selectedSection={'3'} />
            <ContentCreateNote
            />
        </Layout>
    )
}

export default CreateNote
