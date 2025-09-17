import smalCardLinks from '../../api/smalCardLinks.json';


const OurService = () => {


    return (
        <>
            <section>
                <div className='flex items-center justify-center mt-[40px] w-ful '>
                    <div className='flex flex-wrap justify-between items-center mx-auto max-w-[1200px] w-full px-4'>
                        <div className='flex w-[100%] font-roboto text-[30px] tracking-[.9px] font-[200] dark:text-[#D6D6D6]'>
                            <span>Safeguard your assets and</span>
                        </div>
                        <div className='flex w-[100%] font-roboto text-[40px] tracking-[.9px] font-[800] mt-[-17px] dark:text-[#D6D6D6] uppercase'>
                            <span>Grow Your Wealth</span>
                        </div>
                        <div className='flex w-[100%] font-roboto text-[16px] tracking-[.45px] font-[300] dark:text-[#D6D6D6] mt-[4px]'>
                            <span>Wealth management and insurance solutions for a secure tomorrow</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full  mt-[40px]">
                    <div className='flex flex-wrap justify-between items-center mx-auto max-w-[1200px] w-full px-4'>
                        <div className="w-[100%] grid gap-3 grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                            {smalCardLinks.map((smalCardlink) => {
                                const { id, name, image } = smalCardlink;
                            return (
                            <div className='items-center animate-slide-fade' key={id}>
                                <div className="transition duration-300 hover:scale-105">
                                    <div class="p-6 bg-slate-50 dark:bg-gray-700 border-gray-200 dark:border-0 rounded-lg shadow-md dark:border-gray-700 ">
                                        <div className="bg-cover w-[100%] items-center justify-center bg-no-repeat">
                                            <img src={image} alt="" className='w-[100%] h-auto rounded-md' />                                               
                                        </div>                                        
                                        <hr  className='w-full py-2 mb-2 bg-transparent border-b-2 border-gray-400 border-dashed border-t-transparent'/> 
                                        <p class="mb-3 text-gray-400 text-[15px] font-[500] font-roboto items-center text-center dark:text-[#D6D6D6]">
                                            {name}
                                        </p>

                                    </div>
                                </div>
                            </div>
                            );
                             })}

                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default OurService;