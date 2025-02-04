import {FC, ReactNode} from "react";
import './Main.scss';



type MainType = {
    children: ReactNode;
}

const Main: FC<MainType> = ({children}) => {
    return (
        <div className="main">
            {children}
        </div>
    )
}

export default Main;
