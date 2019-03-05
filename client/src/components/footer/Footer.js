import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./footer.scss";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: [
        {
          title: "Github",
          url: "https://github.com/CakeWest",
          icon: ["fab", "github"]
        },
        {
          title: "LinkedIn",
          url: "https://www.linkedin.com/in/jake-holmes-57106912b/",
          icon: ["fab", "linkedin"]
        },
        {
          title: "Mail",
          url: "mailto:jakewest@live.ca",
          icon: "envelope"
        }
      ]
    };
  }

  render() {
    const linkListItems = this.state.profiles.map(profile => {
      let { url, title, icon } = profile;

      return (
        <li key={title}>
          <a href={url} title={title} className="">
            <FontAwesomeIcon icon={icon} size="2x" />
          </a>
        </li>
      );
    });

    return (
      <section className={styles.footer}>
        <ul className={styles.profileList}>{linkListItems}</ul>
      </section>
    );
  }
}

export default Footer;
