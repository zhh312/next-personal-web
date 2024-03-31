import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className='w-screen h-screen relative'>
      <div
        className='flex items-center w-full h-full bg-cover bg-center'
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className='pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]'>
          <h1 className='text-[50px] text-white font-semibold'>
            Hi, I&apos;m Honghao,
            <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
              {" "}
              A Full-Stack Developer
            </span>
          </h1>
          <p className='text-gray-200 hidden md:block'>
            A Syracuse university computer science master graduating in May, I
            hold a U.S. green card with legal work status. With a diverse
            project portfolio spanning website development, AI and Android apps.
            <br />
            Experienced in project management job, I excel in guiding teams
            towards success and thrive in collaborative environments.
          </p>
          <div className='flex-col md:flex-row hidden md:flex gap-5'>
            <Link
              href='/my-skills'
              className='relative rounded-[20px] bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]'
            >
              Learn More
            </Link>
            <Link
              href='/my-projects'
              className='relative rounded-[20px] bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]'
            >
              <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20'></div>
              My Projects
            </Link>
            <Link
              href='/contact-me'
              className='relative rounded-[20px] bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]'
            >
              <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20'></div>
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      <div className='absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5'>
        <Link
          href={"/my-skills"}
          className='rounded-[20px] bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]'
        >
          Learn More
        </Link>
        <Link
          href={"/my-projects"}
          className='rounded-[20px] bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]'
        >
          My Projects
        </Link>
        <Link
          href={"/contact-me"}
          className='rounded-[20px] bg-transparent px-5 py-3 text-lg border border-white text-white max-w-[200px]'
        >
          Contact Me
        </Link>
      </div>
      <div className='absolute bottom-0 right-0 z-[10]'>
        <Image
          src='/horse.png'
          alt='horse'
          width={300}
          height={300}
          className='absolute right-55 top-40'
        />
        <Image src='/cliff.webp' alt='cliff' width={480} height={480} />
      </div>
      <div className='absolute bottom-0 z-[5] w-full h-full'>
        <Image
          src='/trees.webp'
          alt='tree'
          width={2000}
          height={2000}
          className='w-full h-full'
        />
      </div>
      <Image
        src='/stars.png'
        alt='horse'
        width={300}
        height={300}
        className='absolute top-10 left-0 z-[10]'
      />
    </main>
  );
}
