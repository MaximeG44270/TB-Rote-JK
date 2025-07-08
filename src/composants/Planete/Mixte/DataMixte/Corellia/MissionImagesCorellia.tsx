import React from 'react';

interface MissionImage {
  src: string;
  alt: string;
  position: string;
  anchor?: string;
}

const missionImages: MissionImage[] = [
  { src: "/picto/mission_fleet.png", alt: "Fleet", position: "absolute w-1/12 xl:w-[4rem] 3xl:w-[5rem] top-[25rem] left-[22rem] md:top-[45rem] md:left-[41rem] lg:top-[57rem] lg:left-[51rem] xl:left-[60rem] xl:top-[38rem] 2xl:left-[68rem] 2xl:top-[43rem] 3xl:left-[82rem] 3xl:top-[50rem]", anchor: "attack-fleet" },
  { src: "/picto/mission_deploy.png", alt: "Déploiement", position: "absolute w-[3rem] md:w-[5rem] lg:w-[rem] xl:w-[5rem] 3xl:w-[6rem] top-[15rem] left-[12rem] md:top-[28rem] md:left-[24rem] lg:top-[34rem] lg:left-[30rem] xl:top-[24rem] xl:left-[41rem] 2xl:left-[48rem] 2xl:top-[27rem] 3xl:left-[58rem] 3xl:top-[32rem]", anchor: "star-require" },
  { src: "/picto/mission_usual.png", alt: "Fight Nord", position: "absolute w-1/12 xl:w-[4rem] 3xl:w-[5rem] top-[10rem] left-[19rem] md:top-[17rem] md:left-[35rem] lg:top-[24rem] lg:left-[43rem] xl:left-[54rem] xl:top-[17rem] 2xl:left-[60rem] 2xl:top-[19rem] 3xl:left-[72rem] 3xl:top-[23rem]", anchor: "attack-nord" },
  { src: "/picto/get3.png", alt: "Fight Mission", position: "absolute w-[2rem] md:w-[4rem] lg:w-[6rem] xl:w-[4rem] 3xl:w-[6rem] top-[24rem] left-[12rem] md:top-[44rem] md:left-[24rem] lg:top-[53rem] lg:left-[30rem] xl:top-[37rem] xl:left-[42rem] 2xl:left-[49rem] 2xl:top-[43rem] 3xl:left-[58rem] 3xl:top-[50rem]", anchor: "attack-mission" },
  { src: "/picto/mission_usual.png", alt: "Fight Est", position: "absolute w-1/12 xl:w-[4rem] 3xl:w-[5rem] top-[15rem] left-[22rem] md:top-[28rem] md:left-[39rem] lg:top-[33rem] lg:left-[48rem] xl:top-[24rem] xl:left-[59rem] 2xl:left-[63rem] 2xl:top-[27rem] 3xl:left-[78rem] 3xl:top-[32rem]", anchor: "attack-est" },
  { src: "/picto/mission_usual.png", alt: "Fight Ouest", position: "absolute  w-1/12 xl:w-[4rem] 3xl:w-[5rem] top-[16rem] left-[17rem] md:top-[29rem] md:left-[31rem] lg:top-[34rem] lg:left-[39rem] xl:top-[25rem] xl:left-[49rem] 2xl:left-[56rem] 2xl:top-[28rem] 3xl:left-[68rem] 3xl:top-[33rem]", anchor: "attack-ouest" },
  { src: "/picto/mission_platoon.png", alt: "platoon", position: "absolute  w-[3rem] md:w-[5rem] lg:w-[7rem] xl:w-[5rem] 3xl:w-[6rem] top-[20rem] left-[7rem] md:top-[37rem] md:left-[17rem] lg:top-[45rem] lg:left-[20rem] xl:top-[31rem] xl:left-[35rem] 2xl:left-[40rem] 2xl:top-[36rem] 3xl:left-[50rem] 3xl:top-[42rem]", anchor: "platoon" },
];

const MissionImagesCorellia: React.FC = () => {
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

export default MissionImagesCorellia;