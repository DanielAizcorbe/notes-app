import TextArea from 'antd/es/input/TextArea'
import React, { useState } from 'react'

export const TextNewNote = ({ text, changeContent }) => {

    const styles = {
        width: '100%',
        minHeight: "400px",
        height: "100%",
    };

    const handlePressEnter = (e) => {
        const currentLineCount = (text.match(/\n/g) || []).length + 1;

        const maxLineCount = 15;

        if (currentLineCount >= maxLineCount) {
            e.preventDefault();
        }
    };

    const onChange = (e) => {
        changeContent(e.target.value);
    }
    return (
        <>
            <TextArea
                style={styles}
                variant='borderless'
                onChange={onChange}
                autoSize={{
                    maxRows: 15
                }}
                showCount
                maxLength={300}
                onPressEnter={handlePressEnter}
            />
        </>
    )
}
