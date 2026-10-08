"use client";
import { useEffect, useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AOS from "aos";

import "aos/dist/aos.css";
import styles from "./coupon.module.css";

export default function Coupon() {
  const [searchInput, setSearchInput] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = () => {
    setSearchKeyword(searchInput.trim().toLowerCase());
  };

  const handleReset = () => {
    setSearchInput("");
    setSearchKeyword("");
  };

  const isExpired = (date) => {
    const expiryDate = new Date(date.replace(/\./g, "-"));
    expiryDate.setHours(23, 59, 59, 999);

    return new Date() > expiryDate;
  };
  const copyCoupon = async (code, date) => {
    const today = new Date();
    const expiryDate = new Date(date.replace(/\./g, "-"));

    // 만료일 당일 23:59:59까지 사용 가능
    expiryDate.setHours(23, 59, 59, 999);

    if (today > expiryDate) {
      alert("만료된 쿠폰입니다.");
      return;
    }

    try {
      await navigator.clipboard.writeText(code);
      alert("쿠폰 코드가 복사되었습니다!");
    } catch (error) {
      alert("쿠폰 복사에 실패했습니다.");
    }
  };

  const coupons = [
    {
      id: 1,
      img: "/img/coupon.png",
      title:
        "쿠폰 제목이 들어올 자리1sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfasdasdsdfsdf",
      desc: "쿠폰 설명이 들어올 자리입니다 ",
      date: "2026.11.31",
      code: "HERO201",
    },
    {
      id: 2,
      img: "/img/coupon.png",
      title: "쿠폰 제목이 들어올 자리2",
      desc: "쿠폰 설명이 들어올 자리입니다 ",
      date: "2026.05.31",
      code: "HERO2026",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 300,
      once: false,
      offset: 50,
    });

    setTimeout(() => {
      AOS.refreshHard();
    }, 500);
  }, []);

  return (
    <div id="wrap">
      <a
        href="#wrap"
        className={`${styles.scrollTop} ${isScroll ? styles.scroll : ""}`}
      >
        Scoll <br /> Top
      </a>
      <Header />
      <div className={styles.container}>
        <div className={styles.inner}>
          <div
            className={styles.tit_box}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className={styles.left_box}>
              <img src="/img/app_ico.png" alt="" className={styles.app_ico} />
              <h3 className={styles.tit}>영랜디 쿠폰</h3>
              <p className={styles.des}>
                쿠폰을 사용해 더 많은 보상을 받고 게임을 즐겨보세요
              </p>
            </div>
            <div className={styles.right_box}>
              <form
                className={styles.right_box}
                onSubmit={(e) => {
                  e.preventDefault();

                  if (searchKeyword) {
                    handleReset();
                  } else {
                    handleSearch();
                  }
                }}
              >
                <input
                  type="text"
                  placeholder="검색어를 입력해주세요"
                  className={styles.search_input}
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />

                <button type="submit" className={styles.search_btn}>
                  <img
                    src={
                      searchKeyword
                        ? "/img/reset_ico.png"
                        : "/img/search_ico.png"
                    }
                    alt={searchKeyword ? "초기화" : "검색"}
                  />
                </button>
              </form>
            </div>
          </div>
          <ul className={styles.coupon_list}>
            {coupons.map((coupon) => {
              const isMatch =
                coupon.title.toLowerCase().includes(searchKeyword) ||
                coupon.desc.toLowerCase().includes(searchKeyword);

              return (
                <li
                  key={coupon.id}
                  className={isExpired(coupon.date) ? styles.end : ""}
                  style={{ display: isMatch ? "" : "none" }}
                  onClick={() => copyCoupon(coupon.code, coupon.date)}
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <div className={styles.img_box}>
                    <img src={coupon.img} alt="" />
                  </div>

                  <div className={styles.txt_box}>
                    <h5 className={styles.coupon_tit}>{coupon.title}</h5>
                    <p className={styles.coupon_des}>{coupon.desc}</p>
                    <p className={styles.coupon_date}>~ {coupon.date}</p>
                  </div>

                  <img
                    src="/img/copy_ico.png"
                    alt=""
                    className={styles.copy_ico}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
