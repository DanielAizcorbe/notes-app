import { Flex } from 'antd'
import React from 'react'
import TagSelect from './TagSelect'
import { SearchBar } from './SearchBar'

export const Filters = ({ tags, handleSelectedTags, selectedTags }) => {

    const styleContainer = {
        padding: "1rem 1.5rem",
        borderRadius: "10px",
        border: "1px solid black",
    };

    return (
        <Flex
            horizontal
            style={styleContainer}
            justify="flex-start"
            align='center'
            gap={"1rem"}
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
