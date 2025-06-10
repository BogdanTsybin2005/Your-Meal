import { useState, useEffect } from "react";



export default function useWindowWidth(): number {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    
    useEffect(() => {
        const handleWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        }
        
        handleWindowWidth();

        window.addEventListener('resize', handleWindowWidth);
        return () => {
            window.removeEventListener('resize', handleWindowWidth);
        }
    }, [windowWidth]);

    return windowWidth;
}
