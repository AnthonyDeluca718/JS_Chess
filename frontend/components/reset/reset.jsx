import React from 'react';
import Modal from 'react-modal';
class Reset extends React.Component {

  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.resetGame = this.props.resetGame;
    this.yesReset = this.yesReset.bind(this);

    this.state = {
      modalOpen: false,
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

  render() {
    return(
    <div className="reset-container">

      <div className="reset-button" onClick={this.openModal}>
        Reset Game
      </div>

      <Modal
        isOpen={this.state.modalOpen}
        onRequestClose={this.onModalClose}
        style={this.state.style}
        >
        <div className="reset-modal-message">
          "Are you sure you want to reset the game?"
          <div className="reset-button" onClick={this.yesReset}>
            Yes, reset.
          </div>
        </div>
      </Modal>

    </div>
    )
  }
}

export default Reset ;
