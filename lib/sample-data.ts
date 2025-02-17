import { hashSync } from 'bcrypt-ts-edge'
const sampleData = {
  users: [
    {
      name: 'AbdGaniu',
      email: 'amnetdt@gmail.com',
      password: hashSync('zzzzzz', 10),
      role: 'admin',
    },
  ],
  products: [
    {
      name: 'LOOSE FIT PIQUE JOGGER SWEATSHIRT',
      slug: 'loose-fit-pique-jogger-sweatshirt',
      category: "Men's Sweatshirts",
      images: [
        '/assets/images/Yorke-Flare.webp',
        '/assets/images/Yorke-Flare01.webp',
      ],
      price: '59.99',
      brand: 'Nike',
      rating: '4.5',
      numReviews: 10,
      stock: 5,
      description:
        'Lacoste sporting elegance with an urban twist. Fall in love with this loose, cozy sweatshirt in super-comfortable double-face piqué.',
      isFeatured: true,
      banner: '/assets/images/banner-1.jpeg',
    },
    {
      name: 'LACOSTE TENNIS X NOVAK DJOKOVIC SPORTSUIT JACKET',
      slug: 'lacoste-tennis-x-novak-djokovic-sportsuit-jacket',
      category: "Men's Sweatshirts",
      images: [
        '/assets/images/p2-1.png',
        '/assets/images/p2-2.png',
        '/assets/images/p2-3.png',
      ],
      price: '199.90',
      brand: 'Lacoste',
      rating: '4.2',
      numReviews: 8,
      stock: 10,
      description:
        'Hit the courts like Novak Djokovic with this seamless stretch jacket, made to move your way.',
      isFeatured: true,
      banner: '/assets/images/banner-2.jpeg',
    },
    {
      name: 'SHOWERPROOF SPORTSUIT TRACK PANTS',
      slug: 'showerproof-sportsuit-track-pants',
      category: 'Track Pants',
      images: [
        '/assets/images/imag001.webp',
        '/assets/images/imag002.webp',
        '/assets/images/imag003.jpg',
        '/assets/images/imag004.jpg',
      ],

      price: '149.95',
      brand: 'Nike',
      rating: '4.9',
      numReviews: 3,
      stock: 0,
      description:
        'Stay stylish, whatever the weather. These showerproof track pants are here to protect you from the rain. ',
    },
    {
      name: "MEN'S LACOSTE SPORT FRENCH CAPSULE TRACKSUIT PANTS",
      slug: 'mens-lacoste-sport-french-capsule-tracksuit-pants',
      category: 'Track Pants',
      images: ['/assets/images/p4-1.jpeg', '/assets/images/p4-2.jpeg'],
      price: '125.95',
      brand: 'Lacoste',
      rating: '3.6',
      numReviews: 5,
      stock: 10,
      description:
        'A tricolour design brings a distinctive edge to these lightweight tracksuit pants made of diamond taffeta. ',
    },
    {
      name: 'SHOWERPROOF SPORTSUIT TRACK PANTS',
      slug: 'showerproof-sportsuit-track',
      category: 'Track Pants',
      images: ['/assets/images/p3-1.jpeg', '/assets/images/p3-2.jpeg'],

      price: '149.95',
      brand: 'Nike',
      rating: '4.9',
      numReviews: 3,
      stock: 0,
      description:
        'Stay stylish, whatever the weather. These showerproof track pants are here to protect you from the rain. ',
    },
    {
      name: "MEN'S LACOSTE SPORT FRENCH CAPSULE TRACKSUIT PANTS",
      slug: 'mens-lacoste-sport-french-capsule-tracksuit-pants',
      category: 'Track Pants',
      images: ['/assets/images/p4-1.jpeg', '/assets/images/p4-2.jpeg'],
      price: '102.95',
      brand: 'Lacoste',
      rating: '3.6',
      numReviews: 5,
      stock: 10,
      description:
        'A tricolour design brings a distinctive edge to these lightweight tracksuit pants made of diamond taffeta. ',
    },
    {
      name: 'Hawaiian Shirts 16 70s Shirts For Men,Hippie Shirt,Mens 70s Shirt,Mens Hawaiian Shirts And Shorts Set 16-S 16 70s Shirts For Men,Hippie Shirt,Mens 70s Shirt,Mens Hawaiian Shirts And Shorts Set 16-S',
      slug: 'Hawaiian-Shirts-For-Men',
      category: "Men's Shirts",
      images: [
        '/assets/images/ima001.png',
        '/assets/images/ima002.png',
        '/assets/images/ima003.png',
      ],
      price: '125.95',
      brand: 'Hawaiian Shirts',
      rating: '3.6',
      numReviews: 5,
      stock: 10,
      description:
        'newspaper shirt.Material:Comfortable Fabric.100% Polyester.It Is Lightweight And Soft.Nice Choice For Summer Vacation. Newspaper outfit.3 Piece Short Set:Contains Shirt,Pants,And A Bucket Hat. Newspaper clothes.Summer Outfit For Beach,Concert,Vacation,Travel,Wedding,Party,Music Festival. Newspaper clothing.70s,80s,90s Fashion Outfits,Rave Outfits,Funny Hawaiian Shirt Short Set,And Trendy Beach Outfits. Wash:Hand Wash Or Machine Wash.It Is Not Easy To Fade. ',
    },
    {
      name: "MEN'S Hawaiian Shirts 16 70s Shirts For Men,Hippie Shirt,Mens 70s Shirt,Mens Hawaiian Shirts And Shorts Set 16-S",
      slug: 'Hawaiian-Shirts-13',
      category: "Men's Shirts",
      images: [
        '/assets/images/imc003.png',
        '/assets/images/imc001.png',
        '/assets/images/imc002.png',
      ],
      price: '105.95',
      brand: 'Hawaiian Shirts',
      rating: '3.6',
      numReviews: 5,
      stock: 10,
      description:
        'party shirts for men.Material:Comfortable Fabric.100% Polyester.It Is Lightweight And Soft.Nice Choice For Summer Vacation.Mens Vacation Shirts.3 Piece Short Set:Contains Shirt,Pants,And A Bucket Hat. ',
    },
    {
      name: "MEN'S Pants",
      slug: '16 70s Shirts For Men,Hippie Shirt,Mens 70s Shirt,Mens Hawaiian Shirts And Shorts Set 17-S',
      category: 'Pant',
      images: [
        '/assets/images/Trent-Pants_02.webp',
        '/assets/images/Trent-Pants.webp',
      ],
      price: '105.95',
      brand: 'Hawaiian Pant',
      rating: '3.6',
      numReviews: 5,
      stock: 10,
      description:
        'party shirts for men.Material:Comfortable Fabric.100% Polyester.It Is Lightweight And Soft.Nice Choice For Summer Vacation.Mens Vacation Shirts.3 Piece Short Set:Contains Shirt,Pants,And A Bucket Hat. ',
    },
  ],
}

export default sampleData
