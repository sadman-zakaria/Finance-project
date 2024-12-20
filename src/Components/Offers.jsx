import dollar from "../assets/dollar.svg";
import ramp from "../assets/ramp.svg";
import solution from "../assets/solution.svg";

const offerList = [
	{
		description:
			"Cardano, simplified. The debit card that makes crypto spending easy.",
		icon: dollar,
		title: "Cardano Debit Cards",
	},
	{
		description: "Fiat meets crypto, effortlessly buy, sell, and manage.",
		icon: ramp,
		title: "On & Off Ramp",
	},
	{
		description:
			"Empowering businesses with effortless crypto payments and seamless fiat solutions.",
		icon: solution,
		title: "Solutions for business",
	},
];

const Offers = () => {
	return (
		<section className='space-y-12'>
			<h2 className='font-bold leading-tight text-center text-2xl lg:text-3xl'>
				What do we offer?
			</h2>

			<div className='gap-8 grid grid-cols-1 md:grid-cols-3'>
				{offerList.map((item, i) => (
					<div className='flex gap-4' key={i}>
						<div className='bg-[#3d3f54] flex items-center justify-center max-h-12 max-w-12 rounded-xl w-4/5'>
							<img
								alt='icon'
								className='h-6 w-6'
								src={item.icon}
							/>
						</div>

						<div>
							<h4 className='font-bold text-lg'>{item.title}</h4>

							<p className='text-secondary text-sm'>
								{item.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Offers;