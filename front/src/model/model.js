export default class Model {
  constructor() {
    this.items = [];
  }
  add(name, tel, adress) {
    const item = {
      id: Math.round(Math.random() * 10000).toString(),
      name: name,
      tel: tel,
      adress: adress,
      chosed: false,
    };
    this.items.push(item);
    this.sendItem();
  }
  delete() {
    let i = 0;
    while (i != this.items.length) {
      if (this.items[i].chosed) {
        this.items.splice(i, 1);
        i--;
      }
      i++;
    }
    this.sendItem();
  }
  choose(id) {
    const index = this.items.findIndex((item) => {
      return item.id == id;
    });

    console.log(index);
    this.items[index].chosed = !this.items[index].chosed;
    console.log(id);
  }

  async loadItems() {
    await fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.items);
        this.items = res.items;
      });
  }
  async sendItem() {
    await fetch("http://localhost:3000/push", {
      method: "POST",
      body: JSON.stringify({ items: this.items }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
