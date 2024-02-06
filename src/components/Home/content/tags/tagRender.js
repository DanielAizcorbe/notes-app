import { Tag } from "antd";

export const tagRender = (tags, label, handleSelectedTags, selectedTags) => {

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
                    marginBottom: 3,
                }}
                key={label}
            >
                {label}
            </Tag>
        );
}