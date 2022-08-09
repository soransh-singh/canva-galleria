import "./style.css"

export default function Viewer({current, ...props}){
    return(
            <div>
                {current}
            </div>
    )
}