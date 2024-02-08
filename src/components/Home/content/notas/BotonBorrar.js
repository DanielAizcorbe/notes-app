import { DeleteFilled } from '@ant-design/icons';
import { Button, Popover } from 'antd';
import React from 'react'

export const BotonBorrar = ({handleDelete}) => {

    const content = "Borrar";

    return (
        <Popover placement='topLeft' content={content}>
            <Button
                shape='circle'
                size='large'
                icon={<DeleteFilled />}
                onClick={handleDelete}
            />
        </Popover>
    );
}
