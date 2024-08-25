import Image from 'next/image'
import { TbBrandGithub } from 'react-icons/tb'
import SectionTitle from './SectionTitle'
import { RxOpenInNewWindow } from 'react-icons/rx'

const Projects = () => {
  return (
    <section id='project' className='max-w-container mx-auto lgl:px-20 py-24'>
      <SectionTitle title='Some Things I have Built' titleNo='02' />
      
      {/* ============ project One Start here ================ */}
      <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
        <div className='flex flex-col xl:flex-row gap-6'>
          <div className='w-full xl:w-1/2 relative group'>
            <div className='p-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-lg'>
              <div className='w-full h-full bg-white rounded-lg overflow-hidden'>
                <video
                  controls
                  preload='auto'
                  poster='/assets/images/promptAiSave.png'
                  muted
                  className='w-full h-auto rounded-lg'
                >
                  <source
                    src='/assets/videos/prompt-ai-save.mp4'
                    type='video/mp4'
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-1/2 flex flex-col gap-6 justify-between items-start text-left'>
            <div>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                Featured Project
              </p>
              <h3 className='text-2xl font-bold'>PromptAI Save</h3>
            </div>
            <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
              PromptAISave is your tool for saving, discovering, and sharing
              creative prompts to generate enhanced responses from your favorite
              LLM model. Add your account with{' '}
              <span className='text-textGreen'>O-auth</span> and then save data
              using <span className='text-textGreen'>MongoDB</span>.
            </p>
            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-start text-textDark'>
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>Next-auth</li>
              <li>MongoDB</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className='text-2xl flex gap-4'>
              <a
                className='hover:text-textGreen duration-300'
                href='https://github.com/hbansal90/PromptAISave'
                target='_blank'
                rel='noopener noreferrer'
              >
                <TbBrandGithub />
              </a>
              <a
                className='hover:text-textGreen duration-300'
                href='https://prompt-ai-save.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>

        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className='flex flex-col xl:flex-row-reverse gap-6'>
          <div className='w-full xl:w-1/2 relative group'>
            <div className='p-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-lg'>
              <div className='w-full h-full bg-white rounded-lg overflow-hidden'>
                <video
                  controls
                  preload='auto'
                  poster='/assets/images/trackMyMoney.png'
                  muted
                  className='w-full h-auto rounded-lg'
                >
                  <source
                    src='/assets/videos/trackMyMoney.mp4'
                    type='video/mp4'
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-1/2 flex flex-col gap-6 justify-between items-start text-left'>
            <div>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                Featured Project
              </p>
              <h3 className='text-2xl font-bold'>Track My Money</h3>
            </div>
            <p className='text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md'>
              A fully functional Budget Tracker to help us maintain our incomes
              and expenses, and{' '}
              <span className='text-textGreen'>visualize</span> our financial
              summary using charts, categorize them using{' '}
              <span className='text-textGreen'>customized tags</span>, in any
              currency. The end users can authenticate using{' '}
              <span className='text-textGreen'>Clerk</span> and the database is
              maintained in <span className='text-textGreen'>PostgresDB</span>.
            </p>
            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-1 md:gap-5 justify-start text-textDark'>
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>Clerk</li>
              <li>PostgresSQL</li>
              <li>React-Query</li>
              <li>Prisma</li>
            </ul>
            <div className='text-2xl flex gap-4'>
              <a
                className='hover:text-textGreen duration-300'
                href='https://github.com/Hemant297/Track-My-Money'
                target='_blank'
                rel='noopener noreferrer'
              >
                <TbBrandGithub />
              </a>
              <a
                className='hover:text-textGreen duration-300'
                href='https://track-my-money-sage.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>

        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className='flex flex-col xl:flex-row gap-6'>
          <a
            className='w-full xl:w-1/2 relative group'
            href='https://noorshop.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='p-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-lg'>
              <div className='w-full h-full bg-white rounded-lg overflow-hidden'>
                <Image
                  className='w-full h-auto object-contain rounded-lg'
                  src={'/assets/images/resume-maker.png'}
                  alt='resume-maker'
                  width={700}
                  height={400}
                />
                <div className='absolute inset-0 bg-textGreen/10 rounded-lg group-hover:bg-transparent duration-300'></div>
              </div>
            </div>
          </a>
          <div className='w-full xl:w-1/2 flex flex-col gap-6 justify-between items-start text-left'>
            <div>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                Featured Project
              </p>
              <h3 className='text-2xl font-bold'>Resume Maker</h3>
            </div>
            <p className='text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md'>
              A ready-to-go website to make a resume in real time, in required
              themes, draggable sections, and download the resume at the end.
            </p>
            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-start text-textDark'>
              <li>ReactJS</li>
              <li>JavaScript</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className='text-2xl flex gap-4'>
              <a
                className='hover:text-textGreen duration-300'
                href='https://github.com/hbansal90/Resume-Maker'
                target='_blank'
                rel='noopener noreferrer'
              >
                <TbBrandGithub />
              </a>
              <a
                className='hover:text-textGreen duration-300'
                href='https://resume-maker-flax.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>

        {/* ============ project Three End here ================== */}
      </div>
    </section>
  )
}

export default Projects
