import App from './App.js';

const render = (instance, root) => {
  root.appendChild(instance.createElement());
  instance.render(); // Initial render
};

const _makeRootElement = ({ id }) => {
  const styles = document.createElement('style');

  // Styles. Shouldn't need much since working with Canvas
  styles.textContent = `
html,body {
  height: 100%;
}
body {
  margin: 0;
}
#root {
  width: 100%;
  height: 100%;
}
`.trim();
  document.head.appendChild(styles);

  const root = document.createElement('div');
  root.setAttribute('id', id);
  document.body.appendChild(root);
};

_makeRootElement({ id: 'root' });

document.addEventListener('DOMContentLoaded', () => {
  const { width, height } = document.body.getBoundingClientRect();

  const app = new App({
    width,
    height,
  });

  render(app, document.querySelector('#root'));
});
