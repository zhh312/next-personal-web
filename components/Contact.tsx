import { ChangeEvent, useEffect, useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [message, setMessage] = useState("");


  const onChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(e.target.value);
  };

  return (
    <div className='flex flex-col gap-2 items-center '>
      <p className='text-2xl text-white p-3 font-bold'>
        Contact <span className='font-semibold text-white'>Honghao Zheng</span>
      </p>
      <textarea
        name='message'
        id='message'
        rows={2}
        value={message}
        onChange={onChange}
        placeholder='Type your message here'
        className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900 focus:border-transparent'
      ></textarea>
      <Link
        href={`mailto:hzheng40@syr.edu?subject=Regarding job interview&body=${message}`}
        className='relative rounded-[20px] bg-transparent border border-white px-5 py-3 w-full text-lg text-white text-center my-3'
      >
        <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20'></div>
        Send Message
      </Link>
    </div>
  );
}
