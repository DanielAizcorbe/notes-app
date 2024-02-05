import { Flex } from 'antd'
import React from 'react'
import TagSelect from './TagSelect'
import { SearchBar } from './SearchBar'

export const Filters = ({ tags, handleSelectedTags, selectedTags }) => {

    const styleContainer = {
        padding: "1rem 0",
        width: "80%",
    };

    return (
        <Flex
            horizontal
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
