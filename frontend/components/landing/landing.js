import React from 'react';
import { Link } from 'react-router-dom';


class Landing extends React.Component{
  constructor(props) {
    super(props)
  }

  render(){
    const { currentUser, openModal } = this.props;
    return(
      <div>
        <section className="landing_body">
          <ul>
            <li>
              <div className="welcome_intro">
                <h1>Make more time for the work that matters most</h1>
                <p>Dietsana is the work management platform teams use to stay focused on the goals, projects, and daily tasks that grow business.</p>
                {
                  currentUser ? 
                  <Link className="return" to="/app">Return to my Dietsana</Link> 
                  : 
                  <button className="signup" onClick={() => openModal('signup')}>Try for free</button>
                }
              </div>
              <div>
              <div className="img-container">
                <video autoPlay playsInline loop muted className="background-vid" poster="video broke">
                  <source src="https://d1gwm4cf8hecp4.cloudfront.net/videos/homepage/timeline/home-timeline-EN.mp4" type="video/mp4"/>
                </video>
                <div className="mosaic">
                  <div className="img-mosaic1">
                    <img src={window.landing1} />
                  </div>
                  <div className="img-mosaic2">
                    <img src={window.landing2} />
                  </div>
                  <div className="img-mosaic3">
                    <img src={window.landing3} />
                  </div>
                </div>
              </div>
              </div>
            </li>
            <li className="intro_highlights">
                <section>
                  <p>Hit deadlines</p>
                  <p>Create visual project plans to see how every step maps out over time. Pinpoint risks. Eliminate roadblocks. Even when plans change.</p>
                </section>
                <section>
                  <p>Get organized</p>
                  <p>Plan and structure work in a way that’s best for you. Set priorities and deadlines. Share details and assign tasks. All in one place.</p>
                </section>
                <section>
                  <p>Stay on track</p>
                  <p>Follow projects and tasks through every stage. You know where work stands and can keep everyone aligned on goals.</p>
                </section>
            </li>

            <li>
              <div className="construction">
                <p>(Under Construction, more to come!)</p>
              </div>
            </li>

          </ul>
        </section>
      </div>
    )
  }
}

export default Landing;