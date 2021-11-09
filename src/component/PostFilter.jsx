import React from 'react';
import MsImput from "./UI/imput/MsImput";
import MySelect from "./UI/select/MsSelect";

const PostFilter = ({filter,setFilter}) => {
    return (
        <div>
            <MsImput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск..."
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort=>setFilter({...filter, sort:selectedSort})}
                defaultValue="Сортировка"
                option={[
                    {value:'title',name:'По Додо '},
                    {value:'body',name:'По птице '},
                ]}
            />
        </div>
    );
};

export default PostFilter;