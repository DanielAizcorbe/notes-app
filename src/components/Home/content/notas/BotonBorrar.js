import { DeleteFilled } from '@ant-design/icons';
import { Button, Popover } from 'antd';
import React from 'react'

export const BotonBorrar = () => {

    const content = "Borrar";

    return (
        <Popover placement='topLeft' content={content}>
            <Button
                shape='circle'
                size='large'
                icon={<DeleteFilled />}
            />
        </Popover>
    );
}
