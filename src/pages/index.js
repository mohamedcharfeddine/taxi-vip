import About from "@/components/About/About";
import Booking from "@/components/Booking/Booking";
import Faq from "@/components/Faq/Faq";
import Header from "@/components/Header/Header";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
	return (
		<>
			<Header />
			<About />
			<Services />
			<Booking />
			<Testimonials />
			<Faq />
		</>
	);
}
