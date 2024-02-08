import { FileAddOutlined, FileTextOutlined, StarOutlined } from '@ant-design/icons';
import { Menu } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';

export const NavBar = () => {

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
        }
    ];

    return (
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            items={items}
            style={{
                flex: 1,
                minWidth: 0,
            }}
        />
    )
}