import React, { useState } from 'react'
import { BodyPage } from '../utils/BodyPage'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import InputTitle from '../CrearNota/content/InputTitle'
import { Button, Divider, Flex } from 'antd'
import TagSelect from '../Home/content/tags/TagSelect'
import { TextNewNote } from '../CrearNota/content/TextNewNote'
import { CrearTag } from '../Home/content/tags/CrearTag'
import { SaveOutlined } from '@ant-design/icons'
import { editNote } from '../../redux/slices/notasSlice'

export const EditarNota = () => {

    const { id } = useParams();
    const nota = useSelector(state => state.notas).find(n => n.id == id);
    const tags = useSelector(state => state.tags);

    const [title, setTitle] = useState(nota.title);
    const [content, setContent] = useState(nota.content);
    const [selectedTags, setSelectedTags] = useState(tags.filter(t => nota.tags.some(i => i === t.id)));

    const [openTagSelect, setOpenTagSelect] = useState(false);

    const [tagName, setTagName] = useState("");

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

    const dispatch = useDispatch();
    const navegar = useNavigate();

    const save = () => {
        const payload = {
            content: content,
            tags: selectedTags.map(t => t.id),
            id: id,
            title: title
        };

        dispatch(editNote(payload));
        navegar("/notes");
    }

    return (
        <BodyPage selectedSection={1}>
            <Flex
                vertical
                align='center'
                justify='center'
                style={{ height: "100%", border: "1px solid #d9d9d9", borderRadius: "10px", padding: "1rem " }}
            >
                <InputTitle
                    changeTitle={setTitle}
                    title={title}
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
                <Button
                    type='primary'
                    icon={<SaveOutlined />}
                    style={{ width: "8rem" }}
                    onClick={save}
                >
                    Guardar
                </Button>
            </Flex>
        </BodyPage>
    )
}
