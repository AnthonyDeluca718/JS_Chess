import React from 'react';
import Modal from 'react-modal';
class Reset extends React.Component {

  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.resetGame = this.props.resetGame;
    this.yesReset = this.yesReset.bind(this);

    this.openRandom = this.openRandom.bind(this);
    this.onRandomClose = this.onRandomClose.bind(this);
    this.randGame = this.props.randGame;
    this.yesRandom = this.yesRandom.bind(this);

    this.state = {
      modalOpen: false,
      randomOpen: false,
      style: {
        content : {
          margin: '150px auto 0 auto',
          width: '350px',
          height: '115px',
          border: '1px solid red',
          background: '#DDA0DD'
        }, overlay: {

        }
      },
    }

  }

  onModalClose() {
    this.setState({modalOpen: false});
  }

  openModal() {
    this.setState({modalOpen: true})
  }

  yesReset() {
    this.resetGame();
    this.setState({modalOpen: false});
  }

  onRandomClose() {
    this.setState({randomOpen: false});
  }

  openRandom() {
    this.setState({randomOpen: true})
  }

  yesRandom() {
    this.randGame();
    this.setState({randomOpen: false});
  }

  render() {
    return(
    <div className="reset-container">

      <ul className="reset-buttons group">
        <li className="reset-button" onClick={this.openModal}>
          Reset Game
        </li>

        <li className="reset-button" onClick={this.openRandom}>
          Random Game
        </li>
      </ul>

      <Modal
        isOpen={this.state.modalOpen}
        onRequestClose={this.onModalClose}
        style={this.state.style}
        >
        <div className="reset-modal-message">
          Are you sure you want to reset the game?
          <div className="reset-button" onClick={this.yesReset}>
            Yes, reset.
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={this.state.randomOpen}
        onRequestClose={this.onRandomClose}
        style={this.state.style}
        >
        <div className="reset-modal-message">
          Are you sure you want to create a new random board?
          <div className="reset-button" onClick={this.yesRandom}>
            Yes, randomize.
          </div>
        </div>
      </Modal>

    </div>
    )
  }
}

export default Reset ;
