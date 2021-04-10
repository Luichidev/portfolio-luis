import Facebook from "../Icons/Facebook";
import Twitter from "../Icons/Twitter";
import Whatsapp from "../Icons/Whatsapp";
import Github from "../Icons/Github";

export default function Footer() {
  return (
    <>
      <footer>  
        <div className="container">
          <div className="flex__container social-icons">
            <a href="https://www.facebook.com/luisalbertothethunder" className="flex__1" target="_blank" rel="noopener" aria-label="Facebook">
              <Facebook/>
            </a>
            <a href="https://api.whatsapp.com/send?phone=+34663411621" className="flex__1" target="_blank" rel="noopener" aria-label="Facebook">
              <Whatsapp/>
            </a>
            <a href="https://twitter.com/@luichidev" className="flex__1" target="_blank" rel="noopener" aria-label="Facebook">
              <Twitter/>
            </a>
            <a href="https://github.com/luichidev" className="flex__1" target="_blank" rel="noopener" aria-label="Facebook">
              <Github/>
            </a>
          </div>
          <div className="footer-info">
            <p>© 2021 Portfolio WEB | Luis Alberto Arana M.</p>
            <p>Design by: @luichidev</p>
          </div>
        </div>
      </footer>
      <style jsx>{`
        footer {
          background-color: var(--secondColor);
          color: #fff;
          text-align: center;
        }

        .container {
          background-color: #000000;
          padding: 20px 0;
        }

        .social-icons {
          max-width: 50%;
          margin: 0 auto;          
        }

        .footer-info {
          margin-top: 10px;
        }

        .footer-info p{
          margin: 0;
          padding: 0;
        }

        .social-icons a {
          margin: 5px;
        }

        `}</style>
    </>
  );
}
