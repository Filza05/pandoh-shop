import React from 'react'
import { MDBCarouselItem } from 'mdb-react-ui-kit'
import { Dispatch, SetStateAction } from 'react'

type CarouselItemProps = {
    imageURL: string;
    index: number;
    title: string,
    description: string,
    category: string,
    setScrollingEnabled: Dispatch<SetStateAction<boolean>>
}

const CarouselItem: React.FC<CarouselItemProps> = ({ imageURL, index, title, description, setScrollingEnabled, category }) => {
    return (
        <MDBCarouselItem className="h-screen" itemId={index + 1}>
            <img
                src={imageURL}
                className="absolute h-full d-block w-100 object-cover"
                alt="..."
            />
            <div className='h-full w-full flex flex-col items-center justify-center text-center cursor-default'>
                <div
                    onMouseEnter={() => {
                        setScrollingEnabled(false)
                    }}
                    onMouseLeave={() => {
                        setScrollingEnabled(true)
                    }}
                    className="w-full z-0 bg-black bg-opacity-50
                    rounded-[3px] px-14 sm:w-2/3 lg:w-1/2" //besto ha ji yaaayyyhhhhhhh xD
                >
                    <div className="relative py-8 w-full flex-col flex items-center gap-4">
                        <h3 className="text-white text-4xl font-semibold">
                            {title}
                        </h3>
                        <p className="text-white text-lg font-sans font-light">
                            {description}
                        </p>
                        <div className="pb-1 bg-white items-center w-2/3 rounded-md opacity-60 mt-4" />
                        <div className='flex flex-1 w-full justify-center gap-4'>
                            <a
                                href={"/products"}
                                className="w-1/2 px-2 py-2 font-light text-white bg-blue-700 rounded-sm hover:bg-blue-600
                            hover:scale-110 hover:duration-300 flex flex-col items-center justify-center lg:w-1/3"
                            >
                                {title}
                            </a>
                            <button
                                className="w-1/2 px-4 py-2 font-light text-white bg-blue-700 rounded-sm hover:bg-blue-600
                            hover:scale-110 hover:duration-300 flex flex-col items-center justify-center lg:w-1/3">
                                View All Products
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </MDBCarouselItem>
    )
}

export default CarouselItem
