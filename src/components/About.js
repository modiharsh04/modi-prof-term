import React from "react";
import {UniqueKey} from "./util";
import {tagline} from "../assets/ascii_art/tagline";

export const About = () => (
  <React.Fragment key={UniqueKey()}>
    Hello, I am a software engineer with a Masters's in Computer Science. I am currently living in Illinois, USA. I come from Ahmadabad, Gujarat, India. I love to solve problems, challenging tasks and that is the reason why I chose Computer Science as my career.
    <br /><br />
    Outside work I love traveling, being amidst nature, trying new food, doing yoga, playing and watching sport, experiment with new things/adventures, watching movies, shows, and get involved in intellectual conversations. I love being on the road and explore new places, food, or culture. 
    <br /><br />
    I disguise myself as a life long learner, analytical, positive thinker, cheerful, and one who loves to spend time with family and friends.
    <br /><br />
    The tagline for me would be:
    <pre style={style.tagline}>{tagline}</pre>
  </React.Fragment>
)

const style = {
    tagline:{
	lineHeight: '4pt',
	fontSize: '4pt',
    	letterSpacing: '-0.8pt',
    	color: 'var(--color-blue)',
    	fontWeight: '900',
    }
}
