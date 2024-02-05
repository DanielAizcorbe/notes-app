import { Menu } from 'antd';
import React, { useState } from 'react'



export const NavBar = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const setNextPage = (e) => {
        setCurrentPage(e.key)
    }

    const items = [
        {
            key:1,
            label:"Notas",
            icon: <></>
        },
    ];

    const styles = {
        height: "100%",
        backgroundColor: "inherit",
    };

    return (
        <Menu
            onClick={setNextPage}
            selectedKeys={[currentPage]}
            mode='horizontal'
            items={items}
            style={styles}
        />
    )
}
