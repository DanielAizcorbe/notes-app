import { Tag } from 'antd'
import React from 'react'

export const ListaTags = ({ tags }) => {
    return (
        <div style={{minHeight: "22px"}}>
            {
                tags.map(t =>
                    <Tag key={t.id} color={t.color}>
                        {t.label}
                    </Tag>)
            }
        </div>
    )
}
