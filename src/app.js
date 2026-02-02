const viewButtons = document.querySelectorAll('.pill-group .pill');
const layerInputs = document.querySelectorAll('[data-layer]');

const updateLayerVisibility = (input) => {
  const target = document.querySelector(`.map-svg [data-layer="${input.dataset.layer}"]`);
  if (!target) {
    return;
  }

  target.classList.toggle('layer-hidden', !input.checked);
};

viewButtons.forEach((button) => {
  button.addEventListener('click', () => {
    viewButtons.forEach((pill) => pill.classList.remove('active'));
    button.classList.add('active');
  });
});

layerInputs.forEach((input) => {
  updateLayerVisibility(input);
  input.addEventListener('change', () => updateLayerVisibility(input));
});
