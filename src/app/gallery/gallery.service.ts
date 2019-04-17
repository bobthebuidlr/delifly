import { Injectable } from "@angular/core";
import { IProduct } from "../models/interfaces";

@Injectable({
  providedIn: "root"
})
export class GalleryService {
  products: Array<IProduct> = [
    {
      id: 1,
      category: "liquor",
      images: [
        "/assets/products/liquor/romanee_conti/romanee_conti_1.png"
      ],
      title: {
        firstPart: "Romanee",
        highlighted: "Conti"
      },
      description: 'The La Tâche 1969 provided a fitting end for what was a great run of vintage throughout the decade. Now at 45 years old it unashamedly sports a mature, brickish hue. The nose does not quite contain the untrameled exuberance of the 1964 or 1966, but there is a sense of elegance and refinement in situ. The palate is well balanced, slightly rustic in style with chewier tannins than other vintages. There is clearly good backbone here with spice, tangy marmalade and white pepper on the finish that is just missing a little precision. I suspect this was superior 10 to 15 years ago and is now in gentle decline. However, unlike others this is still worth seeking out.',
      galleryImages: {
        image_1: "/assets/products/liquor/romanee_conti/romanee_conti_1.png"
      },
      details: [{
        title: {
          firstPart: "Romanee",
          highlighted: "Conti"
        },
        description: 'The La Tâche 1969 provided a fitting end for what was a great run of vintage throughout the decade. Now at 45 years old it unashamedly sports a mature, brickish hue. The nose does not quite contain the untrameled exuberance of the 1964 or 1966, but there is a sense of elegance and refinement in situ. The palate is well balanced, slightly rustic in style with chewier tannins than other vintages. There is clearly good backbone here with spice, tangy marmalade and white pepper on the finish that is just missing a little precision. I suspect this was superior 10 to 15 years ago and is now in gentle decline. However, unlike others this is still worth seeking out.',
      }]
    },
    {
      id: 2,
      category: "liquor",
      images: [
        "/assets/products/liquor/mission_macallan/mission_macallan_1.png"
      ],
      title: {
        firstPart: "Mission",
        highlighted: "Macallan"
      },
      description: 'A quite fabulous 34 year old Speyside single malt that was laid to rest at the Macallan distillery in 1968 and bottled for Murray McDavid\'s Mission series in 2002. Drawn from American oak casks at a cask strength 40.2% ABV, this rare vintage Macallan is one of just 852 bottles and comes complete with fine original wooden presentation case.',
      galleryImages: {
        image_1:
          "/assets/products/liquor/mission_macallan/mission_macallan_1.png"
      },
      details: [{
        title: {
          firstPart: "Mission",
          highlighted: "Macallan"
        },
        description: 'Traditionally, they insisted on maturing their spirit solely in the highest quality sherry casks, sourced directly from Jerez, Spain:  in fact, the Edrington Group, which owns the brand, has even invested in sherry vineyards to ensure the continuing supply of their precious oak, thus giving them the oversight they need to maintain quality.  The exclusive use of sherry casks naturally drove up the price of the resulting whisky, particularly as sherry casks have become rarer and more expensive due to the falling popularity of sherry as a drink.  In 2005, Macallan finally released a range of whiskies matured in bourbon cask wood (the “Fine Oak” series), but it is the classic heavily-sherried style that remains their trademark. This whisky is an independently bottled Macallan from the Murray McDavid Mission series. Distilled 1968 and bottled after 34 years. Bottle no. 176 of 852. Not chill filtered and not coloured.',
      }]
    },
    {
      id: 3,
      category: "liquor",
      images: [
        "/assets/products/liquor/macallan_60_years/macallan_60_years_1.png"
      ],
      title: {
        firstPart: "Macallan",
        highlighted: "60 Years"
      },
      description: 'The rare liquid rests in a bottle featuring an image of the Macallan’s spiritual home, Easter Elchies House, hand-painted by acclaimed Irish muralist Michael Dillon. The record-setting whisky was extracted from cask # 263, which was filled in 1926 – about the same time a young American amateur golfer named Bobby Jones won the first of his three Claret Jugs at the British Open held at nearby Royal Lytham & St Annes Golf C',
      galleryImages: {
        image_1:
          "/assets/products/liquor/macallan_60_years/macallan_60_years_1.png"
      },
      details: [{
        title: {
          firstPart: "Macallan",
          highlighted: "60 Years"
        },
        description: 'The Macallan 1926 60-Year-Old presented in a unique bottle painted by the Irish artist Michael Dillon (estimate on request, illustrated above). The Macallan distillery located near the river Spey in North East Scotland was founded in 1824 and produces stunning examples of cask-matured single malts, particularly their highly prized and exceedingly rare single-cask, limited edition bottlings and Fine & Rare Collection. The Macallan 60-Year-Old 1926 takes this rarity to new heights for collectors of Macallan whisky and is the only bottle of this ultra-rare elixir to be hand-painted by Irish artist Michael Dillon. Considered the \'Holy Grail\' for collectors.',
      }]
    },
    {
      id: 4,
      category: "liquor",
      images: [
        "/assets/products/liquor/macallan_25_years/macallan_25_years_1.png"
      ],
      title: {
        firstPart: "Macallan",
        highlighted: "25 Years"
      },
      description: 'This satisfyingly complex Single Malt, matured at The Macallan distillery for a minimum of 25 years. Bright Amber in color. Rich and robust with a hint of peach, blood orange and wood spice. Intense, coconut and vanilla with a hint of sultana, lemon and peat. Lingering finish with a hint of sherry, orange and spice.',
      galleryImages: {
        image_1:
          "/assets/products/liquor/macallan_25_years/macallan_25_years_1.png"
      },
      details: [{
        title: {
          firstPart: "Macallan",
          highlighted: "25 Years"
        },
        description: 'Situated on a ridge above the banks of the River Spey, the Easter Elchies House has been the spiritual home of The Macallan for over three centuries. In 1820, Alexander Reid began renting the home from Sir Lewis Grant of Grant. Reid was a farmer, and soon after he sowed the fields surrounding the home with barley, Reid established the first licensed distillery on the estate, which he named Macallan after an ancient church that had been destroyed by fire during the 15th century. In the winter — when there was little activity on the farm — Reid would ferment and distill his excess grains into whisky, which was often drunk straight from the still or sold to travelers passing through the town.'
      },
      {
        title: {
          firstPart: 'Macallan ',
          highlighted: 'Estate'
        },
        description: 'Today, the Macallan Estate encompasses 370 acres, 95 of which are devoted to the production of the Macallan Estate\'s Minstrel barley (a single acre produces about 2.5 tons of barley each year, enough to yield 1,800 bottles of The Macallan). In addition, the distillery contracts with farmers to purchase barley that is low in nitrogen and high in starch, resulting in a rich and oily whisky.'
      },
      {
        title: {
          highlighted: 'Brewing ',
          secondPart: 'Process'
        },
        description: 'After the barley is harvested in late August and early September, it is malted before being mashed in one of The Macallans two mash tuns, a process that takes between four and eight hours. Then, the barley is fermented with a specially cultured yeast before being distilled twice through The Macallan\'s copper-pot stills. The copper comprising the stills acts as a catalyst, and enhances the formation of sweet esters while minimizing impurities such as sulphur. In addition, the curiously small stills — some of "the smallest stills within the Scotch whisky industry,"according to production manager Alexander Tweedie — produce a whisky with a heavy, oily flavor.',
      },
      {
        title: {
          firstPart: 'The ',
          highlighted: 'Distillation'
        },
        description: 'Following distillation, The Macallan distillers remove the heads and tails of the whisky and collect approximately 16% of the spirit to fill into casks for maturation. This "cut,"which is among the highest of any Scottish distillery, results in a more full-bodied and and rich whisky. Macallan 25 Year Old Sherry Oak Single Malt Scotch Whisky is aged for a quarter century in sherry-seasoned oak casks from Jerez, Spain. The Macallan takes great care to source, craft, season and care for these casks, as they account for approximately 60% of the final aromas and flavors of the whisky, according to a study commissioned by the distillery.'
      },
      {
        title: {
          highlighted: 'Flavour ',
          secondPart: 'Palette'
        },
        description: 'As a result of its extended aging in sherry casks, The Macallan 25 Year Old Sherry Oak Single Malt Scotch Whisky has a rich mahogany color and aromas of citrus, pumpernickel, sherry and burnt wood. The palate is filled with notes of raisins, dried cherries, chocolate and campfire smoke, which leads to a finish accented by cloves, fruitcake, gingerbread and lemon tart. The Macallan 25 Year Old Sherry Oak Single Malt Scotch Whisky is one of the rare creations to have received a perfect 100 point rating from the Beverage Testing Institute in Chicago.'
      }
    ]
    },
    {
      id: 5,
      category: "jewelry",
      productVideoURL: '/assets/products/jewelry/daytona_116500/daytona_116500.mp4',
      images: [
        "/assets/products/jewelry/daytona_116500/daytona_116500_1.png",
        "/assets/products/jewelry/daytona_116500/daytona_116500_2.png"
      ],
      title: {
        firstPart: "Daytona",
        highlighted: "116500"
      },
      galleryImages: {
        image_1: "/assets/products/jewelry/daytona_116500/daytona_116500_1.png",
        image_2: "/assets/products/jewelry/daytona_116500/daytona_116500_2.png"
      },
      details: [{
        title: {
          firstPart: "Daytona",
          highlighted: "116500"
        }
      }]
    },
    {
      id: 6,
      category: "jewelry",
      productVideoURL: '/assets/products/jewelry/sideralis/sideralis.mp4',
      images: [
        "/assets/products/jewelry/sideralis/sideralis_1.png"
      ],
      title: {
        firstPart: "Louis Money",
        highlighted: "Sideralis"
      },
      description:
        "“Sideralis is an invitation to embark on an interstellar journey – a whole new kind of discovery that’s singularly technical and poetic”. The timepiece in question defies comparison, simply because to date, Sideralis does not have any equivalent anywhere in the world of watchmaking, and is protected by two patent applications.",
      galleryImages: {
        image_1: "/assets/products/jewelry/sideralis/sideralis_1.png"
      },
      details: [
        {
          title: {
            firstPart: 'Now, tourbillons ',
            highlighted: 'move the planets'
          },
          description: 'For the first time ever, a complication is driven by a double tourbillon: a time dial, situated at 12 o’clock, comprising two discs, one atop the other. The top one features a tiny hand-painted picture. This hand-crafted marvel depicts the universe and its constellations of stars and planets, painted one by one on a dark blue sidereal background. The animation completes one counter-clockwise rotation every 60 seconds. At 12 o’clock on this upper disc there is a circular opening, through which can be glimpsed the three planets painted on the lower disc, seen to be rotating in the opposite direction at the same speed. The feature represents a wholly new conceptual and artistic approach.'
        },
        {
          title: {
            firstPart: 'Special Feature number ',
            highlighted: 'One'
          },
          description: 'Both of these tourbillons are oversized, with cages measuring 14.9 mm – half as big again as the average. This is the largest assembly of two tourbillons ever to have existed.'
        },
        {
          title: {
            firstPart: 'Special Feature number ',
            highlighted: 'Two'
          },
          description: 'The two tourbillons are designed to be physically above the movement – above the dial, even. The two raised cages are large as life and wholly visible, revealing balance wheels with beautifully styled screws – and an absolutely incomparable aesthetic appearance.'
        },
        {
          title: {
            firstPart: 'Special Feature number ',
            highlighted: 'Three'  ,
          },
          description: 'The tourbillons rotate in opposite directions. The continuous coming and going, side by side, is not just for stylistic reasons; the counter-rotation provides the motive power required for the star mechanism – the Sideralis complication.'
        }
      ]
    },
    {
      id: 7,
      category: "jewelry",
      images: [
        "/assets/products/jewelry/just_un_clou/just_un_clou_1.png",
        "/assets/products/jewelry/just_un_clou/just_un_clou_2.png",
        "/assets/products/jewelry/just_un_clou/just_un_clou_3.png"
      ],
      title: {
        firstPart: "Just un",
        highlighted: "Clou"
      },
      description: 'A nail becomes jewelry. Designed in 1970s New York, the first Juste un Clou bracelet reflected a wild, freewheeling era. Bold, modern, and innovative, Juste un Clou is a creative twist on a familiar object. This jewelry collection transcends the everyday, making the ordinary exquisite, for him and for her.',
      galleryImages: {
        image_1: "/assets/products/jewelry/just_un_clou/just_un_clou_1.png",
        image_2: "/assets/products/jewelry/just_un_clou/just_un_clou_2.png",
        image_3: "/assets/products/jewelry/just_un_clou/just_un_clou_3.png"
      },
      details: [{
        title: {
          firstPart: "Just un",
          highlighted: "Clou"
        },
        description: 'A nail becomes jewelry. Designed in 1970s New York, the first Juste un Clou bracelet reflected a wild, freewheeling era. Bold, modern, and innovative, Juste un Clou is a creative twist on a familiar object. This jewelry collection transcends the everyday, making the ordinary exquisite, for him and for her.'
      }]
    },
    {
      id: 8,
      category: "jewelry",
      images: [
        "/assets/products/jewelry/ecrou/ecrou_1.png",
        "/assets/products/jewelry/ecrou/ecrou_2.png"
      ],
      title: {
        highlighted: "Ecrou",
        secondPart: "Bracelets"
      },
      description: 'A transformation of the ordinary to the extraordinary: the new Écrou de Cartier collection. A bold new design, Écrou de Cartier embodies daring and limitless style. Forceful and exquisite at the same time, it makes a striking statement of sophistication.',
      galleryImages: {
        image_1: "assets/products/jewelry/ecrou/ecrou_1.png",
        image_2: "assets/products/jewelry/ecrou/ecrou_2.png"
      },
      details: [{
        title: {
          highlighted: "Ecrou",
          secondPart: "Bracelets"
        },
        description: 'What is the mark of extraordinary design? It’s when an everyday object turns into something precious. When Aldo Cipullo first revealed his ‘Nail Bracelet’ for Cartier in the 1970s, his radical design was seen as representative of the anti-conformist movement of the time. After all, who else would think to propose humble hardware as a special piece of jewelry?',
      },
      {
        title: {
          firstPart: 'Fast ',
          highlighted: 'Forward'
        },
        description: 'Fast forward to the modern day and the adage that good design doesn’t have to be complicated rings true. The legendary jewelry maison reveals once again a perfectly imperfect inspiration for its new collection, ‘Ecrou’, seamlessly capturing the geometric beauty of the shaft of a nail or the octagonal head of a nut in a new range of bracelets set to sweep the world off its feet.'
      }
    ]
    }
  ];

  constructor() {}

  getProducts(category: string) {
    let result = this.products.filter(product => {
      if (product.category === category) {
        return product;
      }
    });
    return result;
  }

  getProduct(id: number) {
    let result = this.products.filter(product => {
      if (product.id === id) {
        return product;
      }
    });
    return result[0];
  }
}
