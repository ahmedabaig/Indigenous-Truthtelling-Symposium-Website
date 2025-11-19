"use client"

import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../components/Button';
import styles from './form.module.css'

export interface ContactUsPayload {
  subject: string;
  emailAddress: string;
  name: string;
  message: string;
}

function ContactUs() {
  const { register, handleSubmit } = useForm<ContactUsPayload>();
  const onSubmit: SubmitHandler<ContactUsPayload> = (data) => console.log(data)

  return (
    <div className="flex flex-col md:mx-30 pt-20 sm:pt-24">
      <h3 className="my-12 italic text-yellow-300 text-3xl/relaxed md:text-5xl/relaxed text-center">Get In Contact with the Indigenous Art for Education Project</h3>
      <div className='relative mb-24'>
        <div className='hidden md:block absolute inset-0 h-full w-full bg-[#E9C060] -translate-x-4 translate-y-4 rounded-4xl'></div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex relative flex-col gap-6 bg-[#383A52] p-12 md:rounded-4xl z-2">
          <div className="flex flex-col gap-3">
            <label htmlFor="subject" className={styles.label}>Subject:</label>
            <input {...register("subject", {required: true})} className={styles.text} type="text" id="subject" />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="email_address" className={styles.label}>Email Address:</label>
            <input {...register("emailAddress", {required: true})} className={styles.text} type="email" id="email_address" />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="name" className={styles.label}>Name:</label>
            <input {...register("name", {required: true})} className={styles.text} type="text" id="name" />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="your_message" className={styles.label}>Your Message:</label>
            <textarea {...register("message", {required: true, maxLength: 500})} className={styles.text} id="your_message" />
          </div>
          <button type="submit" className='cursor-pointer w-fit m-auto'>
            <Button borderColor={'border-[#F1BE4B]'} text={'Submit'}></Button>
          </button>
        </form>
      </div>
    </div>

  );
}

export default ContactUs;