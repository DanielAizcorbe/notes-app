import Search from 'antd/es/input/Search'
import React from 'react'

export const SearchBar = ({}) => {

    const handleSearch = (e) => {

    }

    const styles = {
        width: "40%",

    };

    return (
        <Search
            placeholder="input search text"
            onSearch={() => {}}
            enterButton
            style={styles}
        />
    )
}
