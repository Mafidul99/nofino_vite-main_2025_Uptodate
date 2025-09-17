export const ConutSection = () => {


    const counterLinks = [
            {               
                count: "25",
                counter: "K",
                name: "Happy Clients"
            },
            {                
                count: "500",
                counter: "+",
                name: "Account Number"
            },
            {                
                count: "10",
                counter: "K",
                name: "Finished Project"
            },
            {                
               count: "800",
                counter: "+",
                name: "Win Awards"
            }
            
        ]


    return (
        <div className="flex items-center justify-center relative ">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-[1200px] w-full px-4">
                <div className="flex w-full items-center justify-center gap-3 relative counter-content-container dark:bg-gradient-to-tr
                     dark:from-gray-700 dark:to-gray-500 rounded-md  sm:flex-col sm:grid-col-1">
                {counterLinks.map((countslink, index) => {
                    return (
                        <div className="w-full items-center sm:flex-col justify-center" key={index}>
                        <div className="mb-[30px] items-cente text-center border-r-2 dark:border-r-[1px] dark:border-r-[#D6D6D6] 
                                border-r-[#a4c2f3] dark:border-dashed border-solid">
                            <div className="counter-content">
                                <div className="relative">
                                    <div className="inline-block ">                                        
                                        <h1>
                                            <span className="text-white text-[40px] font-[700] font-roboto">
                                            {countslink.count} </span>
                                        </h1>
                                    </div>
                                    <div className="text-white font-roboto font-[700] inline-flex">
                                        <h3 className="text-[30px] absolute mt-[-50px] ml-[10px] font-[800]">{countslink.counter}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="text-white capitalize text-[20px] font-[500] font-roboto mt-[5px] tracking-[.9px]">
                                <h4>{countslink.name}</h4>
                            </div>
                        </div>
                    </div>
                    )
                    })}
                </div>
            </div>
        </div>
    );
}
export default ConutSection;