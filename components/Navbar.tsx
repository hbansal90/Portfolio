import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { TbBrandGithub } from 'react-icons/tb'
import { SlSocialGoogle, SlSocialTwitter } from 'react-icons/sl'
import { SlSocialLinkedin, SlSocialInstagram } from 'react-icons/sl'
import { MdOutlineClose } from 'react-icons/md'
import { motion } from 'framer-motion'

const Navbar = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [show, setShow] = useState(false)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    setShow(false)
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, '')
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: 'smooth'
    })
    // Update the class name of the clicked link
    const links = document.querySelectorAll('.nav-link')
    links.forEach(link => {
      link.classList.remove('active')
    })
    e.currentTarget.classList.add('active')
  }

  function handleClick (e: React.MouseEvent<HTMLDivElement>) {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setShow(false)
    }
  }

  return (
    <div className='w-full shadow-navbarShadow h-20 lg:h-[13vh] sticky top-0 z-50 bg-bodyColor px-10 '>
      <div className='max-w-container h-full mx-auto py-2  flex items-center justify-between  '>
        {/* ============ Logo Start here ============ */}
        <Link href='/'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            <Image
              className='w-14'
              src='/assets/images/logo.svg'
              alt='logo'
              width={25}
              height={25}
              priority
            />
          </motion.div>
        </Link>
        {/* ============ Logo End here ============== */}
        {/* ============ ListItem Start here ======== */}
        <div className='hidden mdl:inline-flex items-center gap-7 '>
          <ul className='flex text-[19px] gap-7'>
            <Link
              className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
              href='#home'
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link>

            <Link
              className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
              href='#about'
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                About
              </motion.li>
            </Link>

            <Link
              className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
              href='#project'
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                Project
              </motion.li>
            </Link>
            <Link
              className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
              href='#contact'
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                Contact
              </motion.li>
            </Link>
          </ul>
          <a href='/assets/HarshBansal_Resume_7.4.pdf' target='_blank'>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className='px-4 py-2 rounded-md text-textGreen text-[18px] border border-textGreen hover:bg-hoverColor duration-300'
            >
              Resume
            </motion.button>
          </a>
        </div>
        {/* ============== Small Icon Start here =========== */}
        <div
          onClick={() => setShow(true)}
          className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group'
        >
          <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
          <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
          <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
        </div>
        {show && (
          <div
            ref={ref}
            onClick={handleClick}
            className='absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end'
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className='w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative'
            >
              <MdOutlineClose
                onClick={() => setShow(false)}
                className='text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4'
              />
              <div className='flex flex-col items-center gap-7'>
                <ul className='flex flex-col text-base gap-7'>
                  <Link
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                    href='#home'
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: 'easeIn' }}
                    >
                      Home
                    </motion.li>
                  </Link>

                  <Link
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                    href='#about'
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2, ease: 'easeIn' }}
                    >
                      <span className='text-textGreen'>01. </span>
                      About
                    </motion.li>
                  </Link>

                  <Link
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                    href='#project'
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.4, ease: 'easeIn' }}
                    >
                      <span className='text-textGreen'>02. </span>
                      Project
                    </motion.li>
                  </Link>

                  <Link
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                    href='#contact'
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.5, ease: 'easeIn' }}
                    >
                      <span className='text-textGreen'>03. </span>
                      Contact
                    </motion.li>
                  </Link>
                </ul>
                <a href='/assets/HarshBansal_Resume_7.4.pdf' target='_blank'>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className='px-4 py-2 rounded-md  text-base border border-textGreen hover:bg-hoverColor duration-300'
                  >
                    Resume
                  </motion.button>
                </a>
                <div className='grid grid-cols-3 gap-4 mt-10'>
                  <a
                    href='https://github.com/HarshBansal'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <TbBrandGithub className='text-3xl hover:text-textGreen transition-colors duration-300' />
                  </a>
                  <a
                    href='https://twitter.com/HarshBansal'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <SlSocialTwitter className='text-3xl  hover:text-textGreen transition-colors duration-300' />
                  </a>
                  <a
                    href='https://linkedin.com/in/HarshBansal'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <SlSocialLinkedin className='text-3xl hover:text-textGreen transition-colors duration-300' />
                  </a>
                  <a
                    href='https://instagram.com/HarshBansal'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <SlSocialInstagram className='text-3xl thover:text-textGreen transition-colors duration-300' />
                  </a>
                  <a
                    href='mailto:harsh@example.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <SlSocialGoogle className='text-3xl hover:text-textGreen transition-colors duration-300' />
                  </a>
                  <a
                    href='https://leetcode.com/u/itsHarshReally/'
                    target='_blank'
                  >
                      <Image
                        src='/assets/images/leetcode2.png'
                        alt='LeetCode logo'
                        width={30}
                        height={30}
                      />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
