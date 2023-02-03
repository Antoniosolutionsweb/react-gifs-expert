import React from 'react';
import { useState } from 'react';
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['naruto']);
    const onAddCategory = (onNewCategory)=>{
      if( categories.includes(onNewCategory)) return alert('La categoria ya existe ');

      setCategories([onNewCategory, ...categories ])
    }
  return (
    <>
        <h1>Gif App</h1>
        <AddCategory
          //setCategories ={setCategories}
          onNewCategory= {onAddCategory}
        />
        <ol>

          {
            categories.map((category)=>(  
              <GifGrid
                key={category}
                category={category}
              />
            ))
        }
        </ol>
    </>
  )
}

export default GifExpertApp;
