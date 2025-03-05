import React from 'react';
import TiltedCard from './TiltedCard';

const imageSources = [
  "/gallery/school/college.jpg",
  "/gallery/school/pv_school.jpg",
  "/gallery/school/pv.jpg",
  "/gallery/school/pv1.jpg",
  "/gallery/school/pv2.jpg",
  "/gallery/school/pv3.jpg",
  "/gallery/school/szi_anand.jpg",
  "/gallery/school/szi_isro.jpg",
  "/gallery/school/szi_school.jpg",
  "/gallery/school/szi1.jpg",
  "/gallery/school/szi2.jpg",
  "/gallery/school/tc.jpg",
  "/gallery/school/techno_club_deo.jpg",
  "/gallery/school/techno_club_school.jpg",
  "/gallery/school/techno_club.jpg",
  "/gallery/school/thirukkural_chairman.jpg",
  "/gallery/school/thirukkural_hm.jpg",
  "/gallery/school/thirukkural.jpg",
  "/gallery/school/veetukku_oru_vinyani.jpg",
  "/gallery/school/canvasing.jpg",

  "/gallery/school/school.jpg",
  "/gallery/school/scout.jpg",
  "/gallery/school/scout1.jpg",
  "/gallery/school/scout2.jpg",
  "/gallery/school/speech.jpg",
  "/gallery/school/deo.jpg",
  "/gallery/school/jrc.jpg",
  "/gallery/school/s1.jpg",
  "/gallery/school/s2.jpg",
  "/gallery/school/s3.jpg",
  "/gallery/school/s4.jpg",
  "/gallery/school/s5.jpg",
  "/gallery/school/s6.jpg",
  "/gallery/school/s7.jpg",
  "/gallery/school/s8.jpg",
  "/gallery/school/s10.jpg",
  "/gallery/school/s11.jpg",
  "/gallery/school/s12.jpg",
  "/gallery/school/s13.jpg",


];

const TiltedCardStack = () => {
  return (
    <div className='my-10'>
    <h1 className='text-3xl font-extrabold text-center'>School</h1>
    <div className='grid mx-10 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
      {imageSources.map((src, index) => (
        <TiltedCard
          key={index}
          imageSrc={src}
          altText="Album Cover"
          captionText="school"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          // overlayContent={<p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>}
        />
      ))}
    </div>
    </div>
  );
};

export default TiltedCardStack;
