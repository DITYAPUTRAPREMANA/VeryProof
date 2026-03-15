import video2 from '../Assets/video2.mp4'

const Background = () => {
    return (
        <video 
            className="fixed top-0 left-0 w-full h-screen object-cover -z-10"
            autoPlay 
            loop 
            muted
            playsInline // Added for better mobile support
        >
            <source src={video2} type='video/mp4' />
        </video>
    )
}

export default Background