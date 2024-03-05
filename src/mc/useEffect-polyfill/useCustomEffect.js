import { useRef } from "react"

const useCustomEffect = (callBack, dependencies) => {
    
    // useRef values persists even through rerenders of comp 
    const isFirstRender = useRef(true); 
    const prevDependencies = useRef([]); 

    // first render case
    if(isFirstRender.current) {
        isFirstRender.current = false;
        const cleanUp = callBack();
        return () => {
            if(cleanUp && typeof cleanUp === 'function'){
                cleanUp();
            }
        };
    }

    // dependency Changes and no dependencies
    const dependenciesChanged = dependencies ? JSON.stringify(dependencies) !== JSON.stringify(prevDependencies.current): true ;

    if(dependenciesChanged){
        // invokes in two cases- 1: deps changed, 2- no deps array
        // callBack();
        const cleanUp = callBack();
        if(cleanUp && typeof cleanUp === 'function' && dependencies){
            cleanUp();
        }

    }
    // true useful when we have no dependency array and we need to it every single time

    // cleanUp

    prevDependencies.current = dependencies || [];
}

export default useCustomEffect;