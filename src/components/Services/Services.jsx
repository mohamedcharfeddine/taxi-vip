import React from "react";
import Service from "./Service";
import { SiGooglepodcasts } from "react-icons/si";

const Services = () => {
	return (
		<>
			<section className="flex flex-col justify-center my-16 ">
				<div className="flex justify-center items-center gap-4 my-16">
					<SiGooglepodcasts size={32} />
					<span className="text-2xl font-bold">Services</span>
				</div>

				<div className="flex flex-col xl:flex-row justify-around xl:items-start gap-28 w-full">
					<Service
						imageUrl="/assets/service.png"
						title="Lokale taxi diensten"
						description="Onze professionele taxichaffeurs zullen ucomfortabel naar uw bestemming brengen"
						seeMoreUrl={"#"}
					/>
					<Service
						imageUrl="/assets/service.png"
						title="Luchthaven vervoer"
						description="Uw koerierdienst vookerurspartner"
					/>
					<Service
						imageUrl="/assets/service.png"
						title="Groepen en busjes"
						description="Wij brengen u snel en comfortabel naar alle nationale en internationale luchthavens"
					/>
				</div>
			</section>
		</>
	);
};

export default Services;
