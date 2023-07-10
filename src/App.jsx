import { useState } from "react";
import "./App.css";
import IconEllipsis from "./IconEllipsis";

const cards = [
  {
    id: 1,
    category: "Work",
    bg: "bg-tw-orange",
    icon: "./images/icon-work.svg",
    period: {
      daily: {
        current: "5hrs",
        previous: "7hrs",
      },
      weekly: {
        current: "32hrs",
        previous: "36hrs",
      },
      monthly: {
        current: "103hrs",
        previous: "128hrs",
      },
    },
  },
  {
    id: 2,
    category: "Play",
    bg: "bg-tw-soft-blue",
    icon: "./images/icon-play.svg",
    period: {
      daily: {
        current: "1hr",
        previous: "2hrs",
      },
      weekly: {
        current: "10hrs",
        previous: "8hrs",
      },
      monthly: {
        current: "23hrs",
        previous: "29hrs",
      },
    },
  },
  {
    id: 3,
    category: "Study",
    bg: "bg-tw-light-red",
    icon: "./images/icon-study.svg",
    period: {
      daily: {
        current: "0hrs",
        previous: "1hr",
      },
      weekly: {
        current: "4hrs",
        previous: "7hrs",
      },
      monthly: {
        current: "13hrs",
        previous: "19hrs",
      },
    },
  },
  {
    id: 4,
    category: "Exercise",
    bg: "bg-tw-green",
    icon: "./images/icon-exercise.svg",
    period: {
      daily: {
        current: "1hr",
        previous: "1hr",
      },
      weekly: {
        current: "4hrs",
        previous: "5hrs",
      },
      monthly: {
        current: "11hrs",
        previous: "18hrs",
      },
    },
  },
  {
    id: 5,
    category: "Social",
    bg: "bg-tw-violet",
    icon: "./images/icon-social.svg",
    period: {
      daily: {
        current: "1hr",
        previous: "3hrs",
      },
      weekly: {
        current: "5hrs",
        previous: "10hrs",
      },
      monthly: {
        current: "21hrs",
        previous: "23hrs",
      },
    },
  },
  {
    id: 6,
    category: "Self Care",
    bg: "bg-tw-soft-orange",
    icon: "./images/icon-self-care.svg",
    period: {
      daily: {
        current: "0hrs",
        previous: "1hr",
      },
      weekly: {
        current: "2hrs",
        previous: "2hrs",
      },
      monthly: {
        current: "7hrs",
        previous: "11hrs",
      },
    },
  },
];

const person = {
  image: "./images/image-jeremy.png",
  name: "Jeremy Robson",
};

function App() {
  const [active, setActive] = useState("weekly");
  return (
    <div className="min-h-screen bg-tw-dark grid place-items-center">
      <main className="text-white w-full max-w-5xl my-grid py-20 lg:py-0 px-10 lg:px-0">
        {/* Start of Person Card */}
        <section className="person bg-tw-dark-blue rounded-2xl">
          <div className="bg-tw-blue p-6 pb-14 rounded-2xl">
            <img
              src={person.image}
              alt={`image of ${person.name}`}
              className="w-20 h-20 object-cover block border-2 border-white rounded-full"
            />
            <p className="text-sm text-tw-pale-blue mt-8">Report for</p>
            <h1 className="text-4xl font-thin">{person.name}</h1>
          </div>

          <ul className="px-6 py-6 flex flex-col space-y-3 text-tw-desaturated-blue">
            <li
              onClick={() => setActive("daily")}
              className={`cursor-pointer hover:text-white transition ${
                active === "daily" && "text-white"
              }`}
            >
              Daily
            </li>
            <li
              onClick={() => setActive("weekly")}
              className={`cursor-pointer hover:text-white transition ${
                active === "weekly" && "text-white"
              }`}
            >
              Weekly
            </li>
            <li
              onClick={() => setActive("monthly")}
              className={`cursor-pointer hover:text-white transition ${
                active === "monthly" && "text-white"
              }`}
            >
              Monthly
            </li>
          </ul>
        </section>
        {/* End of Person Card */}

        {/* Start of Others Cards */}
        {cards.map((card) => (
          <section key={card.id} className="relative min-h-[15rem] lg:min-h-0">
            {/* Start of icon + background */}
            <div
              className={`rounded-2xl h-full flex justify-end items-start pr-5 ${card.bg}`}
            >
              <img src={card.icon} alt={`icon of ${card.category}`} />
            </div>
            {/* End of icon + background */}

            {/* Start of content */}
            <article className="absolute inset-0 top-10 bg-tw-dark-blue rounded-2xl p-6 flex flex-col hover:bg-[#34397b] cursor-pointer transition">
              <div className="flex items-center justify-between">
                <p className="font-[500]">{card.category}</p>

                <button className="py-2 group">
                  <IconEllipsis />
                  <p className="sr-only">icon</p>
                </button>
              </div>

              <h1 className="text-5xl font-thin flex-1 flex items-end">
                {card.period[active].current}
              </h1>
              <h2 className="text-sm text-tw-pale-blue mt-2">
                <span className="capitalize">
                  {active === "daily"
                    ? "Yesterday"
                    : `Last ${active.replace("ly", "")}`}
                </span>{" "}
                - {card.period[active].previous}
              </h2>
            </article>
            {/* End of content */}
          </section>
        ))}
        {/* End of Others Cards */}
      </main>
    </div>
  );
}

export default App;
