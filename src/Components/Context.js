import React, { Component } from "react";

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Jordan 'Why Not?' Zer0.3",
        src:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/34b362c8-cef3-4f0a-87ca-18f1e3d94d3f/jordan-why-not-zer03-pf-basketball-shoe-nNTc80.jpg",
        description: "Men's Basketball Shoe",
        content:
          "One of the game's fiercest competitors, triple-double dynamo Russell Westbrook has the motor, muscle and mentality to match his fearlessness—with the stats to back it up. Built to hold up on outdoor courts, the Jordan 'Why Not?' Zer0.3 PF is fine-tuned for players like Russ, who beat opponents with linear speed and aggressiveness.",
        price: 23,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "2",
        title: "Air Jordan 7 Restro SE",
        src:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-01e48bd8-8f0e-4d1e-ae42-153093c5a3fc/air-jordan-7-retro-se-shoe-Hn4sV0.jpg",
        description: "Shoe",
        content:
          "The Air Jordan 7 Retro SE celebrates the Spring holiday with textured leather on the upper inspired by rabbit feet.",
        price: 19,
        colors: ["red", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "3",
        title: "Air Jordan 1 Mid",
        src:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/zzmfk3kwuw3ktkilxfnp/air-jordan-1-mid-shoe-BpARGV.jpg",
        description: "Shoe",
        content:
          "The Air Jordan 1 Mid Shoe is inspired by the first AJ1, offering OG fans a look at how far the Jordan brand has come since 1985.",
        price: 50,
        colors: ["lightblue", "white", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "4",
        title: "Air Jordan 1 Mid",
        src:
          "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ixxrt2qznufizqvoiqhh/air-jordan-1-mid-shoe-BpARGV.jpg",
        description: "Shoe",
        content:
          "The Air Jordan 1 Mid Shoe is inspired by the first AJ1, offering OG fans a look at how far the Jordan brand has come since 1985.",
        price: 15,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "5",
        title: "LeBron 17 FP",
        src:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b49105e4-9e26-4562-9731-8a300a720e3e/lebron-17-fp-basketball-shoe-XNGQVG.jpg",
        description: "Basketball Shoe",
        content:
          "Inspired by colours and elements from the LeBron 4, the LeBron 17 FP harnesses LeBron's strength and speed with stability and support for all-court domination. It features a lightweight mix of knit and heat-moulded yarns for durability. Combined cushioning provides LeBron with the impact support and responsive energy return he needs to power through the long season.",
        price: 60,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "6",
        title: "Nike Zoom Rize 2",
        src:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/329e0a55-c235-40fb-8c72-1c53c2b43acb/zoom-rize-2-basketball-shoe-Fwb6jc.jpg",
        description: "Basketball Shoe",
        content:
          "It's simple: Less weight plus more responsiveness equals a greater return on your energy. With cushioning that responds with every step, the Nike Zoom Rize 2 combines lightweight, extra-durable materials to help you outlast your opponents all season long.",
        price: 17,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
    ],
    cart: [],
    total: 0,
  };

  addCart = (id) => {
    const { products, cart } = this.state;
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      this.setState({ cart: [...cart, ...data] });
    } else {
      alert("The product has been added to cart.");
    }
  };

  reduction = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  increase = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      const { cart } = this.state;
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      this.setState({ cart: cart });
      this.getTotal();
    }
  };

  getTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    this.setState({ total: res });
  };

  componentDidUpdate() {
    localStorage.setItem("dataCart", JSON.stringify(this.state.cart));
    localStorage.setItem("dataTotal", JSON.stringify(this.state.total));
  }

  componentDidMount() {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart !== null) {
      this.setState({ cart: dataCart });
    }
    const dataTotal = JSON.parse(localStorage.getItem("dataTotal"));
    if (dataTotal !== null) {
      this.setState({ total: dataTotal });
    }
  }

  render() {
    const { products, cart, total } = this.state;
    const { addCart, reduction, increase, removeProduct, getTotal } = this;
    return (
      <DataContext.Provider
        value={{
          products,
          addCart,
          cart,
          reduction,
          increase,
          removeProduct,
          total,
          getTotal,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
