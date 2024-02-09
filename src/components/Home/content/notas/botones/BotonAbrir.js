import { EditFilled } from "@ant-design/icons";
import { Button, Popover } from "antd";
import React from "react";


const BotonAbrir = ({openNote}) => {


    return (
        <Popover
            content="Abrir"
            placement='top'
            trigger="hover"
        >
            <Button
                type='text'
                size='large'
                icon={<EditFilled />}
                onClick={openNote}
            />
        </Popover>
    )
}

export default BotonAbrir;