'use client';
import Image from "next/image";
import "./Me.css";

interface ZigzagBlockProps {
  imageSrc: string;
  altText: string;
 
}

const ZigzagBlock: React.FC<ZigzagBlockProps> = ({ imageSrc, altText }) => {
  return (
    <div className="zigzag-block">
      <Image src={imageSrc} alt={altText} width={width} height={height} className="zigzag-image" />
    </div>
  );
};

const Zigzag: React.FC = () => {
  return (
    <div id="Skills">  
        <h1 className="top-left-title ">Skill</h1>    
        <div className="zigzag-container">
          {/* บล็อกที่ 1 */}
          <ZigzagBlock
            imageSrc="/src/html5.svg"
            altText="Java Image"
          />
          {/* บล็อกที่ 2 */}
          <ZigzagBlock
            imageSrc="/src/css3.svg"
            altText="JavaScript Image"
          />
          <ZigzagBlock
            imageSrc="/src/java.png"
            altText="Python Image"
          />
          {/* บล็อกที่ 3 */} 
          <ZigzagBlock
            imageSrc="/src/react.svg"
            altText="Python Image"
          />
          {/* บล็อกที่ 3 */}     
          <ZigzagBlock
            imageSrc="/src/tailwind.svg"
            altText="Python Image"
          />
          {/* บล็อกที่ 3 */}     
          <ZigzagBlock
            imageSrc="/src/javascript.svg"
            altText="Python Image"
          />
          {/* บล็อกที่ 3 */}            
        </div>
      </div>
   
  );
};

export default Zigzag;
