import React, {FC, ReactNode, memo} from "react";
import './Wrapper.scss';



type WrapperType = {
    children: ReactNode;
}

const Wrapper: FC<WrapperType> = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="wrapper">
            {children}
        </div>
    )
}


export default memo(Wrapper);
