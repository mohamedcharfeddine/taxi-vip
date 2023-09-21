import React, { useState } from 'react';
import AccordionGrid from './AccordionGrid';

const Faq = () => {


  return (
	<div className="my-16">
	<div className='text-3xl font-bold text-center'>Veel gestelde vragen</div>
	<div className="mx-24 my-16">
	<AccordionGrid />
	</div>
  </div>
  );
};

export default Faq;
