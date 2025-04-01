export default function Home() {
  const cardsData = [
    {
      title: "Card Without An Image",
      text: "Lorem epic dolor stack amet epic adipisicing elit.",
    },
    {
      text: "This card doesn't even have a title! No image, no title. Just a bunch of text. Still, this card belongs here!",
    },
    {
      title: "Card with title and image",
      text: "Lorem epic dolor stack amet consectetur.",
      image: `https://images.unsplash.com/photo-1530714457710-6bf1899c1d32?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHZpYnJhbnQlMjBjb2xvcnN8ZW58MHwwfDB8fHww`,
    },
    {
      text: "This card has an image, but no title.",
      image: `https://images.unsplash.com/photo-1528811692195-d5037ac4b7cc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHx2aWJyYW50JTIwY29sb3JzfGVufDB8MHwwfHx8MA%3D%3D`,
    },
  ];
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-slate-300">
      <ul className="mx-auto grid max-w-5xl grid-cols-2 items-start gap-4 p-6">
        {cardsData.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </ul>
    </main>
  );
}

function Card(props) {
  return (
    <li className="group overflow-hidden rounded-xl bg-white p-4 shadow-md ring-1 ring-black/5 transition hover:-translate-y-px hover:shadow-lg not-[:has(img,h2)]:text-2xl/[1.4] has-[img]:p-0">
      {props.image && <img src={props.image} alt="" className="mb-4" />}
      <div className="grid gap-2 group-has-[img]:p-4">
        {props.title && (
          <h2 className="text-xl font-medium group-not-[:has(img)]:text-2xl">
            {props.title}
          </h2>
        )}
        <p className="text-slate-700">{props.text}</p>
      </div>
    </li>
  );
}
