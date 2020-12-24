import React from "react";
import {UniqueKey} from "./util";

export const About = () => (
  <React.Fragment key={UniqueKey()}>
    Hello, I am a software engineer with Master's in Computer Science. I am currently
    living in Illinois, USA. I come from Ahmadabad, Gujarat, India. I love to solve 
    problems, challenging tasks and that is the reason I chose Computer Science as 
    my career.
    <br /><br />
    Outside work I love traveling, being amidst nature, trying new food, doing yoga, 
    playing and watching sport, experiment with new things/adventures, watching movies,
    shows, and get involved in intellectual conversations. I love being on the
    road and explore new places, food or culture. 
    <br /><br />
    I disguise myself as a life long learner, analytical, positive thinker, 
    cheerful, and one who loves to spend time with family and friends.
  </React.Fragment>
)
