export default function AboutHero(){

    return (

        <>
        
            <div className="">
                <div class="container mx-auto flex flex-col items-center py-12 sm:py-24">
                    <div class="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
                            Welcome to My Meal Food App
                        </h1>
                        <p class="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">Welcome to My Meal Food App, your ultimate destination for discovering the best food products and meals. We are passionate about bringing you a delightful culinary experience, right at your fingertips. </p>
                    </div>
                    <div class="flex justify-center items-center">
                        <a
                            href="/shop"
                            className="text-white hover:text-gray-200 px-4 py-2"
                        >
                            <button className="bg-blue-500 text-white font-bold px-8 py-3 rounded-md focus:outline-none">
                                Explore Now
                            </button>

                        </a>
                        <a
                            href="/shop"
                            className="text-white hover:text-gray-200 px-4 py-2"
                        >
                            <button className="bg-blue-500 text-white font-bold px-8 py-3 rounded-md focus:outline-none">
                                Restaurants
                            </button>

                        </a>
                    </div>
                </div>
            </div>

            <br /><br /><br /><br /><br /><br /><br /><br />
            
        
        </>

    )

}