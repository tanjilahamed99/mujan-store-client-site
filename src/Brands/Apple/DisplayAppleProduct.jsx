import PropTypes from 'prop-types';

const DisplayAppleProduct = ({ apple }) => {

    const { name,brand,photo,} = apple

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{brand}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

DisplayAppleProduct.propTypes = {
    apple: PropTypes.object
};

export default DisplayAppleProduct;