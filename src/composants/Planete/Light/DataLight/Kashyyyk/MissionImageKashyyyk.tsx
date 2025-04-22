import React from 'react';

interface MissionImage {
  src: string;
  alt: string;
  position: string;
  anchor?: string;
}

const missionImages: MissionImage[] = [
  { src: "/picto/mission_fleet.png", alt: "Fleet", position: "absolute w-1/12 xl:w-[3rem] 3xl:w-[4rem] top-[18rem] left-[23rem] md:top-[30rem] md:left-[43rem] lg:top-[40rem] lg:left-[54rem] xl:left-[65rem] xl:top-[28rem] 2xl:left-[73rem] 2xl:top-[35rem] 3xl:left-[87rem] 3xl:top-[40rem]", anchor: "attack-fleet" },
  { src: "/picto/mission_deploy.png", alt: "Déploiement", position: "absolute w-1/12 xl:w-[4rem] 3xl:w-[5rem] top-[13rem] left-[17rem] md:top-[23rem] md:left-[32rem] lg:top-[28rem] lg:left-[40rem] xl:left-[50rem] xl:top-[21rem] 2xl:left-[60rem] 2xl:top-[26rem] 3xl:left-[73rem] 3xl:top-[30rem]", anchor: "star-require" },
  { src: "/picto/mission_usual.png", alt: "Fight Est", position: "absolute w-1/12 xl:w-[4rem] 3xl:w-[5rem] top-[10rem] left-[20rem] md:top-[18rem] md:left-[38rem] lg:top-[22rem] lg:left-[48rem] xl:left-[56rem] xl:top-[16rem] 2xl:left-[67rem] 2xl:top-[20rem] 3xl:left-[79rem] 3xl:top-[23rem]", anchor: "attack-est" },
  { src: "/picto/mission_usual.png", alt: "Fight Nord", position: "absolute w-1/12 xl:w-[4rem] 3xl:w-[5rem] top-[9rem] left-[13rem] md:top-[17rem] md:left-[25rem] lg:top-[20rem] lg:left-[32rem] xl:left-[44rem] xl:top-[15rem] 2xl:left-[54rem] 2xl:top-[19rem] 3xl:left-[65rem] 3xl:top-[21rem]", anchor: "attack-nord" },
  { src: "/picto/mission_usual.png", alt: "Fight Sud", position: "absolute  w-1/12 xl:w-[4rem] 3xl:w-[5rem] top-[16rem] left-[11rem] md:top-[28rem] md:left-[21rem] lg:top-[36rem] lg:left-[27rem] xl:left-[40rem] xl:top-[26rem] 2xl:left-[50rem] 2xl:top-[32rem] 3xl:left-[60rem] 3xl:top-[37rem]", anchor: "attack-sud" },
  { src: "/picto/mission_platoon.png", alt: "platoon", position: "absolute w-[3rem] md:w-[5rem] lg:w-[7rem] xl:w-[5rem] 3xl:w-[6rem] top-[17rem] left-[15rem] md:top-[30rem] md:left-[29rem] lg:top-[39rem] lg:left-[36rem] xl:top-[29rem] xl:left-[47rem] 2xl:left-[57rem] 2xl:top-[34rem] 3xl:left-[69rem] 3xl:top-[40rem]", anchor: "platoon" },
  { src: "/picto/mission_special2.png", alt: "mission", position: "absolute w-[2rem] md:w-[4rem] lg:w-[6rem] xl:w-[4rem] 3xl:w-[6rem] top-[14rem] left-[15rem] md:top-[25rem] md:left-[28rem] lg:top-[30rem] lg:left-[34rem] xl:top-[23rem] xl:left-[46rem] 2xl:left-[56rem] 2xl:top-[27rem] 3xl:left-[67rem] 3xl:top-[32rem]", anchor: "mission" },
];

const MissionImagesKashyyyk: React.FC = () => {
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

export default MissionImagesKashyyyk;