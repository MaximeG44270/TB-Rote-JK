import React from 'react';

interface MissionImage {
  src: string;
  alt: string;
  position: string;
  anchor?: string;
}

const missionImages: MissionImage[] = [
  { src: "/picto/mission_fleet.png", alt: "Fleet", position: "absolute w-1/12 xl:w-[4rem] 3xl:w-[4rem] top-[20rem] left-[22rem] md:top-[35rem] md:left-[41rem] lg:top-[44rem] lg:left-[51rem] xl:left-[60rem] xl:top-[38rem] 2xl:left-[68rem] 2xl:top-[43rem] 3xl:left-[82rem] 3xl:top-[50rem]", anchor: "attack-fleet" },
  { src: "/picto/mission_deploy.png", alt: "Déploiement", position: "absolute w-[3rem] md:w-[5rem] lg:w-[rem] xl:w-[5rem] 3xl:w-[6rem] top-[11rem] left-[12rem] md:top-[19rem] md:left-[24rem] lg:top-[23rem] lg:left-[30rem] xl:top-[20rem] xl:left-[41rem] 2xl:left-[48rem] 2xl:top-[23rem] 3xl:left-[58rem] 3xl:top-[28rem]", anchor: "star-require" },
  { src: "/picto/mission_usual.png", alt: "Fight Sud", position: "absolute w-1/12 xl:w-[4rem] 3xl:w-[5rem] top-[19rem] left-[15rem] md:top-[34rem] md:left-[27rem] lg:top-[42rem] lg:left-[34rem] xl:left-[47rem] xl:top-[37rem] 2xl:left-[57rem] 2xl:top-[41rem] 3xl:left-[65rem] 3xl:top-[49rem]", anchor: "attack-sud" },
  { src: "/picto/mission_special2.png", alt: "Fight Mission", position: "absolute w-[2rem] md:w-[4rem] lg:w-[6rem] xl:w-[4rem] 3xl:w-[6rem] top-[17rem] left-[10rem] md:top-[29rem] md:left-[20rem] lg:top-[36rem] lg:left-[25rem] xl:left-[37rem] xl:top-[31rem] 2xl:left-[44rem] 2xl:top-[34rem] 3xl:left-[51rem] 3xl:top-[41rem]", anchor: "attack-mission" },
  { src: "/picto/mission_usual.png", alt: "Fight Centre", position: "absolute w-1/12 xl:w-[4rem] 3xl:w-[5rem] top-[17rem] left-[18rem] md:top-[29rem] md:left-[34rem] lg:top-[36rem] lg:left-[44rem] xl:left-[54rem] xl:top-[31rem] 2xl:left-[63rem] 2xl:top-[34rem] 3xl:left-[73rem] 3xl:top-[41rem]", anchor: "attack-centre" },
  { src: "/picto/mission_usual.png", alt: "Fight Nord", position: "absolute  w-1/12 xl:w-[4rem] 3xl:w-[5rem] top-[13rem] left-[20rem] md:top-[21rem] md:left-[38rem] lg:top-[27rem] lg:left-[48rem] xl:left-[60rem] xl:top-[23rem] 2xl:left-[67rem] 2xl:top-[26rem] 3xl:left-[79rem] 3xl:top-[31rem]", anchor: "attack-nord" },
  { src: "/picto/mission_platoon.png", alt: "platoon", position: "absolute  w-[3rem] md:w-[5rem] lg:w-[7rem] xl:w-[5rem] 3xl:w-[6rem] top-[11rem] left-[16rem] md:top-[19rem] md:left-[32rem] lg:top-[23rem] lg:left-[39rem] xl:top-[20rem] xl:left-[49rem] 2xl:left-[57rem] 2xl:top-[23rem] 3xl:left-[68rem] 3xl:top-[28rem]", anchor: "platoon" },
];

const MissionImagesZeffo: React.FC = () => {
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

export default MissionImagesZeffo;