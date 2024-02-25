import { Flex } from 'antd'
import React, { useState } from 'react'
import TagSelect from '../tags/TagSelect'
import { SearchBar } from './SearchBar'
import { useSelector } from 'react-redux'

export const Filters = ({ handleSelectedTags, selectedTags, setSearchText }) => {

    const tags = useSelector(state => state.tags);
    const [open,setOpen] = useState(false);

    const styleContainer = {
        padding: "1rem 0",
        width: "80%",
    };

    return (
        <Flex
            style={styleContainer}
            justify="space-between"
            align='center'
        >
            <TagSelect
                tags={tags}
                handleSelectedTags={handleSelectedTags}
                selectedTags={selectedTags}
                open={open}
                setOpen={setOpen}
            />
            <SearchBar
                changeSearch={setSearchText}
            />
        </Flex>
    )
}
