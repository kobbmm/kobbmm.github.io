'use client';

import "./Me.css";

interface ZigzagBlockProps {
  imageSrc: string;
  altText: string;
 
}

const ZigzagBlock: React.FC<ZigzagBlockProps> = ({ imageSrc, altText }) => {
  return (
    <div className="zigzag-block">
      <img src={imageSrc} alt={altText} className="zigzag-image" />
  
    </div>
  );
};

const Zigzag: React.FC = () => {
  return (
    <div>      
        <div className="zigzag-container">
          {/* บล็อกที่ 1 */}
          <ZigzagBlock
            imageSrc="/src/html.png"
            altText="Java Image"
          />
          {/* บล็อกที่ 2 */}
          <ZigzagBlock
            imageSrc="/src/css-3.png"
            altText="JavaScript Image"
          />
          <ZigzagBlock
            imageSrc="/src/java.png"
            altText="Python Image"
          />
          {/* บล็อกที่ 3 */}        
        </div>
      </div>
   
  );
};

export default Zigzag;
