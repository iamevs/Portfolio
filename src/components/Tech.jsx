const Tech = () => {
    return (
        <div className="relative z-0 bg-primary">
            <div className="bg-tech-pattern bg-cover bg-no-repeat bg-center">
                <div className="container mx-auto px-6 py-20">
                    <h2 className="text-4xl font-bold text-white text-center mb-8">
                        Technologies I use
                    </h2>
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
                        <div className="flex items-center">
                            <img
                                className="w-12 h-12 mr-4"
                                src="https://img.icons8.com/color/48/000000/react-native.png"
                                alt="React"
                            />
                            <div className="text-white">
                                <p className="font-bold">React</p>
                                <p className="text-sm">Frontend</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <img
                                className="w-12 h-12 mr-4"
                                src="https://img.icons8.com/color/48/000000/nodejs.png"
                                alt="Node"
                            />
                            <div className="text-white">
                                <p className="font-bold">Node</p>
                                <p className="text-sm">Backend</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <img
                                className="w-12 h-12 mr-4"
                                src="https://img.icons8.com/color/48/000000/mongodb.png"
                                alt="MongoDB"
                            />
                            <div className="text-white">
                                <p className="font-bold">MongoDB</p>
                                <p className="text-sm">Database</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <img
                                className="w-12 h-12 mr-4"
                                src="https://img.icons8.com/color/48/000000/javascript.png"
                                alt="JavaScript"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tech