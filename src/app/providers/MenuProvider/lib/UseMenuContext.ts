import { useContext } from 'react';
import { MenuContext } from '../lib/MenuContext';

export const useMenuContext = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useMenuContext must be used within MenuProvider');
    }
    return context;
};
