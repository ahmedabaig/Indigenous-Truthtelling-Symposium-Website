"use client"

import { useForm } from 'react-hook-form';
import Button from '../components/Button';
import styles from './form.module.css';
import { useState } from 'react';

export interface ContactUsPayload {
  subject: string;
  emailAddress: string;
  name: string;
  message: string;
}

function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit } = useForm<ContactUsPayload>();

  async function onSubmit(data: ContactUsPayload) {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col md:mx-30">
      <h3 className="my-12 italic text-yellow-300 text-3xl/relaxed md:text-5xl/relaxed text-center">Contact the Indigenous Truthtelling Project</h3>
      <div className='relative mb-24'>
        <div className='hidden md:block absolute inset-0 h-full w-full bg-[#E9C060] -translate-x-4 translate-y-4 rounded-4xl'></div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex relative flex-col gap-6 bg-[#383A52] p-12 md:rounded-4xl z-2">
          <div className="flex flex-col gap-3">
            <label htmlFor="subject" className={styles.label}>Subject:</label>
            <input {...register("subject", { required: true })} className={styles.text} type="text" id="subject" />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="email_address" className={styles.label}>Email Address:</label>
            <input {...register("emailAddress", { required: true })} className={styles.text} type="email" id="email_address" />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="name" className={styles.label}>Name:</label>
            <input {...register("name", { required: true })} className={styles.text} type="text" id="name" />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="your_message" className={styles.label}>Your Message:</label>
            <textarea {...register("message", { required: true, maxLength: 500 })} className={styles.text} id="your_message" />
          </div>
          <button type="submit" className='cursor-pointer w-fit m-auto' disabled={submitted}>
            <Button borderColor={!submitted ? 'border-[#F1BE4B]' : 'border-[#7B9F49]'} text={!submitted ? 'Submit' : 'Success'}></Button>
          </button>
        </form>
      </div>
    </div>

  );
}

export default ContactUs;