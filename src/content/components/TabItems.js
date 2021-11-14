import React from 'react'

export default function TabItems({
    index,
    tabContent,
    tabType,
    active,
    handleTabItem,
    handleType}) {
    return (
        <li className={active ? 'products_tab-item '+active : 'products_tab-item'}
            onClick={() => {
                handleType(tabType);
                handleTabItem(index)
            }}>
            {tabContent}
        </li>
    )
}
