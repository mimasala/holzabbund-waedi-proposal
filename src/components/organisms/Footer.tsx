const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 ">
        <aside>
        </aside>
        <nav>
          <h6 className="footer-title">Holzabbund Wädenswil AG</h6>
          <a className="link link-hover">Startseite</a>
          <a className="link link-hover">Über uns</a>
          <a className="link link-hover">Offene Stellen</a>
          <a className="link link-hover">Datenschutz</a>
          <a className="link link-hover">Impressum</a>
          <a className="link link-hover">Kontakt</a>
        </nav>
        <nav>
          <h6 className="footer-title">Holzabbund Angebot</h6>
          <a className="link link-hover">Produkte</a>
          <a className="link link-hover">Planung</a>
          <a className="link link-hover">Dienstleistungen</a>
          <a className="link link-hover">Lieferanten</a>
          <a className="link link-hover">Standort</a>
        </nav>
      </footer>
    </>
  )
}

export default Footer
