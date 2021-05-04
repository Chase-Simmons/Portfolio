const allParticles = {};

let totalParticles = 0;

const config = {
  speed: 10,
  radius: 6,
  amount: 40,
};

function buildParticle() {
  const particle = document.createElement('span');

  particle.style.transition = `all ${config.speed}s linear`;
  particle.style.width = `${config.radius}px`;
  particle.style.height = `${config.radius}px`;
  particle.classList.add('particle');

  setTimeout(() => {
    document.body.childNodes[3].childNodes[0].childNodes[1].childNodes[0].appendChild(
      particle
    );

    particle.style.transform = `translate(53.7vw, 19.85vh)`;

    function translate() {
      setTimeout(() => {
        particle.style.transform = `translate(96.5vw, 24.7vh)`;
        setTimeout(() => {
          particle.style.transform = `translate(93.3vw, 72.5vh)`;
          setTimeout(() => {
            particle.style.transform = `translate(50.2vw, 67.7vh)`;
            setTimeout(() => {
              particle.style.transform = `translate(53.7vw, 19.85vh)`;
              setTimeout(() => {
                translate();
              }, 1000 * config.speed - 100);
            }, 1000 * config.speed);
          }, 1000 * config.speed);
        }, 1000 * config.speed);
      }, 100);
    }
    translate();

    console.log(allParticles);
    totalParticles++;
    allParticles[`${totalParticles}`] = particle;
    if (totalParticles < config.amount) buildParticle();
  }, 1000);
}

buildParticle();

export default allParticles;
