import { useSelector } from 'react-redux';
import { BodyPage } from '../utils/BodyPage'
import { useState } from 'react';
import { CrearTag } from '../Home/content/tags/CrearTag';
import { Divider, Flex } from 'antd';
import TagSelect from '../Home/content/tags/TagSelect';
import InputTitle from './content/InputTitle';
import { TextNewNote } from './content/TextNewNote';
import { CreateButton } from './content/CreateButton';

const CreateNote = () => {

    const nextId = Math.max(...useSelector(state => state.notas).map(n => n.id)) + 1;

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [selectedTags, setSelectedTags] = useState([]);

    const [openTagSelect, setOpenTagSelect] = useState(false);

    const [tagName, setTagName] = useState("");

    const tags = useSelector(state => state.tags);

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
        <BodyPage selectedSection={3}>
            <Flex
                vertical
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
                <CreateButton
                    content={content}
                    nextId={nextId}
                    selectedTags={selectedTags}
                    title={title}
                />
            </Flex>
        </BodyPage>
    )
}

export default CreateNote
