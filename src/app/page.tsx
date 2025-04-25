"use client";

import { useEffect, useRef } from "react";
import { useCard } from "@/context/CardContext";
import { useCategory } from "@/context/CategoryContext";
import Card from "@/components/product/Card";

export default function Page() {
  const { selectedCategory } = useCategory();
  const { visibleCards, addCards } = useCard();
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const filteredCards =
    selectedCategory === "전체"
      ? visibleCards
      : visibleCards.filter((card) => card.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          addCards();
        }
      },
      {
        threshold: 0.5,
      }
    );

    const target = bottomRef.current;
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [addCards]);

  return (
    <main className="container_wrap">
      <div className="flex_box">
        {filteredCards.length === 0 ? (
          <p className="text-center w-full mt-10">등록된 상품이 없습니다 🥲</p>
        ) : (
          filteredCards.map((card) => <Card key={card.id} {...card} />)
        )}
        <div ref={bottomRef} />
      </div>
    </main>
  );
}
