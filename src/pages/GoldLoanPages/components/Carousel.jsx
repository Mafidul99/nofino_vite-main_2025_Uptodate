import React from 'react';
const Carousel = ({ items }) => {


    return (
        <div className="flex items-center justify-center w-full py-4 my-4">
            <div className="flex-wrap justify-between max-w-[1200px] w-full items-center">
                <div class="flex w-[100%] font-roboto">
                    <div class="owl-carousel owl-theme grid-cols-1 gap-2" >
                        {items.map((item, idx) => (
                            <div key={idx} className="p-2">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="object-cover w-full h-48 rounded-lg"
                                />
                                <h3 className="mt-2 text-lg font-semibold text-center dark:text-white">
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
