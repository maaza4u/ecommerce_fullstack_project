import { useNavigate } from 'react-router-dom'
import "./Category.scss"; // Make sure the path to your SCSS file is correct


import cat1 from '../../../assets/category/cat1.jpg'; // Verify the path to your image
import cat2 from '../../../assets/category/cat2.jpg';
import cat3 from '../../../assets/category/cat3.jpg';
import cat4 from '../../../assets/category/cat4.jpg';

const Category = ({categories}) => {  //This categories prop passing from the home.jsx file 
    const navigate = useNavigate();
    return (
        <div className="shop-by-category">
        <div className="categories">
            {categories?.data?.map((item) => (
                <div
                    key={item.id}
                    className="category"
                    onClick={() => navigate(`/category/${item.id}`)}
                >
                    <img
                       src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt=""
                    />
                </div>
            ))}
        </div>
    </div>
    );
};

export default Category; // Export your component if necessary

