import Image from "next/image";
import React from "react";

const Service = ({ imageUrl, title, description, seeMoreUrl }) => {
	return (
		<>
			

			<div className="text-center text-gray-500 flex flex-col justify-between items-center gap-5 h-[550px]">
				<Image
					src={imageUrl}
					alt={title}
					// className="w-full h-auto"
					width={350}
					height={350}
				/>
				<div className="flex flex-col justify-start items-center gap-2 h-16">
					<h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						<a href="#">{title}</a>
					</h3>
					<p className="w-80">{description}</p>
				</div>
				<a
					href={seeMoreUrl}
					className="justify-center items-end mt-6 py-2 px-8 text-xl font-medium text-center text-white rounded-lg bg-dark">
					See More
				</a>
			</div>
		</>
	);
};

export default Service;
