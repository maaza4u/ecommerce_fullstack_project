import "./Products.scss";
// import prod from '../../assets/products/earbuds-prod-1.webp';
import Product from "./Product/Product";

const Products = ({innerPage, headingText,products}) => { 
    return (
    
        <div className="products-container">
            {!innerPage && 
        <div className="sec-heading">{headingText}</div>} {/*here props passing for changing the header line text */}
        <div className={`products ${innerPage ? "innerPage" : ""}`}>
          {products?.data?.map((item) => (
             <Product 
             key = {item.id} 
             id ={item.id} 
             data = {item.attributes}/>   
          ))}
            
            
          </div>

    </div>
    );
}

export default Products;
