import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        // document.title = title;
        document.title = `${title} - Travel World `
    }, [title])
}

export default useTitle;