import { Tag } from 'antd'
import React from 'react'

export const ListaTags = ({ tags }) => {
    return (
        <div>
            {
                tags.map(t =>
                    <Tag key={t.id} color={t.color}>
                        {t.label}
                    </Tag>)
            }
        </div>
    )
}
