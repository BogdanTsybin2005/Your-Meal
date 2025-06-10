import { create } from 'zustand';



interface DeliveryMenuState {
    isMenuOpened: boolean;
    openMenu: () => void;
    closeMenu: () => void;
}

const useDeliveryMenuStore = create<DeliveryMenuState>((set) => ({
    isMenuOpened: false,
    openMenu: () => set({ isMenuOpened: true }),
    closeMenu: () => set({ isMenuOpened: false }),
}));

export default useDeliveryMenuStore;
