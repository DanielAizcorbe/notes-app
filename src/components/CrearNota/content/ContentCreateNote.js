import { Content } from 'antd/es/layout/layout';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import InputTitle from './InputTitle';
import { Divider, Flex } from 'antd';
import { TextNewNote } from './TextNewNote';
import TagSelect from '../../Home/content/tags/TagSelect';
import { CrearTag } from '../../Home/content/tags/CrearTag';
import { CreateButton } from './CreateButton';

export const ContentCreateNote = () => {

    const nextId = Math.max(...useSelector(state => state.notas).map(n => n.id)) + 1;

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [selectedTags, setSelectedTags] = useState([]);

    const [openTagSelect, setOpenTagSelect] = useState(false);

    const [tagName, setTagName] = useState("");

    const tags = useSelector(state => state.tags);

    const styleContent = {
        padding: "2rem 4rem",
        maxWidth: "1400px",
        width: "100%",
        minHeight: "100%"
    };

    const selectBody = (menu) => {
        return (
            <div>
                {menu}
                <CrearTag
                    tagName={tagName}
                    setTagName={setTagName}
                    closeMenu={() => setOpenTagSelect(false)}
                />
            </div>
        );
    }


    return (
        <Flex
            align='center'
            justify='center'
            style={{ minHeight: "100%" }}
        >
            <Content
                style={styleContent}
            >
                <Flex
                    align='flex-start'
                    justify='flex-start'
                    vertical
                    style={{ height: "100%" }}
                >
                    <InputTitle
                        changeTitle={setTitle}
                    />
                    <Divider style={{ margin: "10px" }} />
                    <Flex
                        justify='center'
                        align='center'
                        style={{ width: "100%" }}
                    >
                        <TagSelect
                            handleSelectedTags={setSelectedTags}
                            selectedTags={selectedTags}
                            tags={tags}
                            borderless
                            width={"100%"}
                            body={selectBody}
                            setSearch={setTagName}
                            open={openTagSelect}
                            setOpen={setOpenTagSelect}
                        />
                    </Flex>
                    <Divider style={{ margin: "10px" }} />
                    <TextNewNote
                        changeContent={setContent}
                        text={content}
                    />
                    <Divider style={{ margin: "30px 10px" }} />
                    <CreateButton 
                        content={content}
                        nextId={nextId}
                        selectedTags={selectedTags}
                        title={title}
                    /> 
                </Flex>
            </Content>
        </Flex>
    )
}
