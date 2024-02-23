import { useRef } from 'react';

export function useResize() {
    const ref = useRef();

    return { ref };
}
