import React from 'react';

class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <footer className="footer-content group">

          <div className="footer-icons">
            <div className="footer-signiture">
              Anthony Deluca
            </div>
            <a href="https://github.com/AnthonyDeluca718"><i className="devicon-github-plain colored"></i></a>
            <a href="https://www.linkedin.com/in/a-deluca"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            <a href="mailto:mail@adeluca.io" ><i className="fa fa-envelope" aria-hidden="true"></i></a>
          </div>

      </footer>
    );
  }
}

export default Footer;
