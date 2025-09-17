

const BgShapeImage = () => {
  return (
    <>
    <div className='w-full h-[100px] flex items-center justify-center bgshape__image relative shadow-xl'>
       <div class="absolute inset-0 bg-[#9ca3af6e] opacity-60 dark:bg-gray-700"> </div>
        <div className='bg-transparent flex flex-wrap items-center mx-auto max-w-[1200px] px-4'>
              <div className='flex w-full font-bold font-roboto text-[27px] tracking-[30px] sm:text-[19px]
                 uppercase opacity-[35%] text-green-800 justify-center justify-items-center text-center dark:text-[#e6e6e6]'>
                  Banker to Every Business
              </div>
        </div>
    </div>
    </>
  )
}

export default BgShapeImage;