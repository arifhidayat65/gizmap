'use client'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg ec-bg-neutral-100 mx-0" id="nav-1">
      <div className="container-fluid">
        <a className="navbar-brand mx-4" href="/">
          <img
            alt="Logo Enigma"
            loading="lazy"
            width="218"
            height="51"
            decoding="async"
            data-nimg="1"
            className="img-fluid"
            style={{color: 'transparent'}}
            src="https://cdn.enigmacamp.com/assets/enigmacamp-logo.svg"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span><i className="bi bi-list"></i></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item d-flex align-items-center">
              <a href="/" className="common-menu nav-link font-menu p-2">Home</a>
            </li>
            <li className="nav-item d-flex align-items-center d-flex align-items-center">
              <a
                data-bs-toggle="collapse"
                href="#mega-menu-for-you"
                role="button"
                aria-expanded="false"
                aria-controls="mega-menu-for-you"
                className="nav-link mega-menu collapsed d-none d-lg-block p-2"
                id="button-for-you"
              >
                For You <span className="bi bi-chevron-down"></span>
              </a>
              <a
                data-bs-toggle="collapse"
                href="#mobile-menu-for-you"
                role="button"
                aria-expanded="false"
                aria-controls="mega-menu-for-you"
                className="nav-link mega-menu collapsed d-lg-none d-block p-2"
                id="button-menu-for-you"
              >
                For You <span className="bi bi-chevron-down"></span>
              </a>
            </li>
            <div id="mobile-menu-for-you" className="ec-bg-neutral-100 collapse wrapper-mega-menu">
              <div className="ec-row gap-2">
                <div className="ec-col-12">
                  <a href="/for-you/premium-class" className="link-nostyle">
                    <div className="card card-megamenu border-0">
                      <div className="card-body ec-row">
                        <div className="ec-col-2 d-flex align-items-start">
                          <img
                            alt="PREMIUM CLASS"
                            loading="lazy"
                            width="100"
                            height="100"
                            decoding="async"
                            data-nimg="1"
                            className="img-fluid"
                            style={{color: 'transparent', width: '100%', height: 'auto'}}
                            src="/icons/enigma-camp-blue-logo.svg"
                          />
                        </div>
                        <div className="ec-col-10">
                          <p className="card-title">
                            <span className="ec-secondary-500">NEW! </span>
                            PREMIUM CLASS
                          </p>
                          <p className="card-subtitle">-</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="ec-col-12">
                  <a href="/for-you/offline-bootcamp" target="_self" className="link-nostyle">
                    <div className="card card-megamenu border-0">
                      <div className="card-body ec-row">
                        <div className="ec-col-2 d-flex align-items-start">
                          <img
                            alt="Offline Bootcamp"
                            loading="lazy"
                            width="100"
                            height="100"
                            decoding="async"
                            data-nimg="1"
                            className="img-fluid"
                            style={{color: 'transparent', width: '100%', height: 'auto'}}
                            src="/images/icon-megamenu-bootcamp.svg"
                          />
                        </div>
                        <div className="ec-col-10">
                          <p className="card-title">Offline Bootcamp</p>
                          <p className="card-subtitle">Upgrade your skill in our classes!</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <li className="nav-item d-flex align-items-center">
              <a href="/for-corporate" className="common-menu nav-link font-menu p-2">
                For Corporate
              </a>
            </li>
            <li className="nav-item d-flex align-items-center">
              <a href="/about-us" className="common-menu nav-link font-menu p-2">
                About Us
              </a>
            </li>
            <li className="nav-item d-flex align-items-center">
              <a href="/blog" className="common-menu nav-link font-menu p-2">
                Blogs
              </a>
            </li>
            <li className="nav-item d-flex align-items-center">
              <a href="/partners" className="common-menu nav-link font-menu p-2">
                Partners
              </a>
            </li>
            <li className="nav-item d-flex align-items-center">
              <a
                href="https://help.enigmacamp.com/en/support/home"
                className="common-menu nav-link font-menu p-2"
              >
                FAQ
              </a>
            </li>
            <li className="nav-item d-flex align-items-center d-none d-lg-block">
              <div style={{backgroundColor: '#e1e1e1', width: '3px', height: '100%'}}></div>
            </li>
            <li className="nav-item d-flex align-items-center d-flex align-items-center gap-3 mb-3 mb-md-0">
              <a
                className="ec-btn ec-btn-md ec-btn-rounded ec-bg-primary-500 ec-neutral-50 justify-content-center link-nostyle btnRegister"
                target="_blank"
                href="https://account.enigmacamp.com/login"
              >
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
