import { createContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    const navigate = (path) => {
        window.history.pushState({}, '', path);
        setCurrentPath(path);
    };

    return (
        <NavigationContext.Provider value={{ currentPath, navigate }}>
            {children}
        </NavigationContext.Provider>
    );
}

export { NavigationProvider };
export default NavigationContext;
