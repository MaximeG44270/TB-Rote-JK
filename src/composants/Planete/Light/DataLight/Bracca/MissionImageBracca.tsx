import React from 'react';

interface MissionImage {
  src: string;
  alt: string;
  position: string;
  anchor?: string;
}

const missionImages: MissionImage[] = [
  { src: "/picto/mission_fleet.png", alt: "Fleet", position: "absolute top-12 left-[21rem] md:top-20 md:left-[40rem] lg:top-28 lg:left-[52rem] xl:top-20 xl:left-[60rem] 2xl:left-[64rem] w-1/12 xl:w-[4rem] xl:w-[3rem] 3xl:w-[4rem] 3xl:left-[77rem]", anchor: "attack-fleet" },
  { src: "/picto/mission_deploy.png", alt: "Déploiement", position: "absolute top-48 left-[12rem] md:top-[18rem] md:left-[23rem] lg:top-[23rem] lg:left-[31rem] xl:top-[15rem] xl:left-[41rem] 2xl:left-[48rem] 2xl:top-[18rem] w-1/12 xl:w-[4rem] 3xl:w-[5rem] 3xl:left-[60rem] 3xl:top-[23rem]", anchor: "star-require" },
  { src: "/picto/mission_usual.png", alt: "Fight Est", position: "absolute top-[10rem] left-[19rem] md:top-[14rem] md:left-[35rem] lg:top-[17rem] lg:left-[46rem] xl:top-[11rem] xl:left-[52rem] 2xl:left-[60rem] 2xl:top-[13rem] w-1/12 xl:w-[4rem] 3xl:w-[5rem] 3xl:left-[72rem] 3xl:top-[15rem]", anchor: "attack-est" },
  { src: "/picto/mission_usual.png", alt: "Fight Ouest", position: "absolute top-[8rem] left-28 md:top-[11rem] md:left-[12rem] lg:top-[13rem] lg:left-[17rem] xl:top-[8rem] xl:left-[32rem] 2xl:left-[38rem] 2xl:top-[10rem] w-1/12 xl:w-[4rem] 3xl:w-[5rem] 3xl:left-[45rem] 3xl:top-[11rem]", anchor: "attack-ouest" },
  { src: "/picto/mission_usual.png", alt: "Fight Middle", position: "absolute top-[7rem] left-[16rem] md:top-[10rem] md:left-[30rem] lg:top-[12rem] lg:left-[40rem] xl:top-[7rem] xl:left-[47rem] 2xl:left-[55rem] 2xl:top-[9rem] w-1/12 xl:w-[4rem] 3xl:w-[5rem] 3xl:left-[64rem] 3xl:top-[10rem]", anchor: "attack-middle" },
  { src: "/picto/mission_platoon.png", alt: "platoon", position: "absolute top-[16rem] left-[16rem] md:top-[27rem] md:left-[32rem] lg:top-[34rem] lg:left-[41rem] xl:top-[24rem] xl:left-[49rem] 2xl:left-[56rem] 2xl:top-[28rem] w-[3rem] md:w-[5rem] lg:w-[7rem] xl:w-[5rem] 3xl:w-[6rem] 3xl:left-[67rem] 3xl:top-[33rem]", anchor: "platoon" },
  { src: "/picto/mission-bracca.png", alt: "mission", position: "absolute top-[16rem] w-[2rem] left-[9rem] md:top-[27rem] md:w-[4rem] md:left-[16rem] lg:top-[34rem] lg:left-[20rem] lg:w-[6rem] xl:top-[24rem] xl:left-[34rem] xl:w-[4rem] 2xl:left-[42rem] 2xl:top-[28rem] w-[3rem] md:w-[5rem] lg:w-[7rem] 3xl:w-[5rem] 3xl:left-[50rem] 3xl:top-[33rem]", anchor: "mission" },
];

const MissionImagesBracca: React.FC = () => {
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

export default MissionImagesBracca;