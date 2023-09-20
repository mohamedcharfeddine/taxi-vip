import React from "react";

const Header = () => {
	return (
		<>
			<section className="bg-center bg-no-repeat bg-[url('/assets/header.png')] bg-cover">
				<div className="px-4 mx-auto max-w-screen-xl py-24 lg:py-56">
					<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-primary md:text-5xl lg:text-6xl">
						Taxi Vip Mechelen
					</h1>
					<div className="text-white -mt-3 text-xl">
						Luxurious Transportation
					</div>
					<div className="text-white text-2xl py-8 space-y-8">
						Welkom op onze websiteBent u op zoek naar een taxi? Neem gerust
						<br />
						contact met ons op!​Wij zijn 24/7 beschikbaar{" "}
					</div>

					<div className="flex flex-col space-y-4 sm:flex-row sm:justify-start sm:space-y-0 sm:space-x-4">
						<a
							href="#"
							className="inline-flex justify-start items-center py-3 px-5 text-base font-bold text-center text-dark rounded-full bg-primary">
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
