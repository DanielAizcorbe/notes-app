import { StarFilled } from '@ant-design/icons';
import { Button, Popover } from 'antd'
import React from 'react'

const BotonFav = ({toggleFavourite, favourite}) => {

    const content = "Agregar a favoritos";

    const styles = {
        color: favourite ? "#1677ff" : "inherit",
    };

    return (
        <Popover content={content} placement='top'>
            <Button
                shape='circle'
                size='large'
                icon={<StarFilled />}
                onClick={toggleFavourite}
                style={styles}
            />
        </Popover>
    )
}

export default BotonFav
