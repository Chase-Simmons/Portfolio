const allParticles = {};

let totalParticles = 0;

const config = {
  speed: 10,
  radius: 6,
  amount: 20,
};

function buildParticle() {
  const particle = document.createElement('span');

  particle.style.transition = `all ${config.speed}s linear`;
  particle.style.width = `6vw`;
  particle.style.height = `${config.radius}px`;
  particle.classList.add('particle');

  setTimeout(() => {
    document.body.childNodes[3].childNodes[0].childNodes[1].childNodes[0].appendChild(
      particle
    );

    particle.style.transform = `translate(10vw, 4.3vh)`;

    function translate() {
      setTimeout(() => {
        particle.style.transform = `translate(90vw, 4.3vh)`;
        setTimeout(() => {
          particle.style.transform = `translate(10vw, 4.3vh)`;
          setTimeout(() => {
            translate();
          }, 1000 * config.speed - 100);
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
