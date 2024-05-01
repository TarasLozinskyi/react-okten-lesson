import React, {FC, useEffect, useState} from 'react';
import Recipe, {IRecipeProps} from "../recipe/Recipe";

const Recipes: FC = () => {

    const [recipes, setRecipes] = useState<IRecipeProps[]>([]);
    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
            .then(res => res.json())
            .then(({recipes}) => {
                setRecipes(recipes);
            });
    }, [])
    console.log(recipes);

    return (
        <div>
            {recipes.map(({id, image, name,cuisine,mealType,instructions}) =>

                (<Recipe key={id}  name={name} image={image} cuisine={cuisine} instructions={instructions} mealType={mealType}/>))}
        </div>
    );
}

export default Recipes;