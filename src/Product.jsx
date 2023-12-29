import "./Product.css"
import Infobox from "./Infobox"
import Pricebox from "./Pricebox"

function Product({title, features,discount,price}) {
  return (
    <div className="Product">
      <Infobox title={title} features={features}/>
      <Pricebox discount={discount} price={price}/>
    </div>
  )
}

export default Product