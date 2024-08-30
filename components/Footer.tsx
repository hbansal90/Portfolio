import { TbBrandGithub } from 'react-icons/tb'
import { SlSocialTwitter, SlSocialInstagram } from 'react-icons/sl'
import { SlSocialLinkedin } from 'react-icons/sl'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='hidden md:inline-flex xl:hidden flex-col items-center justify-center w-full py-6 gap-4 text-center'>
      <p className='text-sm text-zinc-200'>
        You can reach me on any of the following platforms
      </p>
      <div className='flex gap-4'>
        <a
          href='https://github.com/hbansal90'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <TbBrandGithub />
          </span>
        </a>
        <a
          href='https://www.linkedin.com/in/harsh-bansal-565351224/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <SlSocialLinkedin />
          </span>
        </a>
        <a
          href='https://www.instagram.com/_hbansal/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <SlSocialInstagram />
          </span>
        </a>
        <a
          href='https://x.com/HarshBansal890'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <SlSocialTwitter />
          </span>
        </a>
        <a
          href='https://leetcode.com/u/itsHarshReally/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <Image
              src='/assets/images/leetcode2.png'
              alt='LeetCode logo'
              width={25}
              height={25}
            />
          </span>
        </a>
      </div>
      <p className='text-sm text-zinc-200 mt-4'>
        Made with 💖 by Harsh Bansal
      </p>
    </div>
  )
}

export default Footer
