import { Select } from 'antd';
import React, { useState } from 'react';
import { tagRender } from './tagRender';

const TagSelect = ({ tags, handleSelectedTags, selectedTags, width, borderless, body, open, setOpen }) => {

    const displayTag = (props) => {
        const { label, _closable, _onClose } = props;
        return tagRender(tags, label, handleSelectedTags, selectedTags);
    };

    const handleChange = (selectedLabels) => {
        const selectedOptions = tags.filter(tag => selectedLabels.includes(tag.label));
        handleSelectedTags(selectedOptions);
    };


    const stylesContainer = {
        width: width ? width : "40%",
    };

    const defaultMenu = menu => {return menu}

    return (
        <Select
            allowClear
            mode='tags'
            tagRender={displayTag}
            options={tags.map(t => ({ label: t.label, value: t.label }))}
            placeholder="Selecciona tus tags"
            onChange={handleChange}
            value={selectedTags.map(tag => tag.label)}
            style={stylesContainer}
            variant={borderless ? "borderless" : "outlined"}
            showSearch={false}
            open={open}
            onDropdownVisibleChange={(visible) => {setOpen(visible)}}
            dropdownRender={body || defaultMenu}
        />
    );
};

export default TagSelect;