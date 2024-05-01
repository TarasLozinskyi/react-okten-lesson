import React, {FC} from 'react';
import styles from './Character.module.css';

interface IProps{
    name: string;
    img:string

}

type IPropsType<T> = T & {children?: React.ReactNode};

const Character :FC<IPropsType<IProps>> = ({name, img, children}) => {
    return (
        <>
            <div className={styles.character}>
                <h2>{name}</h2>
                <img src={img}
                     alt={name}/>
            </div>
        </>
    );
};

export default Character;