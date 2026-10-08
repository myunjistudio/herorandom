import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.fmenu}>
        <li>
          <a
            target="_blank"
            href="https://secretcode.kr/legal/terms-of-service/"
          >
            이용약관
          </a>
        </li>
        <li>
          <a
            href="https://secretcode.kr/legal/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            개인정보처리방침
          </a>
        </li>
        <li>
          <a href="tel:070-4155-8471">고객센터</a>
        </li>
      </ul>

      <img src="/img/flogo.svg" alt="" className={styles.flogo} />

      <p className={styles.finfo}>
        울산광역시 중구 동천 1길 40 (세영이노세븐 지식산업센터) A동 808호
        <br />
        TEL 052 298 0100 EMAIL support@secretcode.kr
        <br />
        ⓒ2026 Secretcode Corp. All Rights Reserved.
      </p>
    </footer>
  );
}
