import { useEffect, useRef } from "react"

const areEqual = (prevDeps, nextDeps) => {
    if (prevDeps === null) return false;
    if (prevDeps.length !== nextDeps.length) return false;

    for (let i = 0; i < prevDeps.length; i++) {
        if (prevDeps[i] !== nextDeps[i]) {
            return false;
        }
    }
    return true;
}

const useCustomMemo = (callback, dependencies) => {

    // variable/ state => to store cached values
    const memoizedRef = useRef(null);
    //  changes in dep
    if (!memoizedRef.current || !areEqual(memoizedRef.current.dependencies, dependencies)) {
        memoizedRef.current = {
            value: callback(),
            dependencies
        }
    }
    // clean up logic
    useEffect(() => {
        return () => {
            memoizedRef.current = null;
        }
    }, [])


    //    return the memoized value (if any)
    return memoizedRef.current.value;

}

export default useCustomMemo

