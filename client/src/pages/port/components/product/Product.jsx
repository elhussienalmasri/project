
import "./product.css";

const Product = ({img,category,anch,title,href,target}) => {
  return ( 

<div className="project-card">
<div className="project-image">
    <img src={img} alt={title}/>
</div>
<div className="project-info">
    <p className="project-category">{category}</p>
    <strong className="project-title">
        <span>{title}</span>
        <a href={href} target={target} className="more-details">{anch}</a>
    </strong>
</div>
</div>
  )}

export default Product;

