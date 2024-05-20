import "./product.css"

const DEFAULT_ALT = "product image"

export function Product({ product }) {
  return <div className="product-container">
    <img className="product-img" src={product.img} alt={product.imgAlt ?? DEFAULT_ALT}></img>
    <div className="product-info">
      <p className="">{product.label}</p>
      <p className="">${product.price}</p>
    </div>
  </div>
}
