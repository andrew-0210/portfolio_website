import React from 'react';

type TitleProps = {
  params: {
    title: string;
  };
};

const page = ({ params }: TitleProps) => {
  const { title } = params;
  const formattedTitle = title.replace(/-/g, ' ');
  return (
    <div className='h-screen flex px-[1rem] pt-[7rem]'>
      <h1 className='text-4xl font-bold tracking-tighter'>{formattedTitle}</h1>
    </div>
  );
};

export default page;
