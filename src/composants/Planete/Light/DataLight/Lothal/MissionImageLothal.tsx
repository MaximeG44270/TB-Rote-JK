import React from 'react';

interface MissionImage {
  src: string;
  alt: string;
  position: string;
  anchor?: string;
}

const missionImages: MissionImage[] = [
  { src: "/picto/mission_fleet.png", alt: "Fleet", position: "absolute w-1/12 xl:w-[3rem] 3xl:w-[4rem] top-[6rem] left-[1rem] md:top-[10rem] md:left-[3rem] lg:top-[14rem] lg:left-[3rem] xl:left-[20rem] xl:top-[13rem] 2xl:left-[24rem] 2xl:top-[16rem] 3xl:left-[29rem] 3xl:top-[16rem]", anchor: "attack-fleet" },
  { src: "/picto/mission_deploy.png", alt: "Déploiement", position: "absolute w-1/12 xl:w-[4rem] 3xl:w-[5rem] top-[13rem] left-[10rem] md:top-[20rem] md:left-[18rem] lg:top-[25rem] lg:left-[24rem] xl:left-[38rem] xl:top-[20rem] 2xl:left-[45rem] 2xl:top-[22rem] 3xl:left-[53rem] 3xl:top-[26rem]", anchor: "star-require" },
  { src: "/picto/mission_usual.png", alt: "Fight Est", position: "absolute w-1/12 xl:w-[4rem] 3xl:w-[5rem] top-[5rem] left-[11rem] md:top-[9rem] md:left-[22rem] lg:top-[11rem] lg:left-[29rem] xl:left-[42rem] xl:top-[11rem] 2xl:left-[50rem] 2xl:top-[14rem] 3xl:left-[59rem] 3xl:top-[14rem]", anchor: "attack-est" },
  { src: "/picto/mission_usual.png", alt: "Fight Nord", position: "absolute  w-1/12 xl:w-[4rem] 3xl:w-[5rem] top-[15rem] left-[4rem] md:top-[26rem] md:left-[7rem] lg:top-[32rem] lg:left-[8rem] xl:left-[24rem] xl:top-[25rem] 2xl:left-[28rem] 2xl:top-[29rem] 3xl:left-[33rem] 3xl:top-[33rem]", anchor: "attack-ouest" },
  { src: "/picto/mission_usual.png", alt: "Fight Sud", position: "absolute  w-1/12 xl:w-[4rem] 3xl:w-[5rem] top-[17rem] left-[7rem] md:top-[29rem] md:left-[12rem] lg:top-[36rem] lg:left-[17rem] xl:left-[33rem] xl:top-[28rem] 2xl:left-[38rem] 2xl:top-[32rem] 3xl:left-[45rem] 3xl:top-[37rem]", anchor: "attack-sud" },
  { src: "/picto/mission_platoon.png", alt: "platoon", position: "absolute w-[3rem] md:w-[5rem] lg:w-[7rem] xl:w-[5rem] 3xl:w-[6rem] top-[10rem] left-[5rem] md:top-[15rem] md:left-[9rem] lg:top-[19rem] lg:left-[11rem] xl:top-[16rem] xl:left-[27rem] 2xl:left-[32rem] 2xl:top-[18rem] 3xl:left-[37rem] 3xl:top-[21rem]", anchor: "platoon" },
];

const MissionImagesLothal: React.FC = () => {
  return (
    <>
      {missionImages.map((image, index) => (
        image.anchor ? (
          <a key={index} href={`#${image.anchor}`}>
            <img
              src={image.src}
              alt={image.alt}
              className={`${image.position} object-contain cursor-pointer`}
            />
          </a>
        ) : (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`${image.position} object-contain`}
          />
        )
      ))}
    </>
  );
};

export default MissionImagesLothal;