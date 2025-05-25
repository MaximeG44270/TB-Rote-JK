import React from 'react';

interface MissionImage {
  src: string;
  alt: string;
  position: string;
  anchor?: string;
}

const missionImages: MissionImage[] = [
  { src: "/picto/mission_fleet.png", alt: "Fleet", position: "absolute w-1/12 xl:w-[3rem] 3xl:w-[4rem] top-[6rem] left-[24rem] md:top-[10rem] md:left-[44rem] lg:top-[14rem] lg:left-[56rem] xl:left-[64rem] xl:top-[13rem] 2xl:left-[74rem] 2xl:top-[16rem] 3xl:left-[89rem] 3xl:top-[16rem]", anchor: "attack-fleet" },
  { src: "/picto/mission_deploy.png", alt: "Déploiement", position: "absolute w-[3rem] md:w-[5rem] lg:w-[rem] xl:w-[5rem] 3xl:w-[6rem] top-[10rem] left-[14rem] md:top-[15rem] md:left-[30rem] lg:top-[19rem] lg:left-[37rem] xl:top-[16rem] xl:left-[48rem] 2xl:left-[56rem] 2xl:top-[19rem] 3xl:left-[67rem] 3xl:top-[23rem]", anchor: "star-require" },
  { src: "/picto/mission_usual.png", alt: "Fight Est", position: "absolute w-1/12 xl:w-[4rem] 3xl:w-[5rem] top-[4rem] left-[16rem] md:top-[7rem] md:left-[32rem] lg:top-[9rem] lg:left-[39rem] xl:left-[52rem] xl:top-[9rem] 2xl:left-[60rem] 2xl:top-[11rem] 3xl:left-[70rem] 3xl:top-[11rem]", anchor: "attack-nord-est" },
  { src: "/picto/mission_usual.png", alt: "Fight Nord", position: "absolute w-1/12 xl:w-[4rem] 3xl:w-[5rem] top-[6rem] left-[11rem] md:top-[10rem] md:left-[22rem] lg:top-[13rem] lg:left-[26rem] xl:left-[40rem] xl:top-[12rem] 2xl:left-[47rem] 2xl:top-[13rem] 3xl:left-[57rem] 3xl:top-[16rem]", anchor: "attack-nord-ouest" },
  { src: "/picto/mission_usual.png", alt: "Fight Ouest", position: "absolute w-1/12 xl:w-[4rem] 3xl:w-[5rem] top-[14rem] left-[11rem] md:top-[23rem] md:left-[22rem] lg:top-[27rem] lg:left-[26rem] xl:left-[40rem] xl:top-[24rem] 2xl:left-[47rem] 2xl:top-[25rem] 3xl:left-[57rem] 3xl:top-[29rem]", anchor: "attack-sud-ouest" },
  { src: "/picto/mission_usual.png", alt: "Fight Sud", position: "absolute  w-1/12 xl:w-[4rem] 3xl:w-[5rem] top-[11rem] left-[18rem] md:top-[16rem] md:left-[35rem] lg:top-[20rem] lg:left-[43rem] xl:left-[53rem] xl:top-[17rem] 2xl:left-[62rem] 2xl:top-[19rem] 3xl:left-[74rem] 3xl:top-[23rem]", anchor: "attack-sud-est" },
  { src: "/picto/mission_platoon.png", alt: "platoon", position: "absolute  w-[3rem] md:w-[5rem] lg:w-[7rem] xl:w-[5rem] 3xl:w-[6rem] top-[12rem] left-[20rem] md:top-[19rem] md:left-[39rem] lg:top-[22rem] lg:left-[48rem] xl:top-[19rem] xl:left-[57rem] 2xl:left-[67rem] 2xl:top-[21rem] 3xl:left-[81rem] 3xl:top-[25rem]", anchor: "platoon" },
];

const MissionImagesScarif: React.FC = () => {
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

export default MissionImagesScarif;