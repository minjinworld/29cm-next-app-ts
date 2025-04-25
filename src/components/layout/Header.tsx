
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCategory } from "@/context/CategoryContext";


const categories = ["전체", "가구", "조명", "홈데코", "아트"];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { selectedCategory, setSelectedCategory } = useCategory();

  useEffect(() => {
    const handleScroll = () => {
      const scrollYData = window.scrollY;
      setIsScrolled(scrollYData > 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={isScrolled ? "header_area scroll" : "header_area"}>
        <div className="top">
          <Link href="/" className="logo">
            <img
              src="https://img.29cm.co.kr/next-contents/2023/06/08/3f8131682d124d16b336774ba51c4a3e_20230608162823.png"
              alt="29CM Logo"
            />
          </Link>
          <div className="user_box">
            {/* 마이페이지, 좋아요, 장바구니, 로그인 등 아이콘 구성 */}
            <div className="user_nav mypage">
              <div className="user_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  color="black"
                  className="css-19xi8mz"
                >
                  <g id="weight=bold, fill=true">
                    <g id="vector">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.9999 3.25V2.25H10.9999V3.25V8.25V9.25H12.9999V8.25V3.25Z"
                        fill="black"
                      ></path>
                      <path
                        d="M20.9999 21.75H2.99994V11.9992C2.99994 11.3045 3.56393 10.75 4.24994 10.75H19.7499C20.4403 10.75 20.9999 11.3096 20.9999 12V21.75Z"
                        fill="black"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>

              <span>my page</span>
            </div>
            <div className="user_nav mylike">
              <div className="user_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  color="black"
                  className="css-19xi8mz"
                >
                  <g id="weight=bold, fill=true">
                    <path
                      id="vector"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0001 6.41677C11.1926 4.696 9.48906 3.5 7.5 3.5C4.72132 3.5 2.5 5.83496 2.5 8.672C2.5 9.79894 2.96136 10.8146 3.39443 11.5251C3.61364 11.8847 3.83255 12.1775 3.99731 12.3812C4.07986 12.4832 4.14931 12.5635 4.19906 12.6193C4.22395 12.6472 4.24396 12.669 4.25826 12.6844L4.27534 12.7025L4.2805 12.708L4.28219 12.7097L12 20.7207L19.7169 12.7106L19.7178 12.7097L19.7195 12.708L19.7246 12.7026L19.7417 12.6844C19.756 12.669 19.776 12.6472 19.8009 12.6193C19.8507 12.5635 19.9201 12.4832 20.0027 12.3812C20.1674 12.1775 20.3864 11.8847 20.6056 11.5251C21.0386 10.8146 21.5 9.79895 21.5 8.672C21.5 5.83395 19.2786 3.5 16.5 3.5C14.5111 3.5 12.8077 4.69631 12.0001 6.41677Z"
                      fill="black"
                    ></path>
                  </g>
                </svg>
              </div>

              <span>my like</span>
            </div>
            <div className="user_nav cart">
              <div className="user_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  color="black"
                  className="css-19xi8mz"
                >
                  <g id="weight=bold, fill=true">
                    <path
                      id="vector"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 1C10.6739 1 9.40215 1.52678 8.46447 2.46447C7.76608 3.16285 7.29564 4.04656 7.101 5H4.202C3.5272 5 3 5.54425 3 6.2V20.8121L3.00029 20.8243C3.00786 21.1357 3.13575 21.4321 3.35713 21.6513C3.5785 21.8705 3.87616 21.9954 4.18766 21.9999L4.19483 22H19.798C20.4728 22 21 21.4557 21 20.8V14.5H12V12.5H21V6.2C21 5.55334 20.4709 5 19.798 5H16.899C16.7044 4.04656 16.2339 3.16285 15.5355 2.46447C14.5979 1.52678 13.3261 1 12 1ZM14.1213 3.87868C14.4407 4.19808 14.6807 4.5821 14.8284 5H9.17157C9.31933 4.5821 9.55927 4.19808 9.87868 3.87868C10.4413 3.31607 11.2044 3 12 3C12.7956 3 13.5587 3.31607 14.1213 3.87868Z"
                      fill="black"
                    ></path>
                  </g>
                </svg>
              </div>

              <span>shopping bag</span>
            </div>
            <div className="user_nav login">
              <div className="user_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  color="black"
                  className="css-19xi8mz"
                >
                  <g id="weight=bold, fill=true">
                    <path
                      id="vector"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 10H19.25C19.6642 10 20 10.3358 20 10.75V21.25C20 21.6642 19.6642 22 19.25 22H4.75C4.33579 22 4 21.6642 4 21.25V10.75C4 10.3358 4.33579 10 4.75 10H6V8C6 4.68629 8.68629 2 12 2C13.9985 2 15.7688 2.97712 16.8593 4.47969L15.307 5.749C14.5869 4.69318 13.3744 4 12 4C9.79086 4 8 5.79086 8 8V10ZM12 12.5C12.5523 12.5 13 12.9477 13 13.5V15.5C13 16.0523 12.5523 16.5 12 16.5C11.4477 16.5 11 16.0523 11 15.5V13.5C11 12.9477 11.4477 12.5 12 12.5Z"
                      fill="black"
                    ></path>
                  </g>
                </svg>
              </div>

              <span>logout</span>
            </div>
          </div>
        </div>

        <div className="center">
          <div className="headtext">Special-Order Showcase PT 29Magazine</div>
          <a href="#none" className="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              color="black"
              className="css-14za774"
            >
              <g id="weight=bold, fill=true">
                <path
                  id="vector"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.9 4.5C7.36538 4.5 4.5 7.36538 4.5 10.9C4.5 14.4346 7.36538 17.3 10.9 17.3C12.6636 17.3 14.2589 16.588 15.4175 15.4334C16.5815 14.2735 17.3 12.6716 17.3 10.9C17.3 7.36538 14.4346 4.5 10.9 4.5ZM2.5 10.9C2.5 6.26081 6.26081 2.5 10.9 2.5C15.5392 2.5 19.3 6.26081 19.3 10.9C19.3 12.8628 18.6258 14.6695 17.4979 16.0993L21.2056 19.7914L19.7944 21.2086L16.0818 17.5116C14.6548 18.6313 12.8548 19.3 10.9 19.3C6.26081 19.3 2.5 15.5392 2.5 10.9Z"
                  fill="black"
                ></path>
              </g>
            </svg>

          </a>
        </div>

        <div className="bottom">
          <ul className="tab">
            {categories.map((category, index) => (
              <li
                key={index}
                className={`tab_list${selectedCategory === category ? " active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                <a href="#none">{category}</a>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <div className="marginbox"></div>
    </>
  );
}
