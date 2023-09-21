import { SiGooglepodcasts } from "react-icons/si";
import React from "react";
import Image from "next/image";

const About = () => {
	return (
		<>
			<section className="flex flex-col justify-center my-16 ">
				<div className="flex justify-center items-center gap-4">
					<SiGooglepodcasts size={32} />
					<span className="text-2xl font-bold">About Us</span>
				</div>
				<div className="flex justify-center items-center gap-28 text-justify mt-14 flex-col xl:flex-row">

					<p className="xl:w-2/5 mx-12 xl:-ml-10 font-medium text-base/loose text-secondary">
						Taxi Vip Mechelen rijdt voor particulieren en bedrijven in regio
						Mechelen en omliggende steden. Tevens bieden wij ook vervoer van en
						naar de nationale en internationale luchthavens. Contacteer ons op
						0484510519 ,24 uur per dag, 7 dagen per week (ook tijdens
						feestdagen) staan we tot uw dienst!Wij onderscheiden ons van andere
						vervoersbedrijven in Mechelen door onze klantgerichte service,
						kwaliteit en scherpe prijzen. Taxi Vip Mechelen staat bekend als een
						modern bedrijf dat kwaliteit en veiligheid hoog in het vaandel heeft
						staan. 365 dagen per jaar, 24 uur op 24.
					</p>

					<div class="relative flex xl:h-[500px] xl:w-[500px] w-[250px] h-[250px] xl:rounded-3xl rounded-xl bg-primary/50 justify-end before:absolute">
						<img
							class="z-10 xl:mr-6 -mt-5 mr-5 mb-5 "
							src="/assets/about.png"
							width={500}
							height={500}
							type="image"
							alt=""
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
