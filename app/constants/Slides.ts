type SlideType = {
  image: string,
  title: string,
  description: string,
  category: string
}

const slides: SlideType[] = [
    {
        image: "/images/SlideImages/Laptops.jpg",
        title: "Laptops",
        description: "Power up your productivity with laptops engineered for speed, efficiency, and seamless multitasking. Elevate your digital experience.",
        category: "Laptops"
    },
    {
        image: "/images/SlideImages/GPU.jpg",
        title: "GPUs",
        description: "Unleash the power of immersive visuals and unparalleled performance with our range of high-performance GPUs. Your gateway to the ultimate gaming and creative experience.",
        category: "GPUs"
    },
    {
        image: "/images/SlideImages/Mouse.jpg",
        title: "PC Mouse",
        description: "Unleash your productivity and gaming prowess with our high-performance mice. Precision, comfort, and style at your fingertips.",
        category: "Mice"
    },
    {
        image: "/images/SlideImages/Keyboards.jpg",
        title:"Keyboards",
        description:"Elevate your typing experience with our range of sleek and responsive keyboards. A perfect blend of style, comfort, and performance. ",
        category: "Keyboards"
    },
    {
        image: "/images/SlideImages/Headphones.jpg",
        title: "Headphones",
        description: "Escape into a world of immersive audio with our premium headphones. Crystal-clear sound, unparalleled comfort – redefine your listening experience. ",
        category: "Headphones"
    },
    {
        image: "/images/SlideImages/Monitors.jpg",
        title: "PC Monitors",
        description: " Elevate your workspace with our high-performance monitors. Crisp resolutions, vibrant colors – bring your content to life.",
        category: "Monitors"
    },
]

export default slides