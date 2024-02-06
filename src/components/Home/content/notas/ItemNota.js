import React from 'react'
import Title from 'antd/es/typography/Title';
import { Flex, List } from 'antd'
import { BotonTag } from './BotonTag';
import BotonFav from './BotonFav';
import { BotonBorrar } from './BotonBorrar';

const ItemNota = ({ id, className, title, handleSelectedTags, selectedTags, tags }) => {
    return (
        <List.Item className={className}>
            <Flex
                vertical
            >
                <Title 
                    level={3}
                    style={{margin: 0, padding: "0.5rem 0"}}
                >
                    {title}
                </Title>
            </Flex>
            <Flex
                gap={"1rem"}
            >
                <BotonTag />
                <BotonFav />
                <BotonBorrar />
            </Flex>
        </List.Item>
    )
}

export default ItemNota
