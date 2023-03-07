const Feedbacks = () => {
    return (
        <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-full lg:w-8/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-secondary">
                                <div className="flex-auto p-5 lg:p-10">
                                    <h4 className="text-2xl font-semibold">Want to work with us?</h4>
                                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                                        Complete this form and we will get back to you in 24 hours.
                                    </p>
                                    <div className="relative w-full mb-3 mt-8">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="full-name"
                                        >
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                            placeholder="Full Name"
                                            style={{ transition: "all .15s ease" }}
                                        />
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="email"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                            placeholder="Email"
                                            style={{ transition: "all .15s ease" }}
                                        />
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="message"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            rows="4"
                                            cols="80"
                                            className="px-3 py-3 placeholder-gray-400
                        text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                            placeholder="Type a message..."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedbacks