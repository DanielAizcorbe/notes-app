import { Flex } from 'antd'
import React from 'react'
import TagSelect from '../tags/TagSelect'
import { SearchBar } from './SearchBar'
import { useSelector } from 'react-redux'

export const Filters = ({ handleSelectedTags, selectedTags }) => {

    const tags = useSelector(state => state.tags);

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
            />
            <SearchBar
            />
        </Flex>
    )
}
