import { useEffect } from "react"

// Update the title based on route

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}:: Field Nation Feature Review`;
    }, [title])
};

export default useTitle;
