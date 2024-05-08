import {useState} from "react";

export const useStorage =()=>{
    const [save, setSave] = useState<number>(0)

    const isSave = () => {
        setSave(prevState => prevState += 1)
    }

    return {save, isSave};
}

