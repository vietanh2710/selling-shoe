import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      _id: "1",
      title: "Jordan 'Why Not?' Zer0.3",
      src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/34b362c8-cef3-4f0a-87ca-18f1e3d94d3f/jordan-why-not-zer03-pf-basketball-shoe-nNTc80.jpg",
      description: "Men's Basketball Shoe",
      content:
        "One of the game's fiercest competitors, triple-double dynamo Russell Westbrook has the motor, muscle and mentality to match his fearlessness—with the stats to back it up. Built to hold up on outdoor courts, the Jordan 'Why Not?' Zer0.3 PF is fine-tuned for players like Russ, who beat opponents with linear speed and aggressiveness.",
      price: 23,
      colors: ["red", "black", "teal"],
      sizes: ["40", "40.5", "41", "41.5", "42", "43"],
      size: null,
      count: 1,
      type: "shoes",
    },
    {
      _id: "2",
      title: "Air Jordan 7 Restro SE",
      src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-01e48bd8-8f0e-4d1e-ae42-153093c5a3fc/air-jordan-7-retro-se-shoe-Hn4sV0.jpg",
      description: "Shoe",
      content:
        "The Air Jordan 7 Retro SE celebrates the Spring holiday with textured leather on the upper inspired by rabbit feet.",
      price: 19,
      colors: ["red", "teal"],
      sizes: ["40", "40.5", "41", "41.5", "42", "43"],
      size: null,
      count: 1,
      type: "shoes",
    },
    {
      _id: "3",
      title: "Air Jordan 1 Mid",
      src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/zzmfk3kwuw3ktkilxfnp/air-jordan-1-mid-shoe-BpARGV.jpg",
      description: "Shoe",
      content:
        "The Air Jordan 1 Mid Shoe is inspired by the first AJ1, offering OG fans a look at how far the Jordan brand has come since 1985.",
      price: 50,
      colors: ["lightblue", "white", "teal"],
      sizes: ["40", "40.5", "41", "41.5", "42", "43"],
      size: null,
      count: 1,
      type: "shoes",
    },
    {
      _id: "4",
      title: "Air Jordan 1 Mid",
      src: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ixxrt2qznufizqvoiqhh/air-jordan-1-mid-shoe-BpARGV.jpg",
      description: "Shoe",
      content:
        "The Air Jordan 1 Mid Shoe is inspired by the first AJ1, offering OG fans a look at how far the Jordan brand has come since 1985.",
      price: 15,
      colors: ["orange", "black", "teal"],
      sizes: ["40", "40.5", "41", "41.5", "42", "43"],
      size: null,
      count: 1,
      type: "shoes",
    },
    {
      _id: "5",
      title: "LeBron 17 FP",
      src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b49105e4-9e26-4562-9731-8a300a720e3e/lebron-17-fp-basketball-shoe-XNGQVG.jpg",
      description: "Basketball Shoe",
      content:
        "Inspired by colours and elements from the LeBron 4, the LeBron 17 FP harnesses LeBron's strength and speed with stability and support for all-court domination. It features a lightweight mix of knit and heat-moulded yarns for durability. Combined cushioning provides LeBron with the impact support and responsive energy return he needs to power through the long season.",
      price: 60,
      colors: ["orange", "black", "teal"],
      sizes: ["40", "40.5", "41", "41.5", "42", "43"],
      size: null,
      count: 1,
      type: "shoes",
    },
    {
      _id: "6",
      title: "Nike Zoom Rize 2",
      src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/329e0a55-c235-40fb-8c72-1c53c2b43acb/zoom-rize-2-basketball-shoe-Fwb6jc.jpg",
      description: "Basketball Shoe",
      content:
        "It's simple: Less weight plus more responsiveness equals a greater return on your energy. With cushioning that responds with every step, the Nike Zoom Rize 2 combines lightweight, extra-durable materials to help you outlast your opponents all season long.",
      price: 17,
      colors: ["orange", "black", "teal"],
      sizes: ["40", "40.5", "41", "41.5", "42", "43"],
      size: null,
      count: 1,
      type: "shoes",
    },
    {
      _id: "7",
      title: "Nike Zoom Rize 2",
      src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/329e0a55-c235-40fb-8c72-1c53c2b43acb/zoom-rize-2-basketball-shoe-Fwb6jc.jpg",
      description: "Basketball Shoe",
      content:
        "It's simple: Less weight plus more responsiveness equals a greater return on your energy. With cushioning that responds with every step, the Nike Zoom Rize 2 combines lightweight, extra-durable materials to help you outlast your opponents all season long.",
      price: 17,
      colors: ["orange", "black", "teal"],
      sizes: ["m", "l"],
      size: null,
      count: 1,
      type: "clothes",
    },
  ],
  cart: [],
  total: 0,
};

const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const id = action.payload.id;
      const size = action.payload.size;

      const item = state.products.find((product) => product._id === id);

      const result = {
        ...item,
        size,
      };

      state.cart = [...state.cart, ...[result]];
    },

    reduction: (state, action) => {
      const id = action.payload.id;
      const size = action.payload.size;

      const result = state.cart.map((item) => {
        return {
          ...item,
          count:
            item._id === id && item.size === size
              ? item.count === 1
                ? 1
                : (item.count -= 1)
              : item.count,
        };
      });

      state.cart = result;
    },

    increase: (state, action) => {
      const id = action.payload.id;
      const size = action.payload.size;

      const result = state.cart.map((item) => {
        return {
          ...item,
          count:
            item._id === id && item.size === size
              ? (item.count += 1)
              : item.count,
        };
      });

      state.cart = result;
    },

    removeProduct: (state, action) => {
      const id = action.payload.id;
      const size = action.payload.size;

      if (window.confirm("Bạn có chắc chắn muốn xoá sản phẩm?")) {
        const cloneData = [...state.cart];

        const indexRecord = state.cart.findIndex((item) => {
          return item._id === id && item.size === size;
        });

        if (indexRecord !== -1) {
          state.cart = cloneData.filter(
            (_item, index) => index !== indexRecord
          );
        }
      }
    },

    calTotal: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const { addCart, reduction, increase, removeProduct, calTotal } =
  products.actions;

export default products.reducer;
