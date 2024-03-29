import React from "react";

function Footer() {
  return (
    <>
      <footer style={{ position: "relative" }}>
        <div>
          <h2 className="text-primary text-center">Eat, Cook, Repeat</h2>
          <p className="text-muted text-center">
            Share your best recipe by uploading here !
          </p>
        </div>

        <p className="footer-copyright">
          © built by
          <a href="https://github.com/kubil-ismail">Bilkis Ismail</a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
