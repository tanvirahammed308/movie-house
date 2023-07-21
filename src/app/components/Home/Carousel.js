
import Image from "next/image";
import px1 from "../../../../public/img/px1.png"
import px2 from "../../../../public/img/px2.jpg"
import px3 from "../../../../public/img/px3.jpg"
const Carousel = () => {
    return (
        
       <>
      
        <div className="carousel w-full ">
        <div id="slide1" className="carousel-item relative w-full ">
        <Image src={px1} width={1800} height={250} alt="movie poster"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
        <Image src={px2} width={1800} height={250} alt="movie poster"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
        <Image src={px3} width={1800} height={250} alt="movie poster"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        
      </div>
       
       </>
    );
};

export default Carousel;