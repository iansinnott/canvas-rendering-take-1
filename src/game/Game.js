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
    el.addEventListener('click', this.onClick);

    this.el = el;
    this.ctx = el.getContext('2d');

    return el;
  }

  onClick = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    console.log('clicked', {
      x,
      y,
      event: e,
    });

    const { ctx } = this;

    ctx.fillStyle = 'red';
    ctx.fillRect(x - (size / 2), y - (size / 2), size, size);
  };

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
  //
  // NOTE: This is an INITIAL render right now. I haven't moved to a declarative
  // rendering model, so right now this only gets called once and I imperatively
  // render wherever I want.
  render() {
    this.renderBackground();
  }
}
