import { Flex } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React from 'react'
import TagSelect from './TagSelect'
import Title from 'antd/es/typography/Title'

export const Filters = ({tags, handleSelectedTags, selectedTags}) => {



    return (
        <Sider
            width={"30%"}
        >
            <Flex
                vertical
                style={{padding: "1rem 1.5rem"}}
            >   
                <Title level={3}>
                    Filtros
                </Title>
                <TagSelect 
                    tags={tags}
                    handleSelectedTags={handleSelectedTags}
                    selectedTags={selectedTags}
                />
            </Flex>
        </Sider>
    )
}
