"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { backEndData, SkillData } from '@/constants';
import Image from 'next/image';
import {Autoplay} from 'swiper/modules';

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className='h-screen w-screen flex items-center justify-center bg-cover  bg-center '
    >
      <div className='flex flex-col gap-20 max-w-[80%] text-center items-center'>
        <div className='flex flex-col items-center gap-4'>
          <h1 className='font-semibold text-white text-[50px]'>
            Skills
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
              {" "}
              & <span>Technologies</span>
            </span>
          </h1>
          <p className='text-gray-400 text-[20px]'>
            Using the latest tech this world has to offer
          </p>
        </div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className='max-w-[80%]'
          slidesPerView={6}
          speed={5000}
          loop={true}
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide
              key={index}
              className='flex flex-col items-center gap-4'
            >
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
              <h1 className='text-white text-[20px] font-semibold'>
                {skill.name}
              </h1>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          className='max-w-[80%]'
          slidesPerView={6}
          speed={5000}
          loop={true}
        >
          {backEndData.map((skill, index) => (
            <SwiperSlide
              key={index}
              className='flex flex-col items-center gap-4'
            >
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
              <h1 className='text-white text-[20px] font-semibold'>
                {skill.name}
              </h1>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Page
