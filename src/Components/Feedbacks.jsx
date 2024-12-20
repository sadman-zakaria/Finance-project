import person1 from "../assets/person-1.png";
import person2 from "../assets/person-2.png";
import person3 from "../assets/person-3.png";
import quote from "../assets/quote.svg";

const reviews = [
  {
    image: person1,
    name: "Hadid Khan",
    review:
      "Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.",
    status: "UI/UX Designer",
  },
  {
    image: person2,
    name: "Wade Warren",
    review:
      "It's is both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment.",
    status: "Web Designer",
  },
  {
    image: person3,
    name: "Jenny Wilson",
    review:
      "I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. ",
    status: "Trust Administrator",
  },
];

const Feedbacks = () => {
  return (
    <section className="gap-8 grid grid-cols-1 md:grid-cols-3">
      {reviews.map((item, i) => (
        <div
          className="bg-[#27232f]/25 px-6 py-14 rounded-2xl space-y-8"
          key={i}
        >
          <div className="bg-[#3d3f54] flex h-14 items-center justify-center p-2 rounded-full w-14">
            <img alt="icon" className="w-1/2" src={quote} />
          </div>

          <p>&quot;{item.review}&quot;</p>

          <div className="flex gap-2 items-center">
            <img
              alt={item.name}
              className="h-12 rounded-full w-12"
              src={item.image}
            />

            <div>
              <h5 className="font-bold">{item.name}</h5>

              <p className="text-secondary text-sm">{item.status}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Feedbacks;