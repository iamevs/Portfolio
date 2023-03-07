const Hero = () => {
    return (
        <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <div className="flex flex-col justify-center items-center h-screen">
                    <h1 className="text-6xl text-white font-bold">Hello, I'm <span className="text-secondary">EVS</span></h1>
                    <h2 className="text-2xl text-white font-bold">I'm a FullStack Developer</h2>
                </div>
            </div>
        </div>
    )
}

export default Hero