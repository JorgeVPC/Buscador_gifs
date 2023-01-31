import { useState } from "react"
import {AddCategory,GifGrid} from "./components"

export  const GifExpertApp=()=> {
    const [categories, setCategories] = useState(['One Punch']);
    const onAddCategory=(onNewCategory)=>{
      // para verificar valores repetidos
      if(categories.includes(onNewCategory)) return;
       setCategories([onNewCategory,...categories])
    }

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory 
        /* setCategories={setCategories}  */
          onNewCategory={(event)=> onAddCategory(event)}
          currentCategory={categories}
        />  

        {categories.map((category)=>{
            return (
              <GifGrid key={category} category={category}/>
            )
        })}


    </>
  )
}
