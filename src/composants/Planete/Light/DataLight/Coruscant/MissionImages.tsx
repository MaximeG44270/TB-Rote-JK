import React from 'react';

interface MissionImage {
  src: string;
  alt: string;
  position: string;
  anchor?: string;
}

const missionImages: MissionImage[] = [
  { src: "/picto/mission_fleet.png", alt: "Fleet", position: "absolute top-12 left-12 md:top-20 md:left-20 lg:top-28 lg:left-28 xl:top-20 xl:left-96 2xl:left-[31rem] w-1/12 xl:w-[3rem] 3xl:w-[4rem] 3xl:left-[38rem]", anchor: "attack-fleet" },
  { src: "/picto/mission_deploy.png", alt: "Déploiement", position: "absolute top-48 left-40 md:top-[18rem] md:left-72 lg:top-[23rem] lg:left-[23rem] xl:top-[15rem] xl:left-[35rem] 2xl:left-[42rem] 2xl:top-[18rem] w-1/12 xl:w-[4rem] 3xl:w-[5rem] 3xl:left-[52rem] 3xl:top-[23rem]", anchor: "star-require" },
  { src: "/picto/mission_usual.png", alt: "Fight Nord", position: "absolute top-16 left-48 md:top-28 md:left-[25rem] lg:top-[8rem] lg:left-[31rem] xl:top-[6rem] xl:left-[40rem] 2xl:left-[47rem] 2xl:top-[7rem] w-1/12 xl:w-[4rem] 3xl:w-[5rem] 3xl:left-[55rem] 3xl:top-[6rem]", anchor: "attack-nord" },
  { src: "/picto/mission_usual.png", alt: "Fight Est", position: "absolute top-28 left-56 md:top-[14rem] md:left-[30rem] lg:top-[17rem] lg:left-[38rem] xl:top-[11rem] xl:left-[43rem] 2xl:left-[51rem] 2xl:top-[13rem] w-1/12 xl:w-[4rem] 3xl:w-[5rem] 3xl:left-[60rem] 3xl:top-[15rem]", anchor: "attack-est" },
  { src: "/picto/mission_usual.png", alt: "Fight Ouest", position: "absolute top-28 left-28 md:top-[13rem] md:left-[12rem] lg:top-[16rem] lg:left-[17rem] xl:top-[10rem] xl:left-[32rem] 2xl:left-[38rem] 2xl:top-[12rem] w-1/12 xl:w-[4rem] 3xl:w-[5rem] 3xl:left-[45rem] 3xl:top-[14rem]", anchor: "attack-middle" },
  { src: "/picto/mission_usual.png", alt: "Fight Middle", position: "absolute top-52 left-12 md:top-[20rem] md:left-[5rem] lg:top-[25rem] lg:left-[7rem] xl:top-[17rem] xl:left-[26rem] 2xl:left-[30rem] 2xl:top-[20rem] w-1/12 xl:w-[4rem] 3xl:w-[5rem] 3xl:left-[36rem] 3xl:top-[23rem]", anchor: "attack-ouest" },
  { src: "/picto/mission_platoon.png", alt: "platoon", position: "absolute top-[16rem] left-[6rem] md:top-[27rem] md:left-[11rem] lg:top-[34rem] lg:left-[14rem] xl:top-[24rem] xl:left-[31rem] 2xl:left-[37rem] 2xl:top-[28rem] w-[3rem] md:w-[5rem] lg:w-[7rem] xl:w-[5rem] 3xl:w-[6rem] 3xl:left-[41rem] 3xl:top-[30rem]", anchor: "platoon" },
];

const MissionImages: React.FC = () => {
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

export default MissionImages;