import { create } from 'zustand';



interface DeliveryMenuState {
    isMenuOpened: boolean;
    toggleMenu: () => void;
}

const useDeliveryMenuStore = create<DeliveryMenuState>((set, get) => ({
    isMenuOpened: false,
    toggleMenu: () => {
        set({ isMenuOpened: !get().isMenuOpened });
    },
}));

export default useDeliveryMenuStore;
