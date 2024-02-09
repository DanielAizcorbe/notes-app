import TextArea from 'antd/es/input/TextArea'
import React from 'react'

export const TextNewNote = ({ changeContent }) => {

    const styles = {
        width: '100%',
        height: "60vh",
        resize: "none",
    };

    const onChange = (e) => {
        changeContent(e.target.value);
    }
    return (
        <TextArea
            autoSize={{maxRows: "15"}}
            style={styles}
            variant='borderless'
            onChange={onChange}
        />
    )
}
