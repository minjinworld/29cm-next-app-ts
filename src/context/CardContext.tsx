"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// 카드 데이터 타입 정의
export interface Card {
  id: number;
  imgSrc: string;
  brandName: string;
  productName: string;
  price?: string;
  discount?: string;
  discountPrice: string;
  likes: string;
  reviews: string;
  category: string;
  detailImgSrc: string;
  explain?: string;
}

interface CardContextType {
  visibleCards: Card[];
  addCards: () => void;
}

const CardContext = createContext<CardContextType | null>(null);

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const initialCards: Card[] = [
    {
      id: 1,
      imgSrc: "https://img.29cm.co.kr/next-product/2023/03/13/6df115b934da4129a4a154606084bfdd_20230313145108.jpg",
      brandName: "프리츠한센",
      productName: "프리츠한센 - IKEBANA SMALL(BRASS)",
      price: "178,000원",
      discount: "8%",
      discountPrice: "163,760원",
      likes: "10,642",
      reviews: "201",
      category: "홈데코",
      detailImgSrc: "/images/fritzhansen_detail.jpg",
    },
    {
      id: 2,
      imgSrc: "https://img.29cm.co.kr/item/202401/11eeb4ff03df260391eb4bbeb9e18de8.jpg?width=700&format=webp",
      brandName: "바나코",
      productName: "바나코 PENTA 사이드 테이블",
      price: "49,900",
      discount: "27%",
      discountPrice: "36,465",
      likes: "1032",
      reviews: "32",
      category: "가구",
      detailImgSrc: "/images/banaco_detail.jpg",
    },
    {
      id: 3,
      imgSrc: "https://img.29cm.co.kr/item/202403/11eee2a5ea13c82682f27532668945d8.png?width=400",
      brandName: "다이노탱",
      productName: "Quokka in School Figure Pen",
      discountPrice: "7,000",
      likes: "8,347",
      reviews: "125",
      category: "아트",
      detailImgSrc: "/images/dino1_detail.jpg",
    },
  ];

  const additionalData: Card[] = [
    {
      id: 4,
      imgSrc: "https://img.29cm.co.kr/next-product/2022/05/11/3604577eaec24c9b84890b0b40b13381_20220511034008.png?width=700&format=webp",
      brandName: "레어로우",
      productName: "포 스태킹 쉘브 미니 (7 Colors)",
      price: "90000",
      discount: "24%",
      discountPrice: "68,850",
      likes: "640",
      reviews: "20",
      category: "가구",
      detailImgSrc: "/images/rarerow_detail.jpg",
    },
    {
      id: 5,
      imgSrc: "https://img.29cm.co.kr/next-product/2023/01/04/fd590e2b68114bafa833607afce1b3d0_20230104223415.jpg?width=400",
      brandName: "에프에프 컬렉티브",
      productName: "[29CM 단독] Spiral Floor Lamp",
      price: "440,000",
      discount: "25%",
      discountPrice: "330,000",
      likes: "3712",
      reviews: "49",
      category: "조명",
      detailImgSrc: "/images/ff_detail.jpg",
    },
    {
      id: 6,
      imgSrc: "https://img.29cm.co.kr/item/202312/11ee9322ebb850b98a7f9f31055ef7b3.png?width=400",
      brandName: "다이노탱",
      productName: "Touch the Quokka",
      discountPrice: "979,000",
      likes: "5,511",
      reviews: "221",
      category: "아트",
      detailImgSrc: "/images/dino2_detail.jpg",
    },
    {
      id: 7,
      imgSrc: "https://img.29cm.co.kr/item/202501/11efd146658426bd8521cbf039c77540.jpg",
      brandName: "루미르",
      productName: "Yeolmae 열매 포터블 램프",
      price: "165,000",
      discount: "28%",
      discountPrice: "119,000",
      likes: "2640",
      reviews: "640",
      category: "조명",
      detailImgSrc: "/images/lumir_detail.jpg",
    },
    {
      id: 8,
      imgSrc:
        "https://img.29cm.co.kr/next-product/2022/09/23/865efbc6e9444cd48c0ef8826b434198_20220923100751.jpg?width=700&format=webp",
      brandName: "아티쉬",
      productName: "[액자] Mother Daughter / 지젤 데켈(Giselle Dekel)",
      price: "68,000",
      discount: "15%",
      discountPrice: "57,800",
      likes: "712",
      reviews: "94",
      category: "아트",
      detailImgSrc: "/images/artish_detail.jpg",
    },
    {
      id: 9,
      imgSrc:
        "https://img.29cm.co.kr/next-product/2021/05/26/46c6b943487440f5911d7d47f113654e_20210526094614.jpg?width=700&format=webp",
      brandName: "렉슨",
      productName: "LEXON 렉슨 MINA M사이즈 미나 무드등 조명 램프 - LH64",
      price: "90,000",
      discount: "30%",
      discountPrice: "63,360",
      likes: "8,511",
      reviews: "4330",
      category: "조명",
      detailImgSrc: "/images/lexon_detail.jpg",
    },

  ];

  const [cardIndex, setCardIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState<Card[]>(initialCards);

  const addCards = () => {
    const nextIndex = cardIndex + 3;
    const newCards = additionalData.slice(cardIndex, nextIndex);

    setVisibleCards((prev) => {
      const existingIds = new Set(prev.map((card) => card.id));
      const filtered = newCards.filter((card) => !existingIds.has(card.id));
      return [...prev, ...filtered];
    });

    setCardIndex(nextIndex);
  };

  return (
    <CardContext.Provider value={{ visibleCards, addCards }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCard = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCard must be used within a CardProvider");
  }
  return context;
};
