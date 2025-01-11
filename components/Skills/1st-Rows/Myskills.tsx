'use client';
import Image from "next/image";
import "./Me.css";

interface ZigzagBlockProps {
  imageSrc: string;
  altText: string;
  width: number;
  height: number;
}

const ZigzagBlock: React.FC<ZigzagBlockProps> = ({ imageSrc, altText, width, height }) => {
  return (
    <div className="zigzag-block">
      <Image src={imageSrc} alt={altText} width={width} height={height} className="zigzag-image" layout="responsive" />
    </div>
  );
};

const Zigzag: React.FC = () => {
  return (
    <div id="Skills">  
        <h1 className="top-left-title">Skill</h1>    
        <div className="zigzag-container">
          {/* บล็อกที่ 1 */}
          <ZigzagBlock
            imageSrc="/src/html5.svg"
            altText="HTML5 Image"
            width={100}
            height={100}
          />
          {/* บล็อกที่ 2 */}
          <ZigzagBlock
            imageSrc="/src/css3.svg"
            altText="CSS3 Image"
            width={100}
            height={100}
          />
          <ZigzagBlock
            imageSrc="/src/java.png"
            altText="Java Image"
            width={100}
            height={100}
          />
          {/* บล็อกที่ 3 */} 
          <ZigzagBlock
            imageSrc="/src/react.svg"
            altText="React Image"
            width={100}
            height={100}
          />
          {/* บล็อกที่ 3 */}     
          <ZigzagBlock
            imageSrc="/src/tailwind.svg"
            altText="Tailwind Image"
            width={100}
            height={100}
          />
          {/* บล็อกที่ 3 */}     
          <ZigzagBlock
            imageSrc="/src/javascript.svg"
            altText="JavaScript Image"
            width={100}
            height={100}
          />
          {/* บล็อกที่ 3 */}            
        </div>
      </div>
   
  );
};

export default Zigzag;
