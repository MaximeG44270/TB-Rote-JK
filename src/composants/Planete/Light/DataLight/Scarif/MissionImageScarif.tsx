import React from 'react';

interface MissionImage {
  src: string;
  alt: string;
  position: string;
  anchor?: string;
}

const missionImages: MissionImage[] = [
  { src: "/picto/mission_fleet.png", alt: "Fleet", position: "absolute w-1/12 xl:w-[3rem] 3xl:w-[4rem] top-[6rem] left-[24rem] md:top-[10rem] md:left-[44rem] lg:top-[14rem] lg:left-[56rem] xl:left-[64rem] xl:top-[13rem] 2xl:left-[74rem] 2xl:top-[16rem] 3xl:left-[89rem] 3xl:top-[16rem]", anchor: "attack-fleet" },
  { src: "/picto/mission_deploy.png", alt: "Déploiement", position: "absolute w-[3rem] md:w-[5rem] lg:w-[rem] xl:w-[5rem] 3xl:w-[6rem] top-[10rem] left-[12rem] md:top-[15rem] md:left-[23rem] lg:top-[19rem] lg:left-[28rem] xl:top-[16rem] xl:left-[42rem] 2xl:left-[46rem] 2xl:top-[18rem] 3xl:left-[57rem] 3xl:top-[21rem]", anchor: "star-require" },
  { src: "/picto/mission_usual.png", alt: "Fight Est", position: "absolute w-1/12 xl:w-[4rem] 3xl:w-[5rem] top-[4rem] left-[16rem] md:top-[7rem] md:left-[32rem] lg:top-[9rem] lg:left-[39rem] xl:left-[52rem] xl:top-[9rem] 2xl:left-[60rem] 2xl:top-[11rem] 3xl:left-[70rem] 3xl:top-[11rem]", anchor: "attack-est" },
  { src: "/picto/mission_usual.png", alt: "Fight Nord", position: "absolute w-1/12 xl:w-[4rem] 3xl:w-[5rem] top-[4rem] left-[9rem] md:top-[7rem] md:left-[15rem] lg:top-[9rem] lg:left-[18rem] xl:left-[33rem] xl:top-[9rem] 2xl:left-[35rem] 2xl:top-[11rem] 3xl:left-[45rem] 3xl:top-[11rem]", anchor: "attack-nord" },
  { src: "/picto/mission_usual.png", alt: "Fight Ouest", position: "absolute w-1/12 xl:w-[4rem] 3xl:w-[5rem] top-[10rem] left-[5rem] md:top-[15rem] md:left-[9rem] lg:top-[19rem] lg:left-[11rem] xl:top-[16rem] xl:left-[27rem] 2xl:left-[32rem] 2xl:top-[18rem] 3xl:left-[37rem] 3xl:top-[21rem]", anchor: "attack-ouest" },
  { src: "/picto/mission_usual.png", alt: "Fight Sud", position: "absolute  w-1/12 xl:w-[4rem] 3xl:w-[5rem] top-[17rem] left-[18rem] md:top-[29rem] md:left-[35rem] lg:top-[36rem] lg:left-[43rem] xl:left-[55rem] xl:top-[28rem] 2xl:left-[63rem] 2xl:top-[32rem] 3xl:left-[74rem] 3xl:top-[35rem]", anchor: "attack-sud" },
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