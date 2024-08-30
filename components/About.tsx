import Image from 'next/image'
import SectionTitle from './SectionTitle'
import { AiFillThunderbolt } from 'react-icons/ai'

const About = () => {
  return (
    <section
      id='about'
      className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8 px-12 '
    >
      <SectionTitle title='About Me' titleNo='01' />
      <div className='flex flex-col lgl:flex-row gap-16'>
        <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
          <p>
            Hi, I’m Harsh Bansal, a{' '}
            <span className='text-textGreen'>Software Engineer</span> in the
            making with a passion for turning complex problems into elegant
            solutions. I thrive on optimizing code with
            <span className='text-textGreen'> C++ and Python</span> by utilising
            data structures & algorithms, all while diving deep into web
            development. With a strong foundation in computer science and a love
            for continuous learning, I’m excited to build innovative solutions
            and keep pushing the boundaries of technology
          </p>
          <p>
            I am currently pursuing{' '}
            <span className='text-textGreen'>Bachelor of Technology</span> in
            Computer and Communication Engineering{' '}
            <span className='text-textGreen'>
              {' '}
              <a href='https://lnmiit.ac.in/' target='_blank'>
                at LNMIIT, Jaipur.
              </a>
            </span>
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className='max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6'>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              JavaScript (ES6+)
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>

            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              Node.js
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              TypeScript
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              Express.js
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              MySQL
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              MySQL / PostgresDB
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              C++
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              Python3
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              ORM : Prisma
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              Git / Github
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              Docker
            </li>
          </ul>
        </div>
        <div className='w-full lgl:w-1/3 h-80 relative group'>
          <div className='absolute w-full h-80 -left-6 -top-6 rounded-lg '>
            <div className='w-full h-full relative z-20 flex pl-6 lgl:pl-0'>
              <div className='relative w-full max-w-[300px] mx-auto'>
                <Image
                  className='rounded-lg object-cover w-full h-full'
                  src='/assets/images/profile.png'
                  alt='profileImg'
                  fill
                  style={{ objectFit: 'cover' }} // Ensures the image covers the container without stretching
                />
              </div>

              <div className='hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300'></div>
            </div>
          </div>
          <div className='hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300'></div>
        </div>
      </div>
    </section>
  )
}

export default About
