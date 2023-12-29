import "./Infobox.css"

function Infobox({title, features}){
    return(
        <div className="Infobox">
            <h3>{title}</h3>
            <div className="featurebox">
            {features.map((feature)=><li>{feature}</li>)}
            </div>
        </div>
    )
}

export default Infobox;