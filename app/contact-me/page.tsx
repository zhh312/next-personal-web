"use client";
import Contact from "@/components/Contact";
import ContactForm from "@/components/ContactForm";
import React, { useState } from "react";

const Page = () => {
  const [contact, setContact] = useState(false);

  return (
    <div
      style={{ backgroundImage: "url(/bg-3.jpg)" }}
      className='w-screen h-screen bg-cover bg-center flex items-center justify-center'
    >
      <div
        style={{ backgroundImage: "url(/bg31.jpg)" }}
        className='h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white flex justify-center items-center'
      >
        <div className='absolute left-20 w-[70%] md:w-[30%] flex justify-center items-center'>
          {!contact && (
            <button
              onClick={() => setContact(true)}
              className='relative rounded-[20px] bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]'
            >
              <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20'></div>
              Contact Me!
            </button>
          )}
          {contact && <Contact />}
        </div>
      </div>
    </div>
  );
};

export default Page;
