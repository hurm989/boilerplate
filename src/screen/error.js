import { useEffect, useState } from "react"
import { getData } from "../cofig/firebaseMethod"
function Error() {
    const [items, getItems] = useState([])
    useEffect(() => {
        getData("Users").then((data) => {
            getItems(data)
        })
    }, [])
    return <>
        <h1>DashBoard</h1>
        {
            items.map((e, i) => {
                return <>
                    <h1>{e.email}</h1>
                </>
            })
        }
    </>
}
export default Error