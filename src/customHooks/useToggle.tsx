import {useState} from "react";

export const useToggle =() => {
    const [toggle, setToggle] = useState<boolean>(false)

    const isToggled =()=> {
        setToggle(!toggle);
    }

    return {toggle, isToggled};
}