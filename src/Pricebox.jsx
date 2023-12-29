import "./Pricebox.css"

function Pricebox({discount,price}){
    return(
        <div className="Pricebox">
            <p><sup>&#8377;</sup> <s>{price}</s></p>
            <p><sup>&#8377;</sup>{price-(price*discount/100)}</p>
        </div>
    );
};

export default Pricebox;