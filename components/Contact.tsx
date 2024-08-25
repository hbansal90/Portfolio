import React from 'react'
import emailjs from '@emailjs/browser'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault()

    const formElement = e.currentTarget
    const formData = new FormData(formElement)
    
    // Convert FormData to a plain object
    const data = Object.fromEntries(formData.entries())

    try {
      console.log('Sending form data...')
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE!,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
        data,
        { publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY }
      )
      console.log('SUCCESS!', result.text)
      toast.success('Thanks for contacting me, I will get back to you soon.')
    } catch (err) {
      console.error('FAILED...', err)
      toast.error("We can't submit the form, try again later?")
    }
  }

  return (
    <section
      id='contact'
      className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center p-4'
    >
      <p className='font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide'>
        04. What’s Next?
      </p>
      <h2 className='font-titleFont text-5xl font-semibold'>Get In Touch</h2>
      <p className='max-w-[600px] text-center text-textDark'>
        I am currently exploring new opportunities and would love to connect. If
        you have any openings or simply want to chat, my inbox is always open. I
        look forward to hearing from you and will do my best to respond
        promptly!
      </p>
      <form
        className='text-[1.2rem] rounded-[8px] w-full max-w-[50%] mdl:max-w-[80%] xs:max-w-[100%] p-[28px] shadow-[0_34px_35px_rgba(78,78,78,0.25),0_-8px_20px_rgba(78,78,78,0.25),0_2px_4px_rgba(78,78,78,0.25),0_8px_9px_rgba(78,78,78,0.25),0_-2px_3px_rgba(78,78,78,0.25)] font-titleFont mt-7'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col my-3 px-4'>
          <label htmlFor='frm-email'>Email</label>
          <input
            id='frm-email'
            type='email'
            name='user_email'
            autoComplete='email'
            required
            className='text-[1.1rem] my-2 border border-textGreen p-2 rounded-md bg-[#18294375]'
          />
        </div>
        <div className='flex flex-col my-3 px-4'>
          <label htmlFor='frm-phone'>Phone</label>
          <input
            id='frm-phone'
            type='text'
            name='phone'
            autoComplete='tel'
            required
            className='text-[1.1rem] my-2 border border-textGreen p-2 rounded-md bg-[#18294375]'
          />
        </div>
        <div className='flex flex-col xl:flex-row lgl:flex-row  gap-3  px-3 '>
          <div className='flex flex-col w-full'>
            <label htmlFor='frm-first'>First Name</label>
            <input
              id='frm-first'
              type='text'
              name='first'
              autoComplete='given-name'
              required
              className='text-[1.1rem] my-2 border border-textGreen p-2 rounded-md bg-[#18294375]'
            />
          </div>
          <div className='flex flex-col w-full'>
            <label htmlFor='frm-last'>Last Name</label>
            <input
              id='frm-last'
              type='text'
              name='last'
              autoComplete='family-name'
              required
              className='text-[1.1rem] my-2 border border-textGreen p-2 rounded-md bg-[#18294375]'
            />
          </div>
        </div>
        <div className='flex flex-col my-3 px-4'>
          <label htmlFor='frm-message'>Message</label>
          <textarea
            id='frm-message'
            rows={3}
            name='message'
            className='text-lg my-2 p-[4px] border border-textGreen rounded-md bg-[#18294375] resize-none'
          ></textarea>
        </div>
        <div className='flex items-center my-3'>
          <button
            type='submit'
            className='w-36 h-12 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300 m-auto'
          >
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </section>
  )
}

export default Contact
