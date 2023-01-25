"use client";
import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

const page = () => {

  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    window.location.href = `mailto:pabloescales@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

	return (
		<div className="pt-[30px]">
			<div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <div>
          <h3>
            Lorem ipsum
          </h3>
        </div>
        <div className='flex flex-col space-y-10'>
          {/* <h4 className='text-4xl font-semibold text-center mt-24'>
            Hazme tu consulta{' '}
            <span className='decoration-orange-500 underline'>let's talk.</span>
          </h4> */}
          <div className='flex item-center space-x-5 justify-left ml-6'>
            <PhoneIcon className='text-orange-500 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+34 613836738</p>
          </div>
          <div className='flex item-center space-x-5 justify-left ml-6'>
            <EnvelopeIcon className='text-orange-500 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>juanignacionutricion@gmail.com</p>
          </div>
          <div className='flex item-center space-x-5 justify-left ml-6'>
            <MapPinIcon className='text-orange-500 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>Sabadell - España</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col space-y-2 w-fit mx-auto'
          >
          <div className='flex space-x-2'>
            <input
              {...register('name')}
              placeholder='Name'
              className='contactInput'
              type="text"
            />
            <input
              {...register('email')}
              placeholder='Email'
              className='contactInput'
              type="email"
            />
          </div>
          <input
            {...register('subject')}
            placeholder='Subject'
            className='contactInput'
            type="text"
          />
          <textarea
            {...register('message')}
            placeholder='Message'
            className='contactInput'
          />
          <button
            type='submit'
            className='bg-orange-500 py-5 px-10 rounded-md text-black font-bold text-lg'
          >
            Submit
          </button>
        </form>
        </div>
      </div>
		</div>
	);
};

export default page;
