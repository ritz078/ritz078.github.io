import React, { PureComponent } from "react";
import Modal from "react-modal";
import { Play } from "../components/Svgs";

export default class extends PureComponent {
  state = {
    showModal: false
  };

  openModal = () => {
    this.setState({
      showModal: true
    });
  };

  closeModal = e => {
    e.stopPropagation();

    this.setState({
      showModal: false
    });
  };

  render() {
    const style = {
      content: {
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.85)",
        border: 0,
        padding: 0,
        display: "flex",
        borderRadius: 0
      }
    };

    return (
      <div className="conf-wrapper" onClick={this.openModal}>
        <style jsx>{`
          .conf-wrapper {
            background: linear-gradient(
                to right top,
                rgb(175, 78, 71),
                rgb(97, 0, 173)
              )
              rgb(255, 255, 255);
            position: relative;
            max-width: 600px;
            padding: 10px 20px;
            border-radius: 4px;
            margin: 0 auto;
            cursor: pointer;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px 0px;
            transform: translateY(-50%);
            transition: all 200ms;
          }

          .conf-wrapper:hover {
            box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 14px 0px;
          }

          .conference {
            max-width: 800px;
            margin: 0 auto;
            display: flex;
            align-items: center;
          }

          h5 {
            color: #fff;
            margin-top: 0px;
          }

          h7 {
            color: #fff;
            margin-bottom: 0;
            margin-top: -7px;
            font-size: 15px;
            line-height: 22px;
          }

          .conference-img {
            background-image: url("./static/conference.jpg");
            height: 108px;
            width: 192px;
            background-size: contain;
            background-position: center;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 30px;
            color: #fff;
            cursor: pointer;
            background-color: #673ab7;
            background-repeat: no-repeat;
          }

          .conference-img:hover {
            color: #eee;
          }

          .conference-info {
            padding: 15px;
            flex: 1;
          }

          .fa-times-circle {
            position: absolute;
            top: 20px;
            right: 20px;
            color: #fff;
            font-size: 30px;
            cursor: pointer;
          }

          .close {
            color: #fff;
            position: absolute;
            right: 20px;
            top: 20px;
            font-size: 44px;
            cursor: pointer;
          }

          .yt-wrapper {
            width: 100%;
            justify-content: center;
            align-items: center;
            display: flex;
            max-width: 900px;
            margin: 0 auto;
          }

          .yt-wrapper iframe {
            width: 100%;
            border: 0;
          }

          @media screen and (max-width: 700px) {
            .conference {
              flex-direction: column;
            }

            .conf-wrapper {
            transform: translateY(0);
            padding: 0;
            }

            .conference-info {
              padding: 20px;
            }
            .conference-img {
              width: 100%;
              min-height: 160px;
            }
            h5 {
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }
          }
        `}</style>

        <style jsx global>{`
          .conference-img svg {
            height: 40px;
          }
        `}</style>
        <div className="conference">
          <div className="conference-img">
            <Play />
          </div>
          <div className="conference-info">
            <h5>Chrome Developer Summit 2016</h5>
            <h7>
              Spoke about the development process and performance optimisations
              we did to improve our mobile experience.
            </h7>
          </div>
        </div>
        <Modal
          isOpen={this.state.showModal}
          style={style}
          contentLabel="Conference"
        >
          <i className="fa fa-times-circle" onClick={this.closeModal} />
          <div className="yt-wrapper">
            <iframe
              height="500"
              src="https://www.youtube.com/embed/KSWSs9UsNpc?rel=0&amp;showinfo=0&amp;start=206"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </Modal>
      </div>
    );
  }
}
