import React, { useState, useRef} from "react";

export default function useScrollState(initialValue) {
    
    const [scrollState, setScrollState] = useState(initialValue);
    const scrollRef = useRef(scrollState);

    const setCurrentScrollState = value => {
        scrollRef.current = value;
        setScrollState(value);
    };

    return [scrollRef, setCurrentScrollState];
}