import { useEffect, useState } from 'react';
import { getWindowHeight } from './tools';

function useWindowHeight() {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setHeight(getWindowHeight());
    }, [height]);

    return height;
}

export default useWindowHeight;
