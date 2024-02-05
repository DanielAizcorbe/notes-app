import { Select, Tag } from 'antd'
import React, { useState } from 'react'

const TagSelect = () => {

    const tags2 = [
        {
            label: "computer",
            color: "red"
        },
        {
            label: "language",
            color: "green"
        }
    ];

    const [selected, setSelected] = useState([]);
    
    const tagRender = (props) => {
        const { label, closable, onClose } = props;
        const color = tags2.find(tag => tag.label === label)?.color;
        const onPreventMouseDown = (event) => {
            event.preventDefault();
            event.stopPropagation();
        };

        const unselectTag = () => {
            const newSelected = selected.filter(t => t.label !== label);
            setSelected(newSelected);
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
        const selectedOptions = options.map(label => tags2.find(t => t.label === label));
        setSelected(selectedOptions);
    }

    return (
        <Select
            mode='tags'
            tagRender={tagRender}
            options={tags2.map(t => ({ label: t.label, value: t.label }))}
            placeholder="Selecciona tus tags"
            onChange={handleChange}
            value={selected.map(tag => tag.label)}
        />
    );
}

export default TagSelect
