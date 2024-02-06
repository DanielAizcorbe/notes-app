import { StarFilled } from '@ant-design/icons';
import { Button, Popover } from 'antd'
import React from 'react'

const BotonFav = () => {

    const content = "Agregar a favoritos";

    return (
        <Popover content={content} placement='top'>
            <Button
                shape='circle'
                size='large'
                icon={<StarFilled />}
            />
        </Popover>
    )
}

export default BotonFav
