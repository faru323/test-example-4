import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";
const Navbar = () => {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const [textColor, SetTextCOLOR] = useState("white");
  const [flex, setFlex] = useState("flex");
  const [align, setAlign] = useState("center");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#fff") : setnavColor("transparent");
    window.scrollY > 100 ? setnavSize("10rem") : setnavSize("10rem");
    window.scrollY > 10 ? SetTextCOLOR("black") : SetTextCOLOR("white");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <div className={styles.navbar}>
      <div
        className={styles.navbar__top}
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s",
          display: flex,
          alignItems: align,
        }}
      >
        <div className={styles.navbar__top__left}>
          <p
            style={{
              fontSize: "26px",
              fontWeight: "900",
              color: textColor,
              transition: "all 1s",
              display: flex,
              alignItems: align,
            }}
          >
            OneSchool
          </p>
        </div>
        <div className={styles.navbar__top__middle}>
          <ul>
            <li
              style={{
                color: textColor,
                transition: "all 1s",
              }}
            >
              {" "}
              <Link
                to={"/"}
                style={{
                  color: textColor,
                  transition: "all 1s",
                }}
                className={styles.link}
              >
                Home
              </Link>
            </li>
            <li
              style={{
                color: textColor,
                transition: "all 1s",
              }}
            >
              Favorites
            </li>
            <li
              style={{
                color: textColor,
                transition: "all 1s",
              }}
            >
              {" "}
              Courses
            </li>
            <li
              style={{
                color: textColor,
                transition: "all 1s",
              }}
            >
              Programs
            </li>
          </ul>
        </div>
        <div className={styles.navbar__top__right}>
          <button className={styles.navbar__top__right__btn}>Contact Us</button>
        </div>
      </div>
      <div className={styles.navbar__bottom}>
        <div className={styles.navbar__bottom__container}>
          <div className={styles.navbar__bottom__container__left}>
            <h1>Learn From The Expert</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              ipsa nulla sed quis rerum amet natus quas necessitatibus.
            </p>
            <button>Addmission Now</button>
          </div>
          <div className={styles.navbar__bottom__container__right}>
<div className={styles.signup}> 

<p>Sign Up</p>
<form>

<input type="text" name="" id="" placeholder="Email Addresss" />
<input type="text" name="" id=""  placeholder="Password"/>
<input type="text" name="" id="" placeholder="Re-type Password"/>
<button>Submit</button>
</form>


  </div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
