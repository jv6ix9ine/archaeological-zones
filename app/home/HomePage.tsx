import Badge from "@/src/common/Badge"
import Gallery from "@/src/common/Gallery"
import { ArrowDownIcon, ArrowDownRightIcon } from "@heroicons/react/24/outline"

const HomePage = () => {
    const images = [
        {
            url: "/images/placeholder.webp"
        },
        {
            url: "/images/placeholder.webp"
        },
        {
            url: "/images/placeholder.webp"
        },
        {
            url: "/images/placeholder.webp"
        },
        {
            url: "/images/placeholder.webp"
        },
        {
            url: "/images/placeholder.webp"
        },
        {
            url: "/images/placeholder.webp"
        },
        {
            url: "/images/placeholder.webp"
        },
        {
            url: "/images/placeholder.webp"
        },
        {
            url: "/images/placeholder.webp"
        },
        {
            url: "/images/placeholder.webp"
        },
        {
            url: "/images/placeholder.webp"
        },
    ]
    return (
        <>
            <div className="pt-14 h-screen">
                <section className="container mx-auto h-1/2 md:h-[40%] px-10 py-8 flex flex-col justify-center md:justify-around gap-8">
                    <div className="w-full flex flex-col md:flex-row justify-center gap-8 text-stone-900">
                        <h1 className="max-w-[280px] text-4xl relative m-auto">
                            Descubre lo que México tiene para tí
                            <ArrowDownRightIcon width={36} height={36} className='text-stone-900 absolute bottom-0 right-0 cursor-pointer' />
                        </h1>
                        <p className="text-center max-w-sm md:max-w-[280px] m-auto">
                            Sumérgete en la rica historia y cultura de México explorando un catálogo de zonas arqueológicas impresionantes.
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <h1 className="text-xl">Más populares:</h1>
                        <div className="flex gap-4 justify-center items-center">
                            <Badge title="Chichen Itza"/>
                            <Badge title="Tulum"/>
                            <Badge title="Calakmul"/>
                        </div>
                    </div>
                </section>
                <div className="w-full h-1/2 md:h-[60%] relative grayscale-[20%] bg-cover bg-center  bg-no-repeat"
                    style={
                        {
                            backgroundImage: `url(/images/hero.webp)`,
                            // backgroundSize: 'auto',
                        }
                    }
                >
                    <button className="px-8 py-2 bg-stone-50 hover:bg-stone-200 text-stone-900 rounded-full shadow-lg absolute bottom-4 left-1/2 transform -translate-x-1/2">
                        <span className="flex items-center justify-between gap-2">
                            Explorar
                            <ArrowDownIcon width={20} height={20} className='text-stone-900' />
                        </span>
                    </button>
                </div>
            </div>
            <Gallery/>
        </>
    )
}

export default HomePage