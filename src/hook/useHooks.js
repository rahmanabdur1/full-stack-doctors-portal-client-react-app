import { useEffect } from "react"


const useTitle =title =>{
    useEffect(()=>{
        document.title =`${title} - Doctor-Portal`
    },[title])
}
export default useTitle;