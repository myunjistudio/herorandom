"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import styles from "./coupon.module.css";

export default function Coupon() {
  return (
    <div id="wrap">
      <Header />
      <div className={styles.container}>
        <div className={styles.inner}></div>
      </div>
      <Footer />
    </div>
  );
}
