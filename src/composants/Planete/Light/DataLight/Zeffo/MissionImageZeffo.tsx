import React from 'react';

interface MissionImage {
  src: string;
  alt: string;
  position: string;
  anchor?: string;
}

const missionImages: MissionImage[] = [
  { src: "/picto/mission_fleet.png", alt: "Fleet", position: "absolute w-1/12 xl:w-[3rem] 3xl:w-[4rem] top-[6rem] left-[24rem] md:top-[10rem] md:left-[44rem] lg:top-[14rem] lg:left-[56rem] xl:left-[64rem] xl:top-[13rem] 2xl:left-[74rem] 2xl:top-[16rem] 3xl:left-[89rem] 3xl:top-[16rem]", anchor: "attack-fleet" },
  { src: "/picto/mission_deploy.png", alt: "Déploiement", position: "absolute w-[3rem] md:w-[5rem] lg:w-[rem] xl:w-[5rem] 3xl:w-[6rem] top-[11rem] left-[12rem] md:top-[19rem] md:left-[24rem] lg:top-[23rem] lg:left-[30rem] xl:top-[20rem] xl:left-[41rem] 2xl:left-[48rem] 2xl:top-[23rem] 3xl:left-[58rem] 3xl:top-[28rem]", anchor: "star-require" },
  { src: "/picto/mission_usual.png", alt: "Fight Est", position: "absolute w-1/12 xl:w-[4rem] 3xl:w-[5rem] top-[4rem] left-[16rem] md:top-[7rem] md:left-[32rem] lg:top-[9rem] lg:left-[39rem] xl:left-[52rem] xl:top-[9rem] 2xl:left-[60rem] 2xl:top-[11rem] 3xl:left-[70rem] 3xl:top-[11rem]", anchor: "attack-nord-est" },
  { src: "/picto/mission_usual.png", alt: "Fight Nord", position: "absolute w-1/12 xl:w-[4rem] 3xl:w-[5rem] top-[6rem] left-[11rem] md:top-[10rem] md:left-[22rem] lg:top-[13rem] lg:left-[26rem] xl:left-[40rem] xl:top-[12rem] 2xl:left-[47rem] 2xl:top-[13rem] 3xl:left-[57rem] 3xl:top-[16rem]", anchor: "attack-nord-ouest" },
  { src: "/picto/mission_usual.png", alt: "Fight Centre", position: "absolute w-1/12 xl:w-[4rem] 3xl:w-[5rem] top-[14rem] left-[11rem] md:top-[23rem] md:left-[22rem] lg:top-[27rem] lg:left-[26rem] xl:left-[40rem] xl:top-[24rem] 2xl:left-[47rem] 2xl:top-[25rem] 3xl:left-[57rem] 3xl:top-[29rem]", anchor: "attack-centre" },
  { src: "/picto/mission_usual.png", alt: "Fight Nord", position: "absolute  w-1/12 xl:w-[4rem] 3xl:w-[5rem] top-[13rem] left-[20rem] md:top-[21rem] md:left-[38rem] lg:top-[27rem] lg:left-[48rem] xl:left-[53rem] xl:top-[17rem] 2xl:left-[62rem] 2xl:top-[19rem] 3xl:left-[74rem] 3xl:top-[23rem]", anchor: "attack-nord" },
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