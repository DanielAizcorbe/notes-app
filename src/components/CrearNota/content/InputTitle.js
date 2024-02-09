import Input from 'antd/es/input/Input'
import React from 'react'

const InputTitle = ({ changeTitle }) => {

    const styles = {
        fontSize: "2rem",
    };

    const onChange = (event) => {
        changeTitle(event.target.value);
    }

    return (
        <Input
            style={styles}
            placeholder="Título"
            variant='borderless'
            onChange={onChange}
        />
    )
}

export default InputTitle
