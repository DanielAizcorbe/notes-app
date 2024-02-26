import { FileAddOutlined, FileTextOutlined, StarOutlined, TagsOutlined } from '@ant-design/icons';
import { Menu } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';

export const NavBar = ({ selectedSection }) => {

    const items = [
        {
            key: 1,
            label: <Link to={"/notes"}>
                Notas
            </Link>,
            icon: <FileTextOutlined />
        },
        {
            key: 2,
            label: <Link to={"/favourites"}>
                Favoritos
            </Link>,
            icon: <StarOutlined />
        },
        {
            key: 3,
            label: <Link to={"/notes/new"}>
                Crear Nota
            </Link>,
            icon: <FileAddOutlined />
        },
    ];

    return (
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[selectedSection]}
            items={items}
            style={{
                flex: 1,
                maxWidth: "1300px",
                width: "100%",
            }}
        />
    )
}
