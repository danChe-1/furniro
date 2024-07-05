import logo from "./logo.png";
import headerImg from "./header-img.jpg";
import shopBg from "./shop-bg.jpg";
import gallery_1 from "./gallery_1.png";
import gallery_2 from "./gallery_2.png";
import gallery_3 from "./gallery_3.png";
import gallery_4 from "./gallery_4.png";
import gallery_5 from "./gallery_5.png";
import gallery_6 from "./gallery_6.png";
import gallery_7 from "./gallery_7.png";
import gallery_8 from "./gallery_8.png";
import gallery_9 from "./gallery_9.png";
const assets = {
  logo,
  headerImg,
  shopBg,
};
const galleryImages = [
  gallery_1,
  gallery_2,
  gallery_3,
  gallery_4,
  gallery_5,
  gallery_6,
  gallery_7,
  gallery_8,
  gallery_9,
];
const product_list = [
  [
    {
      _id: "6674d23e0493b6ddf29fed94",
      name: "Vienna Coffee Table",
      price: "140.00",
      short_description:
        "A modern coffee table with a sleek design, perfect for any living room.",
      sizes: ["M", "L"],
      colors: [
        {
          name: "White",
          bgHex: "#FFFFFF",
        },
        {
          name: "Brown",
          bgHex: "#8B4513",
        },
      ],
      sku: "ct001",
      category: "coffee tables",
      images: [
        "https://www.ikea.com/kw/en/images/products/froetorp-coffee-table-anthracite-marble-effect-black-glass__1022506_pe832776_s5.jpg",
        "https://www.ikea.com/us/en/images/products/borgeby-coffee-table-birch-veneer__0949800_pe800017_s5.jpg",
      ],
      full_description:
        "The Vienna Coffee Table combines modern design with functionality, making it a perfect addition to any living room.",
      discount: 0,
      isNewProduct: false,
      material: ["wood"],
      collectionName: "modern",
      createdAt: "2024-06-21T01:07:10.370Z",
      updatedAt: "2024-06-21T01:07:10.370Z",
      __v: 0,
    },
    {
      _id: "6674d1ff0493b6ddf29fed91",
      name: "Paris Ottoman",
      price: "70.00",
      short_description:
        "A versatile and stylish ottoman, perfect for additional seating or as a footrest.",
      sizes: ["S", "M"],
      colors: [
        {
          name: "Red",
          bgHex: "#FF0000",
        },
        {
          name: "Gray",
          bgHex: "#808080",
        },
      ],
      sku: "ot001",
      category: "ottomans",
      images: [
        "https://www.ikea.com/ae/en/images/products/vimle-footstool-with-storage-hallarp-grey__0949376_pe799683_s5.jpg",
        "https://www.ikea.com/gb/en/images/products/vimle-footstool-with-storage-hallarp-grey__0949377_pe799684_s5.jpg?f=s",
      ],
      full_description:
        "The Paris Ottoman offers a versatile and stylish seating solution for any room.",
      discount: 20,
      isNewProduct: false,
      material: ["fabric"],
      collectionName: "vintage",
      createdAt: "2024-06-21T01:06:07.404Z",
      updatedAt: "2024-06-21T01:06:07.404Z",
      __v: 0,
    },
    {
      _id: "6674d1830493b6ddf29fed8c",
      name: "Berlin Chair",
      price: "60.00",
      short_description:
        "A stylish and comfortable chair, perfect for any dining room or kitchen.",
      sizes: ["S", "M"],
      colors: [
        {
          name: "Gray",
          bgHex: "#808080",
        },
        {
          name: "Blue",
          bgHex: "#0000FF",
        },
      ],
      sku: "ch001",
      category: "chairs",
      images: [
        "https://www.ikea.com/il/he/images/products/ingolf-chair-white__1052477_pe846140_s5.jpg",
        "https://www.ikea.com/us/en/images/products/ingolf-chair-white__1052478_pe846141_s5.jpg?f=s",
      ],
      full_description:
        "The Berlin Chair combines style and comfort, making it an ideal choice for any dining room or kitchen.",
      discount: 0,
      isNewProduct: false,
      material: ["fabric", "metal"],
      collectionName: "contemporary",
      createdAt: "2024-06-21T01:04:03.934Z",
      updatedAt: "2024-06-21T01:04:03.934Z",
      __v: 0,
    },
    {
      _id: "6674d1240493b6ddf29fed88",
      name: "Amsterdam Desk",
      price: "220.00",
      short_description:
        "A modern and functional desk, perfect for any home office.",
      sizes: ["M", "L"],
      colors: [
        {
          name: "Brown",
          bgHex: "#A52A2A",
        },
        {
          name: "Black",
          bgHex: "#000000",
        },
      ],
      sku: "dk001",
      category: "desks",
      images: [
        "https://www.ikea.com/us/en/images/products/lillasen-desk-bamboo__1337866_pe948157_s5.jpg?f=s",
        "https://m.media-amazon.com/images/I/81vk89GpFwL._AC_UF894,1000_QL80_.jpg",
      ],
      full_description:
        "The Amsterdam Desk offers a stylish and practical workspace solution for any home office.",
      discount: 0,
      isNewProduct: false,
      material: ["wood", "metal"],
      collectionName: "industrial",
      createdAt: "2024-06-21T01:02:28.213Z",
      updatedAt: "2024-06-21T01:02:28.213Z",
      __v: 0,
    },
    {
      _id: "6674d0bd0493b6ddf29fed82",
      name: "Reykjavik Cabinet",
      price: "180.00",
      short_description:
        "A spacious and stylish cabinet, perfect for any living room.",
      sizes: ["L", "XL"],
      colors: [
        {
          name: "Black",
          bgHex: "#000000",
        },
        {
          name: "White",
          bgHex: "#FFFFFF",
        },
      ],
      sku: "cb001",
      category: "cabinets",
      images: [
        "https://www.ikea.com/il/he/images/products/hauga-high-cabinet-with-2-doors-white__0932670_pe791579_s5.jpg?f=s",
        "https://www.ikea.com/us/en/images/products/hauga-high-cabinet-with-2-doors-gray__0932665_pe791576_s5.jpg?f=s",
      ],
      full_description:
        "The Reykjavik Cabinet provides a stylish storage solution with ample space for all your essentials.",
      discount: 0,
      isNewProduct: true,
      material: ["wood", "metal"],
      collectionName: "urban",
      createdAt: "2024-06-21T01:00:45.354Z",
      updatedAt: "2024-06-21T01:00:45.354Z",
      __v: 0,
    },
    {
      _id: "6674d03a0493b6ddf29fed7b",
      name: "Helsinki Shelf",
      price: "120.00",
      short_description:
        "A versatile shelf unit, ideal for storage and display.",
      sizes: ["M", "L"],
      colors: [
        {
          name: "White",
          bgHex: "#FFFFFF",
        },
        {
          name: "Oak",
          bgHex: "#D2B48C",
        },
      ],
      sku: "sh001",
      category: "shelves",
      images: [
        "https://www.ikea.com/gb/en/images/products/lommarp-bookcase-dark-blue-green__0740559_pe742064_s5.jpg",
        "https://preview.redd.it/8fgvrv91a3g81.jpg?width=640&crop=smart&auto=webp&s=55caf29918448684e0b540970f56df5c0701418b",
      ],
      full_description:
        "The Helsinki Shelf offers ample storage space while maintaining a sleek, modern look.",
      discount: 0,
      isNewProduct: true,
      material: ["wood"],
      collectionName: "minimalist",
      createdAt: "2024-06-21T00:58:34.554Z",
      updatedAt: "2024-06-21T00:58:34.554Z",
      __v: 0,
    },
    {
      _id: "6674cf0e0493b6ddf29fed72",
      name: "Stockholm Bed",
      price: "350.00",
      short_description:
        "A comfortable and stylish bed, perfect for a good night's sleep.",
      sizes: ["Queen", "King"],
      colors: [
        {
          name: "Brown",
          bgHex: "#8B4513",
        },
        {
          name: "Gray",
          bgHex: "#808080",
        },
      ],
      sku: "bd001",
      category: "beds",
      images: [
        "https://www.ikea.com/gb/en/images/products/neiden-bed-frame-pine-luroey__1102024_pe866848_s5.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhociDfk-xT22wABS2a2X0rXeNTaDFOH3ipxQZEnxpt9hlt6hYJwqBBnq1PJEZ0Vb85Qo&usqp=CAU",
        "https://www.ikea.com/jo/en/images/products/malm-bed-frame-high-white__1101599_pe866770_s5.jpg?f=s",
      ],
      full_description:
        "The Stockholm Bed offers a blend of style and comfort, ensuring a restful sleep.",
      discount: 0,
      isNewProduct: false,
      material: ["wood", "fabric"],
      collectionName: "scandi",
      createdAt: "2024-06-21T00:53:34.742Z",
      updatedAt: "2024-06-21T00:53:34.742Z",
      __v: 0,
    },
    {
      _id: "6674ce910493b6ddf29fed6c",
      name: "Copenhagen Table",
      price: "200.00",
      short_description:
        "A modern dining table with a sleek design, perfect for any dining room.",
      sizes: ["M", "L"],
      colors: [
        {
          name: "Black",
          bgHex: "#000000",
        },
        {
          name: "Wood",
          bgHex: "#A52A2A",
        },
      ],
      sku: "dt001",
      category: "tables",
      images: [
        "https://www.ikea.com/us/en/images/products/danderyd-dining-table-oak-veneer-white__0946318_ph172952_s5.jpg?f=s",
        "https://www.ikea.com/us/en/images/products/lisabo-table-ash-veneer__1221247_pe913674_s5.jpg?f=s",
      ],
      full_description:
        "The Copenhagen Table combines modern design with practicality, making it a great choice for any dining space.",
      discount: 10,
      isNewProduct: true,
      material: ["wood"],
      collectionName: "modern",
      createdAt: "2024-06-21T00:51:29.869Z",
      updatedAt: "2024-06-21T00:51:29.869Z",
      __v: 0,
    },
    {
      _id: "6674cdf90493b6ddf29fed61",
      name: "Oslo Armchair",
      price: "85.00",
      short_description:
        "A compact and comfortable armchair, ideal for any cozy corner.",
      sizes: ["S", "M"],
      colors: [
        {
          name: "Blue",
          bgHex: "#0000FF",
        },
        {
          name: "White",
          bgHex: "#FFFFFF",
        },
        {
          name: "Gray",
          bgHex: "#808080",
        },
      ],
      sku: "ac001",
      category: "armchairs",
      images: [
        "https://www.homesdirect365.co.uk/images/jules-dark-grey-linen-armchair-p78172-132598_zoom.jpg",
        "https://m.media-amazon.com/images/I/91elxDBoVuL.jpg",
        "https://www.livingandhome.co.uk/cdn/shop/files/0009_JM1609_3.jpg?v=1701773842",
      ],
      full_description:
        "The Oslo Armchair offers a stylish and comfortable seating solution for any room.",
      discount: 15,
      isNewProduct: false,
      material: ["fabric"],
      collectionName: "nordic",
      createdAt: "2024-06-21T00:48:57.541Z",
      updatedAt: "2024-06-21T00:48:57.541Z",
      __v: 0,
    },
    {
      _id: "666082fa2811397d915b099d",
      name: "Bergen Sofa",
      price: "150.00",
      short_description:
        "A comfortable and stylish sofa that fits perfectly in any modern living room.",
      sizes: ["M", "L", "XL"],
      colors: [
        {
          name: "Purple",
          bgHex: "#816dfa",
        },
        {
          name: "Gray",
          bgHex: "#808080",
        },
        {
          name: "Sand",
          bgHex: "#B88E2F",
        },
      ],
      sku: "ss002",
      category: "sofas",
      images: [
        "https://st4.depositphotos.com/1023934/37752/i/450/depositphotos_377527168-stock-photo-interior-design-modern-living-room.jpg",
        "https://linea-inc.com/images/made/images/subpromo/Professionals-Sup-Promo-hq-3_620_354_60_s_c1.jpg",
      ],
      full_description:
        "The Bergen Sofa combines modern design with ultimate comfort. Perfect for lounging or entertaining guests.",
      discount: 20,
      isNewProduct: true,
      material: ["leather"],
      collectionName: "scandi",
      createdAt: "2024-06-05T15:23:38.380Z",
      updatedAt: "2024-06-05T15:23:38.380Z",
      __v: 0,
    },
  ],
];

const rooms = [
  {
    name: "Dining",
    url: "https://google.com",
    image: "/src/assets/dining.jpg",
  },
  {
    name: "Living",
    url: "https://google.com",
    image: "/src/assets/living.jpg",
  },
  {
    name: "Bedroom",
    url: "https://google.com",
    image: "/src/assets/bedroom.jpg",
  },
  {
    name: "Bathroom",
    url: "https://google.com",
    image: "/src/assets/bathroom.jpg",
  },
  {
    name: "Outside",
    url: "https://google.com",
    image: "/src/assets/outside.jpg",
  },
];
const homeSlider = [
  {
    id: "01",
    room: "Bed Room",
    name: "Inner Peace",
    bgImage: "/src/assets/inner_peace.png",
    linkTo: "https://google.com",
  },

  {
    id: "02",
    room: "Dining Room",
    name: "Kitchen Comfort",
    bgImage: "/src/assets/kitchen_comfort.png",
    linkTo: "https://google.com",
  },
  {
    id: "03",
    room: "Kids Room",
    name: "Joyfull Childhood",
    bgImage: "/src/assets/children.png",
    linkTo: "https://google.com",
  },
  {
    id: "04",
    room: "Office",
    name: "Workplace comfort",
    bgImage: "/src/assets/office.png",
    linkTo: "https://google.com",
  },
  {
    id: "05",
    room: "Living Room",
    name: "Your room - your rules",
    bgImage: "/src/assets/your_room.png",
    linkTo: "https://google.com",
  },
];
const productReviews = [
  {
    name: "John Doe",
    rating: 5,
    review:
      "Ever since i bought this sofa I can`t get up from it! It is really comfortable, modern-looking and of great quality. I really enjoy using it and recommend everyone to buy it.",
  },
  {
    name: "Alice Smith",
    rating: 4,
    review:
      "This chair is very comfortable and looks great in my living room. The quality is good and it was easy to assemble. I'm very happy with this purchase.",
  },
  {
    name: "Bob Johnson",
    rating: 2,
    review:
      "The table looks nice, but the quality isn't as high as I expected. It scratches easily and isn't as sturdy as I hoped. It's okay for the price, but I wouldn't buy it again.",
  },
  {
    name: "Charlie Brown",
    rating: 5,
    review:
      "Absolutely love this bed frame! It's very stylish and incredibly sturdy. The assembly was straightforward and it adds a modern touch to my bedroom. Highly recommend!",
  },
  {
    name: "David Wilson",
    rating: 3,
    review:
      "The bookshelf is decent. It holds a lot of books and looks nice, but the material feels a bit cheap. It's an average product, nothing exceptional.",
  },
  {
    name: "Eve Davis",
    rating: 1,
    review:
      "I'm very disappointed with this dresser. The drawers are flimsy and it arrived with several scratches. The overall quality is very poor and it's not worth the price at all.",
  },
];
export default {
  rooms,
  assets,
  product_list,
  homeSlider,
  galleryImages,
  productReviews,
};
