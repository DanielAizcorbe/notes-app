import { StarFilled } from '@ant-design/icons';
import { Button, Popover } from 'antd'
import React from 'react'

const BotonFav = ({ toggleFavourite, favourite }) => {

    const styles = {
        color: favourite ? "gold" : "black",
    };

    return (
        <Popover
            content="Favoritos"
            placement='top'
            trigger="hover"
        >
            <Button
                type='text'
                size='large'
                icon={<StarFilled />}
                onClick={toggleFavourite}
                style={styles}
            />
        </Popover>
    )
}

export default BotonFav
