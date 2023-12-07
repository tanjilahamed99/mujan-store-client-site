import SectionBanner from "../../SharedPages/sectionBanner/SectionBanner";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { GiGunStock } from "react-icons/gi";

const About = () => {
    return (
        <div className="mb-10">
            <SectionBanner tittle={'About us'}></SectionBanner>
            <div className="container mx-auto">
                <h2 className="mt-10">About MUJAN STORE -----</h2>
                <div className="flex justify-between mt-4">
                    <h2 className="text-3xl font-semibold w-[40%]">
                        Let us change the way you think about technology
                    </h2>
                    <p className="w-[60%]">
                        Libero porta ornare sociosqu amet lacinia. Maximus duis senectus dictum aenean conubia justo laoreet. Parturient montes sit iaculis congue quisque eget torquent blandit dolor. Ac porttitor iaculis tellus ex risus donec lacinia nam eros. Consectetur elementum natoque risus est diam inceptos.
                    </p>
                </div>
                <div className="my-10 flex gap-20">
                    <img className="w-1/2 h-[400px]" src="https://i.ibb.co/WnHBQrp/mujan.jpg" alt="" />
                    <div className="w-1/2">
                        <h2 className="text-3xl font-semibold">
                            Per pede iaculis felis lobortis maecenas ante sollicitudin gravida ultrices. Quisque posuere molestie letius consectetuer aenean euismod mollis.
                        </h2>
                        <div className="my-5 flex gap-4">
                            <div className="">
                                <FaCompressArrowsAlt className="text-4xl"></FaCompressArrowsAlt>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold">Vision</h2>
                                <p className="">Nulla tellus ligula consectetuer facilisi quam fermentum. Tempor scelerisque parturient cubilia maximus ultricies.</p>
                            </div>
                        </div>
                        <div className=" flex gap-4">
                            <div>
                                <GiGunStock className="text-4xl"></GiGunStock>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold">Mission</h2>
                                <p className="">Nulla tellus ligula consectetuer facilisi quam fermentum. Tempor scelerisque parturient cubilia maximus ultricies.</p>
                            </div>
                        </div>
                        <button className="btn btn-outline mt-5 ">Discover More</button>
                    </div>
                </div>
            </div>
            <div className="my-20">
                <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: 'url(https://i.ibb.co/NVC2Zzh/images-7.jpg)' }}>
                    <div className="hero-overlay  bg-opacity-70"></div>
                    <div className="hero-content  text-neutral-content">
                        <div className="flex items-center justify-between gap -20">
                            <div className="w-1/2">
                                <h3 className="text-sm font-bold flex items-center gap-2">TRUSTED COMPANY <hr  className="w-20"/></h3>
                                <p className="text-6xl font-bold pr-20 mt-5">Technology is only as good as the people behind it</p>
                            </div>
                            <div className="w-1/2">
                                <p className="mb-5 text-xl">Quam accumsan faucibus nulla facilisi aptent lacinia. Quis condimentum hendrerit velit est nulla. Class ornare turpis fermentum cras feugiat vestibulum volutpat.</p>
                                <button className="btn btn-primary mt-5">Discover More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;