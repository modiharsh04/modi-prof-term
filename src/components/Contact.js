import React from "react";
import {
  emailIcon,
  gitHubIcon,
  instagramIcon,
  twitterIcon
} from "../assets/ascii_art";
import {UniqueKey} from "./util";

const contactMethods = {
  Email: ['mailto:harsh@modi.click', emailIcon],
  GitHub: ['https://github.com/modiharsh04', gitHubIcon],
  Instagram: ['https://www.instagram.com/modi.harsh04', instagramIcon],
  Twitter: ['https://twitter.com/modiharsh04', twitterIcon],
}

export const Contact = () => {
  return (
    <ul className='contact' key={UniqueKey()}>
      {Object.keys(contactMethods).map(key => (
        <li key={UniqueKey()}><a target='_blank' rel="noopener noreferrer"
                                 href={contactMethods[key][0]}>{key}
          <pre className={'ascii-logo'}>{contactMethods[key][1]}</pre>
        </a>
        </li>
      ))}
    </ul>
  )
}
