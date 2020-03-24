class NavManager {

  constructor() {
    this.menuItems = [];
    this.current = 0;
  }

  initialize = (drupalMenu) => {
    const order = this.__getOrder(drupalMenu);
    const reordered = this.__reOrder(order, drupalMenu);
    this.__setVisitedProp(reordered);
    this.menuItems = reordered;
    //this.menuItems.unshift(this.__setStart());
  }

  getMenuItems = () => {
    return this.menuItems;
  }

  getNavigation = () => {
    return {
      current: this.getCurrent(),
      previous: this.getPrev(),
      next: this.getNext()
    };
  }

  setCurrent = (num) => {
    this.current = num;
  }

  getCurrent = () => {
    return this.menuItems[this.current];
  }

  getNext = () => {
    const next = this.current + 1;
    return this.menuItems[next];
  }

  getPrev = () => {
    const prev = this.current - 1;
    return this.menuItems[prev] && false;
  }

  advance = () => {
    this.current++
    return this;
  }

  advance = () => {
    this.current--
    return this;
  }

  reset = () => {
    this.current = 0;
  }

  getNext = () => {
    if (this.current >= this.menuItems.length) {
      return false;
    }
    return this.menuItems[++this.current];
  }

  __getOrder = (items) => {
    const order = []
    items.forEach( (item) => {
      order.push(item.node.weight);
    });
    return order.sort().reverse();
  }

  __reOrder = (order, items) => {
    const reordered = [];
    order.forEach( (num) => {
      items.forEach( (item) => {
        let values = Object.values(item);
        if(item.node.weight === num) {
          reordered.push(values[0]);
        }
      });
    });
    return reordered;
  }

  __setVisitedProp = (items) => {
    items.forEach( (item) => {
      item.visited = false;
    });
  }

  __setStart = () => {
    return {
      title: "Entrance",
      weight: -999,
      link: { uri: ""},
      visited: true
    }
      /*
      {
        title: "Finish",
        weight: 999,
        link: { uri: ""}
      }
      */
  }
}

export default NavManager;
