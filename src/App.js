export default class App {
  constructor({ width, height }) {
    this.width = width;
    this.height = height;
  }

  createElement() {
    const el = document.createElement('canvas');
    el.setAttribute('class', 'canvas');
    el.setAttribute('width', this.width);
    el.setAttribute('height', this.height);
    this.el = el;
    this.ctx = el.getContext('2d');
    return el;
  }

  getStuff() {
    return this.stuff();
  }

  renderBackground() {
    const { ctx, width, height } = this;
    ctx.fillStyle = 'rgba(0,0,0,0.8)';
    ctx.fillRect(0, 0, width, height);
  }

  // Will be called initially once by the renderer. After that it is up to use
  // to call it again whenever we want to re-render.
  render() {
    const { ctx } = this;

    this.renderBackground();

    ctx.fillStyle = 'tan';
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = 'teal';
    ctx.fillRect(30, 30, 50, 50);
  }
}
