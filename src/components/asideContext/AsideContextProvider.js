import React, {useContext, useState} from 'react';

import Aside from "../layout/aside/Aside";

export const AsideContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const AsideContextProvider = ({ children }) => {
    const [folderList, setFolderList] = useState([]);

    // useEffect(() => {
    //     setFolderList(list);
    // });

    const triggerAside = list => {
        setFolderList(list);
    };

    return (
        <AsideContext.Provider value={{folderList, triggerAside}}>
            {children}
        </AsideContext.Provider>
    );
};

export const useAside = () => useContext(AsideContext);
