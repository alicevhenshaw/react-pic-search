import React from 'react'

class ImageCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      spans: 0
    }
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // the image takes a little time to actually mount, so if you don't
    // wait for it to load, the immediate 'height' of the component is 0
    // this listener waits for it to emit a 'load' event
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  componentDidUpdate() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight
    const spans = Math.ceil((height/10))

    this.setState({spans: spans})
  }

  render() {
  // description, id and urls are all first level json of the image in the list
  // i.e. image.description, image.id and image.urls
    const { description, urls, id } = this.props.image;
    return(
      <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
        <img
          ref={this.imageRef}
          alt={description}
          key={id}
          src={urls.regular}>
        </img>
      </div>
    )
  }
}

export default ImageCard;