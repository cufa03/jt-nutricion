import React from 'react';


const page = () => {
	return (
		<div classNameName="pt-[50px]">

      <h4 className='p-6 ml-4 mt-8 text-4xl font-semibold dark:text-gray-300'>Sobre <span className='underline decoration-[#F7AB0A]'>mi:</span>{' '}

      </h4>
      <div className="flex items-center">
        <img
          src='https://as1.ftcdn.net/v2/jpg/04/21/82/52/1000_F_421825295_odbXVqcXh9N3EHL1KlMj7ZA4STXj4bMi.jpg'
          className='ml-10 md:mb-0 flex-shrink-0 w-36 h-36 object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[410px]'
        />
        <div className='space-y-10 px-0 md:px-10'>

          <p className='text-base dark:text-gray-400'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
		</div>
	);
};

export default page;
