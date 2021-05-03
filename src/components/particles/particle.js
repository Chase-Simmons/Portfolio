const allParticles = {};

let totalParticles = 0;

const config = {
  speed: 10,
  radius: 6,
  amount: 10,
};

function buildParticle() {
  const particle = document.createElement('span');

  particle.style.transition = `all ${config.speed}s`;
  particle.style.width = `${config.radius}px`;
  particle.style.height = `${config.radius}px`;
  particle.classList.add('particle');

  setTimeout(() => {
    document.body.childNodes[3].childNodes[0].childNodes[1].childNodes[0].appendChild(
      particle
    );

    particle.style.transform = `translate(2vw, 5vh)`;

    setTimeout(() => {
      particle.style.transform = `translate(89vw, 27vh)`;
    }, 1000);

    console.log(allParticles);
    totalParticles++;
    allParticles[`${totalParticles}`] = particle;
    if (totalParticles < config.amount) buildParticle();
  }, 1000);
}

buildParticle();

export default allParticles;
