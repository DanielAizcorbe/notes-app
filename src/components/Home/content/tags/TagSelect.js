import { Select } from 'antd'
import React from 'react'
import { tagRender } from './tagRender';

const TagSelect = ({ tags, handleSelectedTags, selectedTags }) => {

    const displayTag = (props) => {
        const { label, _closable, _onClose } = props;
        return tagRender(tags, label, handleSelectedTags, selectedTags);
    };

    const handleChange = (options) => {
        const selectedOptions = options.map(label => tags.find(t => t.label === label));
        handleSelectedTags(selectedOptions);
    }

    const stylesContainer = {
        width: "40%",
    };

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
        />
    );
}

export default TagSelect
