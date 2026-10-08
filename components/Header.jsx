import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflowY = "";
      document.body.style.height = "";
    }

    return () => {
      document.body.style.overflowY = "";
      document.body.style.height = "";
    };
  }, [isOpen]);

  return (
    <header
      id="header"
      className={`${styles.header} ${isScroll ? styles.scroll : ""}`}
    >
      <div className={styles.inner}>
        <a href="./" className={styles.sc_logo}>
          <img src="/img/secretcdoe_logo.svg" alt="" />
        </a>
        <a href="./" className={styles.logo}>
          {" "}
          <img src="/img/logo.png" alt="" />
        </a>
      </div>
      <div className={styles.gnb_box}>
        <div className={styles.inner}>
          <nav className={styles.gnb}>
            <ul>
              <li>
                <a href="./#cont1">게임소개</a>
              </li>
              <li>
                <a href="./#cont3">캐릭터</a>
              </li>
              <li>
                <a
                  href="https://cafe.naver.com/herorandomdefence"
                  target="_blank"
                >
                  공식카페
                </a>
              </li>
              <li>
                <a href="/coupon/">쿠폰받기</a>
              </li>
              <li>
                <a href="./">체험하기</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className={`${styles.sideMenu} ${isOpen ? styles.on : ""}`}>
        <div className={styles.side_inner}>
          <img src="/img/logo.png" alt="" className={styles.side_logo} />
          <ul className={styles.menu_list}>
            <li>
              <a
                href="https://cafe.naver.com/herorandomdefence"
                target="_blank"
              >
                공식카페 <span>Cafe</span>
              </a>
            </li>
            <li>
              <a href="/coupon/">
                쿠폰받기 <span>Coupon</span>
              </a>
            </li>
            <li>
              <a href="./">
                체험하기 <span>Demo</span>
              </a>
            </li>
          </ul>
          <p className={styles.side_copy}>
            ⓒ2026 Secretcode Corp. All Rights Reserved.
          </p>
        </div>
      </div>
      <button
        type="button"
        className={`${styles.mBtn} ${isOpen ? styles.on : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="메뉴"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
