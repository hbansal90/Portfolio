import { TbBrandGithub } from 'react-icons/tb'
import { SlSocialTwitter, SlSocialYoutube } from 'react-icons/sl'
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram
} from 'react-icons/sl'
import Image from 'next/image'

const LeftSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight mr-2'>
      <div className='flex flex-col gap-4'>
        <a href='https://github.com/hbansal90' target='_blank'>
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <TbBrandGithub />
          </span>
        </a>

        <a
          href='https://www.linkedin.com/in/harsh-bansal-565351224/'
          target='_blank'
        >
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <SlSocialLinkedin />
          </span>
        </a>
        <a href='https://www.instagram.com/_hbansal/' target='_blank'>
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <SlSocialInstagram />
          </span>
        </a>
        <a href='https://x.com/HarshBansal890' target='_blank'>
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <SlSocialTwitter />
          </span>
        </a>
        <a href='https://leetcode.com/u/itsHarshReally/' target='_blank'>
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <Image
              src='/assets/images/leetcode2.png'
              alt='LeetCode logo'
              width={25}
              height={25}
            />
          </span>
        </a>
      </div>
      <div className='w-[2px] h-32 bg-textDark'></div>
    </div>
  )
}

export default LeftSide
