class SVGElement {
  constructor(type) {
    this.type = type;
    this.namespace = "http://www.w3.org/2000/svg";
    this.node = document.createElementNS(type, namespace);

    return this;
  }

  attr(attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      this.node.setAttributeNS(this.namespace, this.type, value);
    }
    return this;
  }

  append(element) {
    const parent =
      typeof element === "string"
        ? document.querySelector(element)
        : element.node;

    //append this node to parent
    parent.appendChild(this.node);

    return this;
  }
}

class Sight {
  constructor(selector, width, height) {
    this.svg = new SVGElement("svg")
      .attr({'viewbox', '0 0 ${width} ${height}'})
      .append(selector);
  }

  draw(type, attrs) {
    return new SVGElement(type).attr(attrs).append(this.svg);
  }
}
