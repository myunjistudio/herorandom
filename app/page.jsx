"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import AOS from "aos";

import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./home.module.css";

export default function Home() {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [activeProfile, setActiveProfile] = useState(0);
  const [activeProfile2, setActiveProfile2] = useState(0);
  const [activeProfile3, setActiveProfile3] = useState(0);

  const [imageLoaded, setImageLoaded] = useState(true);
  const [imageLoaded2, setImageLoaded2] = useState(true);
  const [imageLoaded3, setImageLoaded3] = useState(true);

  useEffect(() => {
    setImageLoaded(false);
  }, [activeProfile]);

  useEffect(() => {
    setImageLoaded2(false);
  }, [activeProfile2]);

  useEffect(() => {
    setImageLoaded3(false);
  }, [activeProfile3]);

  const gradeText = {
    1: "노말 Normal",
    2: "매직 Magic",
    3: "레어 Rare",
    4: "유니크 Unique",
    5: "에픽 Epic",
  };
  const typeText = ["", "근접", "원거리"];

  const characterData = [
    {
      name: "호위기사",
      grade: 1,
      type: 1,
      desc: "아발론의 신입 호위기사\n정식 기사가 된지 얼마 되지 않은 소년",
    },
    {
      name: "엘프궁수",
      grade: 1,
      type: 2,
      desc: "아발론의 궁수\n누구보다 높은 열정으로\n목표를 향해 활시위를 당깁니다",
    },
    {
      name: "근위병",
      grade: 1,
      type: 1,
      desc: "아발론을 지키는 근위병\n성을 위협하는 적들은 모두 무찔러 버립니다",
    },
    {
      name: "웨스턴",
      grade: 2,
      type: 2,
      desc: "한때는 전설로 불렸던 총잡이\n탕탕 쏘면 적들이 후루루루룩 쓰러집니다",
    },
    {
      name: "이스턴",
      grade: 2,
      type: 1,
      desc: "어린 시절부터 채찍을 익힌 소년\n누구보다 빠르고 정확하게\n 적을 휘어잡습니다",
    },
    {
      name: "강한석",
      grade: 2,
      type: 1,
      desc: "놀라운 근육을 자랑하는 헬스보이\n최하나와 오랜 연인 사이이다",
    },
    {
      name: "루미엘",
      grade: 2,
      type: 2,
      desc: "신비한 연금술을 사용하는 연금술사\n모든 적을 무력화 할만큼 \n강력한 기술을 가진 수줍은 소녀",
    },
    {
      name: "멍기사",
      grade: 3,
      type: 1,
      desc: "생긴건 강아지처럼 보이지만\n누구보다 용맹한 기사들의 대장",
    },
    {
      name: "최하나",
      grade: 3,
      type: 1,
      desc: "국가대표 태권도 선수\n강한석의 강한면에 반해\n연인이 되었습니다",
    },
    {
      name: "블레이드",
      grade: 3,
      type: 1,
      desc: "강해지기 위해 본인을\n기계로 만들어 버린 블레이드\n성별은 아무도 모릅니다",
    },
    {
      name: "R.스타",
      grade: 4,
      type: 2,
      desc: "아발론 최고의 락스타\n그의 기타 실력은 수준급입니다",
    },
    {
      name: "김한덕",
      grade: 4,
      type: 2,
      desc: "모자장수로 위장한 김한덕\n마을사람들 사이에 숨어\n마을을 지키고 있습니다",
    },
    {
      name: "척준경",
      grade: 4,
      type: 1,
      desc: "역사 속의 영웅\n그의 검에는 뭔가 \n다른 기운이 느껴집니다",
    },
    {
      name: "기멜",
      grade: 5,
      type: 2,
      desc: "핵 강한 무기를 만들어 내는\n 아발론의 과학자",
    },
    {
      name: "제르타",
      grade: 5,
      type: 1,
      desc: "창의 달인으로 불리는 위대한 전사\n아발론의 미래가 창창합니다",
    },
  ];

  const characterData2 = [
    {
      name: "머쉬룸",
      grade: 1,
      type: 2,
      desc: "발헤임의 축복을 받으며 \n조용히 자라던 버섯\n적들에겐 독버섯입니다",
    },
    {
      name: "드워프",
      grade: 1,
      type: 1,
      desc: "대장간에서 자라난 드워프 전사\n적들을 단숨에 제압하는\n강력한 힘을 자랑합니다",
    },
    {
      name: "리렌",
      grade: 2,
      type: 2,
      desc: "마법과 자연의 힘을 다루는 리렌\n고귀한 혈통의 강력한 마법으로\n적을 제압합니다",
    },
    {
      name: "올로크",
      grade: 2,
      type: 1,
      desc: "오크 부족을 위해 평생을 바친 전사\n끈질긴 의지로 전장에서\n두려움의 대상이 됩니다",
    },
    {
      name: "비르고",
      grade: 3,
      type: 2,
      desc: "매우 섬세하며 순수한 정신의 소유자\n하지만 적들을 벌벌 떨게 만드는 실력자",
    },
    {
      name: "제논",
      grade: 3,
      type: 2,
      desc: "짜릿하고 찌릿한 에너지를 내뿜는\n발헤임 최고의 악동",
    },
    {
      name: "자르그",
      grade: 3,
      type: 1,
      desc: "도끼를 자유자재로 다루며,\n이름에 맞게 적들을 자르고 다니는 전사",
    },
    {
      name: "에일린",
      grade: 4,
      type: 2,
      desc: "독성 화학 무기를 다루는 과학자,\n기멜의 제자입니다",
    },
    {
      name: "골D로버",
      grade: 4,
      type: 2,
      desc: "원한다면 줄수도 있지 찾아봐라!\n이 세상 전부를 거기에 두고 왔으니",
    },
    {
      name: "프리질라",
      grade: 4,
      type: 2,
      desc: "얼음의 마법을 다루는 공주\n생김새 만큼 적들을 차갑게 대합니다",
    },
    {
      name: "제우스",
      grade: 5,
      type: 2,
      desc: "번개의 신 제우스\n그의 번개는 1000만볼트 그 이상입니다",
    },
    {
      name: "포세이돈",
      grade: 5,
      type: 2,
      desc: "바다의 신 포세이돈\n그의 힘은 파도처럼 강력하며 차갑습니다",
    },
    {
      name: "아누비스",
      grade: 5,
      type: 1,
      desc: "고대 수호신 아누비스\n모든 침입자에게 심판을 내립니다",
    },
  ];

  const characterData3 = [
    {
      name: "라이칸",
      grade: 1,
      type: 1,
      desc: "늑대의 후손으로 태어난 전사\n늑대의 본능으로 적을 두렵게 하며\n전장을 질주합니다",
    },
    {
      name: "미미",
      grade: 1,
      type: 2,
      desc: "귀여운 외모로 상대를 방심하게 만들지만\n자신의 당근마저 던져가며\n 동료를 돕는 의리의 소녀",
    },
    {
      name: "타이가",
      grade: 1,
      type: 1,
      desc: "미미와 오랜 친구로 지낸 타이가\n미미를 지키기 위해 단련중인 소년",
    },
    {
      name: "크로우",
      grade: 2,
      type: 1,
      desc: "강력한 발톱으로 적들을 할큅니다\n화가 많이 나있습니다",
    },
    {
      name: "크롱",
      grade: 2,
      type: 2,
      desc: "공룡의 본능으로 무자비하게\n사냥하는 전사",
    },
    {
      name: "팬덤",
      grade: 3,
      type: 2,
      desc: "조용하고 온화한 성격의 팬더\n <주의!> 죽순 먹는 시간을\n절대 방해하지마십시오",
    },
    {
      name: "치나키",
      grade: 3,
      type: 2,
      desc: "불같은 성격의 불닭소녀\n아이러니하게도\n매운 음식은 싫어합니다",
    },
    {
      name: "카이",
      grade: 4,
      type: 2,
      desc: "예리한 시력과 강력한 날개에서\n나오는 깃털로 전장을 지배합니다",
    },
    {
      name: "마르코나",
      grade: 4,
      type: 2,
      desc: "푸른 불꽃을 다루는 마르코나\n칼리온의 1번대 대장",
    },
    {
      name: "레온",
      grade: 5,
      type: 1,
      desc: "붉은 머리를 가진 전사 레온\n동물의 왕입니다",
    },
    {
      name: "블랙드래곤",
      grade: 5,
      type: 2,
      desc: "드래곤이 깨어났습니다\n그의 포효는 전장을 흔들고\n적들을 공포에 빠뜨립니다",
    },
    {
      name: "유니",
      grade: 5,
      type: 2,
      desc: "신비로운 힘을 지닌 유니,\n보호의 상징으로 아군에게는 희망을,\n적에게는 두려움을 줍니다",
    },
  ];

  const tabs = ["아발론", "발헤임", "칼리온"];

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

  const slides = [
    {
      img: "/img/slide01.jpg",
      tit: "단계별로 디펜스",
      txt: "몰려오는 적을 막아내며 \n점점 강해지는 스테이지에 도전해보세요",
    },
    {
      img: "/img/slide02.jpg",
      tit: "월간 랭킹 시스템",
      txt: "매달 새롭게 시작되는 \n랭킹전에서 최고의 자리를 노려보세요",
    },
    {
      img: "/img/slide03.jpg",
      tit: "쏟아지는 보상",
      txt: "플레이할수록 쏟아지는 \n풍성한 보상을 모두 획득하세요!",
    },
    {
      img: "/img/slide04.jpg",
      tit: "다양한 영웅들",
      txt: "개성 넘치는 영웅들을 수집하고 \n나만의 최강 조합을 완성하세요!",
    },
    {
      img: "/img/slide05.jpg",
      tit: "장비 뽑기",
      txt: "강력한 장비를 획득하고 \n영웅의 전투력을 한 단계 더 높여보세요!",
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
      <section className={styles.mainVisual}>
        <div className={styles.inner}>
          <img
            src="/img/main_chr.png"
            alt=""
            className={`${styles.main_chr} ${styles.pc}`}
          />
          <img
            src="/img/main_chr_mobile.png"
            alt=""
            className={`${styles.main_chr} ${styles.mobile}`}
          />
          <img src="/img/main_logo.png" alt="" className={styles.main_logo} />
          <div className={styles.btn_box}>
            <ul>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=kr.secretcode.herorandomdefence"
                  target="_blank"
                >
                  <img src="/img/google_btn.png" alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://apps.apple.com/kr/app/영웅-랜덤-디펜스-랜타디/id6733224086"
                  target="_blank"
                >
                  <img src="/img/apple_btn.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.cont1} id="cont1">
        <div className={styles.inner}>
          <img
            src="/img/mushroom_chr.png"
            alt=""
            className={styles.mushroom_chr}
            data-aos="fade-up"
          />
          <h3 className={styles.tit} data-aos="fade-up" data-aos-delay="300">
            영웅들과 함께하는 타워 디펜스
          </h3>
          <p className={styles.des} data-aos="fade-up" data-aos-delay="500">
            스타 유즈맵 ‘랜타디’ 감성 그대로! <br />
            영웅 랜덤 소환으로 방어하는 타워 디펜스 게임{" "}
          </p>
          <img
            src="/img/leaf1.png"
            alt=""
            className={`${styles.leaf1} ${styles.leaf_img}`}
            data-aos="fade-up"
            data-aos-delay="500"
          />
          <img
            src="/img/leaf2.png"
            alt=""
            className={`${styles.leaf2} ${styles.leaf_img}`}
            data-aos="fade-up"
            data-aos-delay="500"
          />
          <img
            src="/img/leaf2.png"
            alt=""
            className={`${styles.leaf3} ${styles.leaf_img}`}
            data-aos="fade-up"
            data-aos-delay="500"
          />
          <Swiper
            className={styles.cont1_slider}
            modules={[Autoplay]}
            slidesPerView={1}
            breakpoints={{
              1200: {
                slidesPerView: 5,
                spaceBetween: 80,
              },

              565: {
                slidesPerView: 3,
                spaceBetween: 80,
              },
            }}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            spaceBetween={85}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {[...slides, ...slides].map((item, index) => (
              <SwiperSlide className={styles.slide} key={index}>
                <div className={styles.img_box}>
                  <img src={item.img} alt={`슬라이드 ${item.txt}`} />
                </div>
                <div className={styles.txt_box}>
                  <h6 className={styles.slide_tit}>{item.tit}</h6>
                  <p className={styles.slide_txt}> {item.txt}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className={styles.cont2} id="cont2">
        <img
          src="/img/cont2_bg.png"
          alt=""
          className={styles.cont2_bg}
          data-aos="zoom-in"
        />
        <img
          src="/img/cont2_main.png"
          alt=""
          className={styles.cont2_main}
          data-aos="zoom-in"
        />
      </section>
      <section className={styles.cont3} id="cont3">
        <div className={styles.inner}>
          <h3 className={styles.tit} data-aos="fade-up">
            국가별 다양한 영웅들
          </h3>
          <p className={styles.des} data-aos="fade-up">
            랜덤으로 소환되는 <br />
            다양한 국가별 영웅들을 성장시켜보세요
          </p>
          <div className={styles.btn_box} data-aos="fade-up">
            <ul className={styles.tab_list}>
              {tabs.map((tab, index) => (
                <li
                  key={tab}
                  className={`${styles.tab_item} ${
                    activeTab === index ? styles.on : ""
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    {tab}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.book} data-aos="fade-up">
            <img src="/img/book.png" alt="" className={styles.book_img} />

            {/* 아발론 */}
            <div
              className={`${styles.country_a} ${styles.book_box} ${
                activeTab === 0 ? styles.show : ""
              }`}
            >
              <div className={styles.book_left_box}>
                <h4 className={styles.coutry_tit}>
                  <img src="/img/a_symbol.png" alt="" />
                  아발론 영웅들
                </h4>

                <ul className={styles.profile_box}>
                  {characterData.map((character, index) => (
                    <li
                      key={index}
                      className={activeProfile === index ? styles.on : ""}
                      onClick={() => {
                        setImageLoaded(false);
                        setActiveProfile(index);
                      }}
                    >
                      <img
                        src={`/img/a_profile${String(index + 1).padStart(2, "0")}.jpg`}
                        alt={character.name}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.book_right_box}>
                <div className={styles.chr_profile}>
                  <img
                    src="/img/chr_profile_line.png"
                    alt=""
                    className={styles.line}
                  />

                  <div className={styles.center_box}>
                    <div className={styles.character_box}>
                      <img
                        src="/img/chr_bg.png"
                        alt=""
                        className={styles.chr_bg}
                      />

                      <img
                        src={`/img/a_character${String(
                          activeProfile + 1,
                        ).padStart(2, "0")}.png`}
                        alt=""
                        className={styles.chr}
                        onLoad={() => setImageLoaded(true)}
                      />
                    </div>

                    <div
                      className={`${styles.txt_box} ${
                        imageLoaded ? styles.txt_show : ""
                      }`}
                    >
                      <h6 className={styles.tit}>
                        {characterData[activeProfile].name}
                      </h6>

                      <span className={styles.grade}>
                        {gradeText[characterData[activeProfile].grade]}
                      </span>

                      <div className={styles.des_box}>
                        <span className={styles.attack}>
                          {typeText[characterData[activeProfile].type]}
                        </span>

                        <p className={styles.des}>
                          {characterData[activeProfile].desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  <img
                    src="/img/chr_profile_line.png"
                    alt=""
                    className={styles.line}
                  />
                </div>
              </div>
            </div>

            {/* 발헤임 */}
            <div
              className={`${styles.country_b} ${styles.book_box} ${
                activeTab === 1 ? styles.show : ""
              }`}
            >
              <div className={styles.book_left_box}>
                <h4 className={styles.coutry_tit}>
                  <img src="/img/b_symbol.png" alt="" />
                  발헤임 영웅들
                </h4>

                <ul className={styles.profile_box}>
                  {characterData2.map((character, index) => (
                    <li
                      key={index}
                      className={activeProfile2 === index ? styles.on : ""}
                      onClick={() => {
                        setImageLoaded2(false);
                        setActiveProfile2(index);
                      }}
                    >
                      <img
                        src={`/img/b_profile${String(index + 1).padStart(2, "0")}.jpg`}
                        alt={character.name}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.book_right_box}>
                <div className={styles.chr_profile}>
                  <img
                    src="/img/chr_profile_line.png"
                    alt=""
                    className={styles.line}
                  />

                  <div className={styles.center_box}>
                    <div className={styles.character_box}>
                      <img
                        src="/img/chr_bg.png"
                        alt=""
                        className={styles.chr_bg}
                      />

                      <img
                        src={`/img/b_character${String(
                          activeProfile2 + 1,
                        ).padStart(2, "0")}.png`}
                        alt=""
                        className={styles.chr}
                        onLoad={() => setImageLoaded2(true)}
                      />
                    </div>

                    <div
                      className={`${styles.txt_box} ${
                        imageLoaded2 ? styles.txt_show : ""
                      }`}
                    >
                      <h6 className={styles.tit}>
                        {characterData2[activeProfile2].name}
                      </h6>

                      <span className={styles.grade}>
                        {gradeText[characterData2[activeProfile2].grade]}
                      </span>

                      <div className={styles.des_box}>
                        <span className={styles.attack}>
                          {typeText[characterData2[activeProfile2].type]}
                        </span>

                        <p className={styles.des}>
                          {characterData2[activeProfile2].desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  <img
                    src="/img/chr_profile_line.png"
                    alt=""
                    className={styles.line}
                  />
                </div>
              </div>
            </div>

            {/* 칼리온 */}
            <div
              className={`${styles.country_c} ${styles.book_box} ${
                activeTab === 2 ? styles.show : ""
              }`}
            >
              <div className={styles.book_left_box}>
                <h4 className={styles.coutry_tit}>
                  <img src="/img/c_symbol.png" alt="" />
                  칼리온 영웅들
                </h4>

                <ul className={styles.profile_box}>
                  {characterData3.map((character, index) => (
                    <li
                      key={index}
                      className={activeProfile3 === index ? styles.on : ""}
                      onClick={() => {
                        setImageLoaded3(false);
                        setActiveProfile3(index);
                      }}
                    >
                      <img
                        src={`/img/c_profile${String(index + 1).padStart(2, "0")}.jpg`}
                        alt={character.name}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.book_right_box}>
                <div className={styles.chr_profile}>
                  <img
                    src="/img/chr_profile_line.png"
                    alt=""
                    className={styles.line}
                  />

                  <div className={styles.center_box}>
                    <div className={styles.character_box}>
                      <img
                        src="/img/chr_bg.png"
                        alt=""
                        className={styles.chr_bg}
                      />

                      <img
                        src={`/img/c_character${String(
                          activeProfile3 + 1,
                        ).padStart(2, "0")}.png`}
                        alt=""
                        className={styles.chr}
                        onLoad={() => setImageLoaded3(true)}
                      />
                    </div>

                    <div
                      className={`${styles.txt_box} ${
                        imageLoaded3 ? styles.txt_show : ""
                      }`}
                    >
                      <h6 className={styles.tit}>
                        {characterData3[activeProfile3].name}
                      </h6>

                      <span className={styles.grade}>
                        {gradeText[characterData3[activeProfile3].grade]}
                      </span>

                      <div className={styles.des_box}>
                        <span className={styles.attack}>
                          {typeText[characterData3[activeProfile3].type]}
                        </span>

                        <p className={styles.des}>
                          {characterData3[activeProfile3].desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  <img
                    src="/img/chr_profile_line.png"
                    alt=""
                    className={styles.line}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.story} id="story">
        <div className={styles.inner}>
          <img
            src="/img/story_tit_dec.png"
            alt=""
            className={styles.story_line}
            data-aos="fade-up"
          />
          <img
            src="/img/story_tit.png"
            alt=""
            className={styles.story_tit}
            data-aos="fade-up"
          />
          <p className={styles.story_txt} data-aos="fade-up">
            평화로운 별 에스트레아에는 <br />
            아발론, 발헤임, 칼리온, 다르칸 네 개의 강대국이 공존하고 있었습니다.
            <br />
            이들은 서로의 왕래를 원활하게 하기 위해 차원의 포탈을 만들었고,
            <br />
            이를 이용해 오랜 시간 평화를 지속해 왔습니다.
            <br />
            <br />
            하지만 다르칸이 포탈을 악용해 배신하고
            <br />
            악마 군단을 창조하여
            <br />
            다른 나라들을 함락시키기 시작했습니다. <br />
            <br />
            살아남은 자들은 힘을 잃고 절망에 빠졌습니다.
            <br />
            아발론은 비밀리에 발헤임과 칼리온의 잔존 세력과 동맹을 맺고,
            <br />
            각 나라의 특색을 지닌 강력한 영웅들을 소집합니다. <br />
            <br />
            이들은 다르칸의 악마 군단에 맞서기 위해 하나로 뭉쳐, <br />별
            에스트레아의 운명을 건 최후의 전쟁에 나섭니다.
          </p>
          <a href="./" className={styles.story_btn} data-aos="fade-up">
            <img src="/img/story_btn.png" alt="" />
          </a>
        </div>
      </section>
      <section className={styles.banner}>
        <div className={styles.inner}>
          <a
            href="https://cafe.naver.com/herorandomdefence"
            className={styles.banner_img}
            target="_blank"
          >
            <img src="/img/cafe_banner.png" alt="" />
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
