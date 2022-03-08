import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const TextWithImage = () => (
  <section className="container py-48 grid md:grid-cols-2">
    <h2 className="col-span-full">About Us!</h2>
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae adipisci
        dolorum est tenetur quam hic officia tempore, sequi obcaecati
        perferendis. Vel voluptates, reprehenderit nemo dicta exercitationem
        magnam perferendis optio.{' '}
      </p>
      <p>
        Deleniti consequatur exercitationem nihil quis voluptatem. Deserunt ad
        assumenda iusto dolorem.
      </p>
    </div>
    <StaticImage
      width={200}
      height={200}
      objectFit="contain"
      src="../images/logo-colored.svg"
      alt="Twin Hawks Outdoors logo"
    />
  </section>
);

export default TextWithImage;
