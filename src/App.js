import "./styles.css";
import { useState } from "react";
const India = [
  {
    name: "Manali Tourism",
    description:
      "One of the most popular hill stations in Himachal, Manali offers the most magnificent views of the Pir Panjal and the Dhauladhar ranges covered with snow for most parts of the year.",
    rating: "4.5 / 5"
  },
  {
    name: "Leh Ladakh Tourism",
    description:
      "Ladakh is a union territory in the Kashmir region of India. Formerly falling in the state of Jammu & Kashmir, Ladakh was administered a union territory on 31st October 2019. Extending from the Siachen Glacier to the main Great Himalayas, Ladakh is a land like no other. Dominated by dramatic landscapes, Ladakh is known as the world's coldest desert.",
    rating: "4.6 / 5"
  },
  {
    name: "Andaman Tourism",
    description:
      "Replete with turquoise blue water beaches and a bit of history, Andaman & Nicobar Islands is a little slice of paradise tucked around 1,400 km away from the east coast of mainland India. Port Blair, the capital of this union territory, has a major airport and seaport connected with the rest of the country and with various tourist islands via multiple daily ferries.",
    rating: "4.5 / 5"
  }
];

const Nepal = [
  {
    name: "Kathmandu Tourism",
    description:
      "Sprawled over its namesake valley surrounded by Himalayan mountains, Kathmandu is Nepal’s capital and most-visited destination, full of ancient temples, golden pagodas, natural beauty and fascinating villages. At an elevation of 4,344 feet, Kathmandu marks the confluence of the Bagmati and Vishnumati rivers.",
    rating: "4.4 / 5"
  },
  {
    name: "Pokhara Tourism",
    description:
      "Pokhara, the 'Tourist Capital of Nepal,' is the second-largest city in this Himalayan country, after Kathmandu. At an altitude of more than 900m, it is one of the highest cities, making it the base for many world-famous treks.",
    rating: "4.4 / 5"
  },
  {
    name: "Nagarkot Tourism",
    description:
      "Located at a mere 28-kilometre drive away from Kathmandu, Nagarkot offers one of the best views of the Himalayas in the entire region as it has an altitude of 7000 feet (2000 metres)! Perched at the edge of Kathmandu Valley, Nagarkot gives you one of the widest panoramas of the Himalayan ranges - you can spot 8 out of the 13 Himalayan ranges from the comfort of your hotel.",
    rating: "4.0 / 5"
  }
];

const Malaysia = [
  {
    name: "Kuala Lumpur Tourism",
    description:
      "Kuala Lumpur, popularly referred to as KL, is the capital city of Malaysia. Officially the Federal Territory of Kuala Lumpur, it is also the largest city of the country, spreading over almost 245 sq km. Steel-clad skyscrapers, mega shopping malls, renowned monuments, bustling markets and burgeoning nightlife - that is Kuala Lumpur for you!",
    rating: "4.4 / 5"
  },
  {
    name: "Langkawi Tourism",
    description:
      "Attracting over 3 million travellers annually, Langkawi, or the Jewel of Kedah State, is an archipelago of 99 islands in Malaysia. Sprawled over the turquoise Malacca Strait, Langkawi flaunts serene beaches interspersed with cliffs and rainforests, expansive rice paddies, chic promenades, historical relics, and art galleries, bustling bazaars and duty-free shops.",
    rating: "5.0 / 5"
  },
  {
    name: "Georgetown Penang Tourism",
    description:
      "As Malaysia’s fourth most-populated city, Georgetown is the colourful, multicultural capital of Penang Island. Once an eminent trading hub on the Straits of Malacca, the UNESCO-listed city is known for its British colonial buildings, Chinese shophouses, temples, mosques and pristine beaches. Beyond the old town, Georgetown is a modern city with skyscrapers and shopping malls.",
    rating: "4.2 / 5"
  }
];

export default function App() {
  const [content, setContent] = useState(India);
  function onClickHandler(event) {
    console.log(event.target.value);
    var btnValue = event.target.value;
    if (btnValue === "India") {
      setContent(India);
    } else if (btnValue === "Nepal") {
      setContent(Nepal);
    } else if (btnValue === "Malaysia") {
      setContent(Malaysia);
    }
  }

  return (
    <div className="App">
      <h1 className="top-heading">travel</h1>
      <small className="sub-heading">
        Checkout my favourite books. Select genre to get started.
      </small>
      <br />
      <button className="genreBtn" onClick={onClickHandler} value="India">
        India
      </button>
      <button className="genreBtn" onClick={onClickHandler} value="Nepal">
        Nepal
      </button>
      <button className="genreBtn" onClick={onClickHandler} value="Malaysia">
        Malaysia
      </button>
      <hr />
      {content.map((bookObject) => {
        return (
          <div className="book">
            <h2>{bookObject.name}</h2>
            <p>{bookObject.description}</p>
            <small>{bookObject.rating}</small>
          </div>
        );
      })}
    </div>
  );
}
