import Search from 'antd/es/input/Search'
import React from 'react'

export const SearchBar = ({ changeSearch }) => {

    const handleSearch = (value) => {
        changeSearch(value);
    }

    const styles = {
        width: "40%",
    };

    return (
        <Search
            placeholder="Buscar por título"
            onSearch={handleSearch}
            enterButton
            style={styles}
        />
    )
}
