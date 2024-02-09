import { Content } from 'antd/es/layout/layout';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import InputTitle from './InputTitle';
import { Divider, Flex } from 'antd';
import { TextNewNote } from './TextNewNote';

export const ContentCreateNote = () => {

    const nextId = Math.max(useSelector(state => state.notas).map(n => n.id)) + 1;

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const styleContent = {
        padding: "2rem 4rem",
        maxWidth: "1400px",
        width: "100%",
        height: "100%"
    };



    return (
        <Content
            style={styleContent}
        >

            <Flex
                align='flex-start'
                justify='flex-start'
                vertical
                style={{ height: "100%", }}
            >
                <InputTitle
                    changeTitle={setTitle}
                />
                <Divider style={{ margin: "10px" }} />
                <TextNewNote
                    changeContent={setContent}
                />
            </Flex>
        </Content>
    )
}
