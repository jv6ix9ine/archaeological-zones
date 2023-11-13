import STATES from '@/mocks/states.json'

const Gallery = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl mb-4">Zonas arqueológicas</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    STATES.map((state, index) => (
                        <div key={index}
                            className="w-full h-64 bg-stone-500 bg-cover bg-center rounded-md cursor-pointer"
                            style={
                                {
                                    backgroundImage: `url(/images/placeholder.webp)`,
                                }
                            }
                        >
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Gallery