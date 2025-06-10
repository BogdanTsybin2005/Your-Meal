import { createContext, useContext, ReactNode, useMemo } from 'react';
import { StoreApi, UseBoundStore } from 'zustand';
import useFoodStore from './useFoodStore';



const StoreContext = createContext<UseBoundStore<StoreApi<ReturnType<typeof useFoodStore>>> | null>(null);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
    const store = useMemo(() => useFoodStore, []);
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};


export const useStore = () => {
    const context = useContext(StoreContext);
    if (!context) throw new Error('useStore must be used within StoreProvider');
    return context;
};
