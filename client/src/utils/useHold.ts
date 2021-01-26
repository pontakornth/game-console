import { Ref } from "preact/hooks";
function useHold(
    func: (...args: any) => void,
    intervalRef: Ref<NodeJS.Timeout>,
    interval: number
) {
    const handleClick = () => {
        intervalRef.current = setInterval(func, interval);
    };
    const handleUnclick = () => clearInterval(intervalRef.current);
    return [handleClick, handleUnclick];
}

export default useHold;
