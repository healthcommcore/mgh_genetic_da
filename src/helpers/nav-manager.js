class NavManager {

  constructor(drupalMenu) {
    const order = this.__getOrder(drupalMenu);
    const reordered = this.__reOrder(order, drupalMenu);
    this.menuItems = reordered;
    this.current = 0;
  }

  getMenuItems = () => {
    return this.menuItems;
  }

  setCurrent = (num) => {
    this.current = num;
  }

  getCurrent = () => {
    return this.menuItems[this.current];
  }

  advance = () => {
    this.current++
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

  __setStartFinish = () => {
    return [
      {
        title: "Start",
        weight: -999,
        link: { uri: ""}
      },
      {
        title: "Finish",
        weight: 999,
        link: { uri: ""}
      }
    ];
  }
  
}

export default NavManager;
