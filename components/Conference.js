import React, { PureComponent } from "react";
import isBrowser from "is-in-browser";
import Modal from "react-modal";

export default class extends PureComponent {
  state = {
    showModal: false
  };

  openModal = () => {
    this.setState({
      showModal: true
    });
  };

  closeModal = () => {
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
        display: "flex"
      }
    };

    return (
      <div className="conf-wrapper">
        <style jsx>{`
          .conf-wrapper {
            background-color: #fff;
            position: relative;
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
              0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
          }

          .conference {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            display: flex;
          }

          h5 {
            color: #333;
            margin-top: 10px;
          }

          h6 {
            color: #666;
            margin-bottom: 0;
          }

          .conference-img {
            background-image: url("./static/conference.jpg");
            height: 108px;
            width: 200px;
            background-size: cover;
            background-position: center;
            border-radius: 2px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 30px;
            color: #fff;
            cursor: pointer;
            background-color: #673ab7;
          }

          .conference-img:hover {
            color: #eee;
          }

          .conference-info {
            padding: 0 20px;
            flex: 1;
          }

          .fa-close {
            color: #fff;
            position: absolute;
            right: 20px;
            top: 20px;
            font-size: 24px;
            cursor: pointer;
          }

          .yt-wrapper {
            width: 100%;
            justify-content: center;
            align-items: center;
            display: flex;
            max-width: 711px;
            margin: 0 auto;
          }

          @media screen and (max-width: 700px) {
            .conference {
              flex-direction: column;
            }

            .conference-info {
              padding: 20px 0 0 0;
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
        <div className="conference">
          <div className="conference-img" onClick={this.openModal}>
            <i className="fa fa-play" />
          </div>
          <div className="conference-info">
            <h5>Chrome Developer Summit 2016</h5>
            <h6>
              Spoke about the development process and performance optimisations
              we did to improve our mobile experience.
            </h6>
          </div>
        </div>
        <Modal isOpen={this.state.showModal} style={style} contentLabel="Conference">
          <i className="fa fa-close" onClick={this.closeModal} />
          <div className="yt-wrapper">
            <iframe
              height="400"
              src="https://www.youtube.com/embed/KSWSs9UsNpc?rel=0&amp;showinfo=0&amp;start=206"
              frameborder="0"
              allowfullscreen
            />
          </div>
        </Modal>
      </div>
    );
  }
}
