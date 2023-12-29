import Product from "./Product.jsx"
import "./ProductsTab.css"

function ProductsTab(){
    return (
    <div className="ProductsTab">
    <Product title="Logitech Mx Master 35" features={["8000 DPI","5 Programmable buttons"]} discount={5} price={12495}/>
    <Product title="Appe Pencil V2" features={["Intutive touch surface","Designed for Ipad Pro"]} discount={5} price={12495}/>
    <Product title="Logitech Mx Master 35" features={["8000 DPI","5 Programmable buttons"]} discount={5} price={12495}/>
    </div>
    );
}

export default ProductsTab