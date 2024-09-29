export default function WelcomeComponent(){

    return (

        <>
        
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold mb-4">Welcome,</h1>
                    <p className="mb-4">You are now logged in. You can start shopping and adding items to your cart.</p>
                    <a href="/shop" className="btn bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mb-2 mr-5">
                        Explore Now
                    </a>
                    <a href="/restaurants" className="btn bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mb-2 mr-5">
                        Rate and Review
                    </a>
                    <a href="/cart" className="btn bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mb-2 mr-5">
                        Order History
                    </a>
                    <a href="/shop" className="btn bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                        Special Offers and Promotions
                    </a>
                </div>
            </div>


        </>

    )

}