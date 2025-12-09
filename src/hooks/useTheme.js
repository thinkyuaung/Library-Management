import React, { use } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

export default function useTheme() {
    let contexts = use(ThemeContext);
    
    if(contexts === undefined){
        throw new Error("useTheme must be used within a ThemeContextProvider");
    }
    return contexts;
}
