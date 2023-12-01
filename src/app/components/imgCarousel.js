import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import prefix from "../prefix";
import Image from "next/image";

export default function ImgCarousel() {
  const imgs = ["/doodlePup.jpg", "/doodlePup.jpg", "/doodlePup.jpg"]
  return (
    <div>
      <Carousel
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
        statusFormatter={(current, total) => ``}
      >
        {imgs.map((img, index) => (
          <div key={index}>
            <Image
              src={`${prefix}${img}`}
              alt="image"
              layout="responsive"
              placeholder='empty'
              width={100}
              height={66.8}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}