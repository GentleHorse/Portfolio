import InfoPop from "./InfoPop.jsx";
import CollisionObject from "../utilComponents/CollisionObject";

import softThickClick from "../../../public/sounds/soft-thick-click.wav";

export default function InfoPops() {
  return (
    <>
      {/* DEBUG - POSITION, ROTATION */}
      {/* <CollisionObject /> */}

      {/* ATERLIER AREA | Essential oil */}
      <InfoPop
        position={[-8.5, 0, -5.0]}
        rotation={[0, 0, 0]}
        containerWidth={280}
        title="Essential Oil"
        titleHeight={4.5}
        titleDistance={2.0}
        titleFontSize={40.0}
        infoIconDistance={1.0}
        infoIconHeight={3.0}
        infoIconWidth={80}
        textFontSize={20.0}
        text="Good smell in the room makes me relaxed, and at the same time activated. My favorites are lavender and frankincense."
        sound={softThickClick}
      />

      {/* ATERLIER AREA | Workshop table */}
      <InfoPop
        position={[1.75, 0, 2.5]}
        rotation={[0, -Math.PI * 0.5, 0]}
        containerWidth={350}
        title="Hands-on Practice"
        titleHeight={4.5}
        infoIconDistance={2.0}
        infoIconWidth={80}
        infoIconHeight={4.5}
        textFontSize={20.0}
        text="Sense of touch is important for me, especially working on digital products. Love sketching ideas on physical notebooks, making mock-ups with paper and  cardboards."
        sound={softThickClick}
      />

      {/* MUSEUM AREA | Accounting */}
      <InfoPop
        position={[-1.0, 0, 51.0]}
        rotation={[0, Math.PI * 0.8, 0]}
        containerWidth={300}
        title="Accounting"
        titleFontSize={50.0}
        infoIconDistance={2.0}
        textFontSize={18.0}
        text="I used to work in the accounting industry in Japan. It was fun to analyse things, find out solutions. Personally I found some similarities in programming and that's why I can also enjoy it."
        sound={softThickClick}
      />

      {/* MUSEUM AREA | Local cuisine map */}
      <InfoPop
        position={[-0.35, 0, 62.5]}
        rotation={[0, Math.PI * 0.8, 0]}
        containerWidth={300}
        title="My First Design"
        titleFontSize={50.0}
        infoIconDistance={2.0}
        textFontSize={18.0}
        text="My first design experience was to make the local food map for guests of the hotel in Tokyo. Thinking and making for someone always bring me excitements."
        sound={softThickClick}
      />

      {/* MUSEUM AREA | SNES & LEGO */}
      <InfoPop
        position={[12.0, 0, 61.0]}
        rotation={[0, Math.PI * 1.45, 0]}
        containerWidth={300}
        titleHeight={4.0}
        title="SNES & LEGO"
        titleFontSize={40.0}
        infoIconDistance={2.0}
        textFontSize={18.0}
        text="Super Nintendo & LEGO were the very first playful interactive experience in my life, which deeply impacted on my creative practices. Now, I enjoy 'making' more than 'playing'."
        sound={softThickClick}
      />

      {/* MUSEUM AREA | Piano */}
      <InfoPop
        position={[8.0, 0, 63.75]}
        rotation={[0, Math.PI * 1.15, 0]}
        containerWidth={300}
        title="Piano"
        titleFontSize={50.0}
        infoIconDistance={2.0}
        textFontSize={18.0}
        text="I used to play classic piano pieces, and I like them. When I want to focus on projects deeply, I always choose them for listening."
        sound={softThickClick}
      />

      {/* MUSEUM AREA | Japanese Nature, mountains */}
      <InfoPop
        position={[2.75, 0, 74.0]}
        rotation={[0, Math.PI * 1.0, 0]}
        containerWidth={500}
        titleHeight={4.75}
        titleDistance={3.5}
        title="Nature in Japan"
        titleFontSize={50.0}
        infoIconDistance={2.0}
        textFontSize={18.0}
        text="I was born and raised in the small village in Aichi prefecture in Japan. In my childhood, my family used to go hiking in Nagano prefecture, which is famous for rich forests and mountains. And after I grew up, I often visited Hakone for seeking rich nature. Nature is defintely one of my bigggest source of inspirations all the time."
        sound={softThickClick}
      />

      {/* MUSEUM AREA | Choir */}
      <InfoPop
        position={[18.5, 0, 69.0]}
        rotation={[0, Math.PI * 1.4, 0]}
        containerWidth={300}
        title="Choir"
        titleFontSize={50.0}
        infoIconDistance={2.0}
        textFontSize={18.0}
        text="When I was a child, I belonged to the children's choir. There we sang not only Japanese traditional folk songs, but also sang hymns, gospel songs, or other countries' traditional songs."
        sound={softThickClick}
      />

      {/* MUSEUM AREA | Classical art paintings */}
      <InfoPop
        position={[22.5, 0, 79.0]}
        rotation={[0, Math.PI * 1.0, 0]}
        containerWidth={300}
        title="Classical Art Paintings"
        titleDistance={2.25}
        titleFontSize={40.0}
        infoIconDistance={2.0}
        textFontSize={18.0}
        text="I like visiting museums for seeing classical art paintings. Here's some of my favorites painted by Piet Mondriaan, Pieter Claesz and Kuniyoshi Utagawa."
        sound={softThickClick}
      />

      {/* MUSEUM AREA | Books */}
      <InfoPop
        position={[35.5, 0, 76.5]}
        rotation={[0, -Math.PI * 0.5, 0]}
        containerWidth={450}
        titleHeight={4.0}
        title="Novels, Books about Cultures"
        infoIconDistance={2.0}
        titleFontSize={40.0}
        textFontSize={18.0}
        text="Nowadays you can easily and quickly get informations via Internet or AI such as Chat GPT. But sometimes, I feel like it's just as important to take my time and learn things at my own pace."
        sound={softThickClick}
      />
    </>
  );
}
