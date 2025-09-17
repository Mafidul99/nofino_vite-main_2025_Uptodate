import MyCarouselOwlLoan from "./MyCarouselOwlLoan";


export const LoanSerCarousel = () => {
    return (
        <>
        <section>
            <div className='flex items-center justify-center mt-[40px] w-ful '>
                <div className='flex flex-wrap justify-between items-center mx-auto max-w-[1200px] w-full px-4'>
                    <div className='flex w-[100%] font-roboto text-[30px] tracking-[.9px] font-[200] dark:text-[#D6D6D6]'>
                        <span>Make the Most of</span>
                    </div>
                    <div className='flex w-[100%] font-roboto dark:text-[#D6D6D6] text-[40px] tracking-[.9px] font-[800] mt-[-17px] uppercase'>
                        <span>Our Financial Solutions</span>
                    </div>
                    <div className='flex w-[100%] font-roboto dark:text-[#D6D6D6] text-[16px] tracking-[.45px] font-[300] mt-[4px]'>
                        <span>Explore our range of banking products to achieve your business goals</span>
                    </div>
                </div>
            </div>
            <div className="oveoverflow-hidden">
            <MyCarouselOwlLoan/>  
            </div>
        </section>
                       
        </>
    )
}
export default LoanSerCarousel;