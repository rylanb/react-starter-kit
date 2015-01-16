var Photo = React.createClass({
  toggleLiked: function() {
    this.setState({
      liked: !this.state.liked
    });
  },

  getInitialState: function() {
    return {
      liked: false
    }
  },

  render: function() {
    var buttonClass = this.state.liked ? 'active' : '';

    return (
      <div className='photo'>
        <img src={this.props.src} />

        <div className='bar'>
          <button onClick={this.toggleLiked} className={buttonClass}>
            ♥
          </button>
          <span>{this.props.caption}</span>
        </div>
      </div>
    )
  }
});

var PhotoGallery = React.createClass({

  getDataFromServer: function() {
    return [{
      url: 'http://placehold.it/200x150',
      caption: 'New York!'
    },
    {
      url: 'http://placehold.it/200x50',
      caption: 'Other Thing'
    },
    {
      url: 'http://placehold.it/200x300',
      caption: 'Lots o\' Scooters'
    }];
  },
  render: function() {
    var data = this.getDataFromServer();

    var photos = data.map(function(photo) {
      return <Photo src={photo.url} caption={photo.caption} />
    });

    return (
      <div className='photo-gallery'>
        {photos}
      </div>
    )
  }
});

//React.render(<Photo src='http://placehold.it/350x150' caption='New York!'/>, document.body);
React.render(<PhotoGallery />, document.body);

