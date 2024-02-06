import { TagFilled } from '@ant-design/icons'
import { Button, Popover } from 'antd'
import React from 'react'

export const BotonTag = () => {

    const content = "Gestionar tags";

    return (
        <Popover
            content={content}
            placement='topLeft'
        >
            <Button
                shape='circle'
                size='large'
                icon={<TagFilled />}
                type='default'
            />
        </Popover>
    )
}
