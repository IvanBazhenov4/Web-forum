import React from 'react';
import MsInput from "./UI/input/MsInput";
import MySelect from "./UI/select/MsSelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MsInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск..."
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка"
                option={[
                    {value: 'title', name: 'По Додо '},
                    {value: 'body', name: 'По птице '},
                ]}
            />
        </div>
    );
};

export default PostFilter;