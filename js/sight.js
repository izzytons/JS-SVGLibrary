class SVGElement {
  constructor(type) {
    this.type = type;
    this.namespace = "http://www.w3.org/2000/svg";
    this.node = document.createElementNS(type, namespace);

    return this;
  }

  attr(attrs) {
    for ((key, value) of Object.entries(attrs)) {
      this.node.setAttributeNS(key, value);
    }
    return this;
  }

  append(element) {
    if (typeof element == "string") {
      const parent = document.querySelector(element);
    } else {
      const parent = element.node;
    }
    return this;
  }
}

class Sight {
  constructor(selector, width, height) {
    this.svg = new SVGElement("svg").attr(viewbox);
  }

  draw(type, attrs) {
    return new SVGElement(type).attr(attrs).append(svg);
  }
}
