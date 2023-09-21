import React from "react";

const Header = () => {
	return (
		<>
			<section className="bg-center bg-no-repeat bg-[url('/assets/header.png')] bg-cover">
				<div className="px-4 mx-auto max-w-screen-xl py-24 lg:py-56">
					<h1 className="my-4 text-4xl text-center xl:text-start font-extrabold tracking-tight leading-none text-primary md:text-5xl lg:text-6xl">
						Taxi Vip Mechelen
					</h1>
					<div className="text-white -mt-3 text-xl text-center xl:text-start">
						Luxurious Transportation
					</div>
					<div className="text-white text-2xl py-8 space-y-8 text-center xl:text-start">
						Welkom op onze websiteBent u op zoek naar een taxi? Neem gerust
						contact met ons op!​Wij zijn 24/7 beschikbaar
					</div>

					<div className="flex flex-col xl:flex-row xl:justify-start justify-center items-center ">
						<a
							href="#"
							className="inline-flex justify-start items-center py-3 px-5 text-base font-bold text-center text-dark rounded-full bg-primary w-52">
							Neem Contact op
						</a>
						<a
							href="#"
							className="inline-flex justify-start items-center py-3 px-5 text-base font-bold text-center text-white">
							+32 (0) 484510519
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default Header;
