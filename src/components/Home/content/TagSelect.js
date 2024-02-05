import { Select, Tag } from 'antd'
import React from 'react'

const TagSelect = ({ tags, handleSelectedTags, selectedTags }) => {

    const tagRender = (props) => {
        const { label, closable, onClose } = props;
        const color = tags.find(tag => tag.label === label)?.color;
        const onPreventMouseDown = (event) => {
            event.preventDefault();
            event.stopPropagation();
        };

        const unselectTag = () => {
            const newSelected = selectedTags.filter(t => t.label !== label);
            handleSelectedTags(newSelected);
        }

        return (
            <Tag
                color={color}
                onMouseDown={onPreventMouseDown}
                closable={true}
                onClose={unselectTag}
                style={{
                    marginRight: 3,
                }}
                key={label}
            >
                {label}
            </Tag>
        );
    };

    const handleChange = (options) => {
        const selectedOptions = options.map(label => tags.find(t => t.label === label));
        handleSelectedTags(selectedOptions);
    }

    const stylesContainer = {
        width: "20%",
    };

    return (
        <Select
            allowClear
            mode='tags'
            tagRender={tagRender}
            options={tags.map(t => ({ label: t.label, value: t.label }))}
            placeholder="Selecciona tus tags"
            onChange={handleChange}
            value={selectedTags.map(tag => tag.label)}
            style={stylesContainer}
        />
    );
}

export default TagSelect
