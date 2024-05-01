import React, {FC} from 'react';

export interface IRecipeProps {
    "id"?: number,
    "name"?: string,
    "ingredients"?: string[],
    "instructions"?: string[],
    "prepTimeMinutes"?: number,
    "cookTimeMinutes"?: number,
    "servings"?: number,
    "difficulty"?: string,
    "cuisine"?: string,
    "caloriesPerServing"?: number,
    "tags"?: string[],
    "userId"?: number,
    "image"?: string,
    "rating"?: number,
    "reviewCount"?: number,
    "mealType"?: string[]
}

type IRecipeTypeProps<T> = T & {children?: React.ReactNode}

const Recipe: FC<IRecipeTypeProps<IRecipeProps>> = ({ name, mealType, image, cuisine,  instructions},) => {


    return (
        <div>
            <h2>{name}{mealType},{cuisine}</h2>
            <img src={image} alt={name}/>
          <ul>
              {instructions?.map((value)=>(<li>{value}</li>))}
          </ul>

        </div>
    );
};

export default Recipe;