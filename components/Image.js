import React, { PureComponent } from "react";
import LazyCard from "react-lazy-card/dist/LazyCard";
import isBrowser from "is-in-browser";

export default class Image extends PureComponent {
  load() {
    this.imageRef.load();
  }

  render() {
    return (
      <div
        data-id={this.props.id}
        style={{ backgroundColor: this.props.color }}
      >
        <LazyCard
          autoLoad={!(isBrowser && window.IntersectionObserver)}
          ref={x => (this.imageRef = x)}
          defaultImage={this.props.defaultImage}
          image={this.props.image}
        />
      </div>
    );
  }
}
