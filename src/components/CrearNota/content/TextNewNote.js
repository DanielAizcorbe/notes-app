import TextArea from 'antd/es/input/TextArea'
import React from 'react'

export const TextNewNote = ({ changeContent }) => {

    const styles = {
        width: '100%',
        maxHeight: "1000px",
        minHeight: "400px",
        height: "100%",
        resize: "none",
    };

    const onChange = (e) => {
        changeContent(e.target.value);
    }
    return (
        <TextArea
            style={styles}
            variant='borderless'
            onChange={onChange}
        />
    )
}
