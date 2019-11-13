import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./contact.scss"

const profiles = [
  {
    title: "Github",
    url: "https://github.com/CakeWest",
    icon: ["fab", "github"]
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/holmesjake/",
    icon: ["fab", "linkedin"]
  },
  {
    title: "Mail",
    url: "mailto:jakewest@live.ca",
    icon: "envelope"
  }
]

export default function Contact() {
  const profileListItems = profiles.map(profile => {
    let { url, title, icon } = profile;

    return (
      <li key={title}>
        <a href={url} title={title} className="">
          <FontAwesomeIcon icon={icon} size="2x" />
          <h3 className={styles.title}>{title}</h3>
        </a>
      </li>
    );
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Contact</h1>
      <ul className={styles.profileList}>{profileListItems}</ul>
    </div>
  );
}