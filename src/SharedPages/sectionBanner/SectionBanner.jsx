import PropTypes from 'prop-types';

const SectionBanner = ({ tittle }) => {
    return (
        <div className="hero h-[50vh] bg-center " style={{ backgroundImage: 'url(https://i.ibb.co/WnHBQrp/mujan.jpg)' }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{tittle}</h1>
                </div>
            </div>
        </div>
    );
};

SectionBanner.propTypes = {
    tittle: PropTypes.string
};

export default SectionBanner;