class NavManager {
  #menuItems;

  constructor(drupalMenuItems) {
    this.#menuItems = drupalMenuItems;
    console.log(this.#menuItems);
  }

  getMenuItems = () => {
  }

  #getOrder = (items) => {
    const order = []
    items.forEach( (item) => {
      order.push(item.node.weight);
    });
    return order.sort().reverse();
  }

  #reOrder = (order, items) => {
    const reordered = [];
    order.forEach( (num) => {
      items.forEach( (item) => {
        if(item.node.weight === num) {
          reordered.push(item);
        }
      });
    });
    return reordered;
  }
  
}

export default NavManager;
