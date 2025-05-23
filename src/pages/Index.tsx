import Footer from "@/components/organisms/Footer"
import MainContentContainer from "@/components/organisms/MainContentContainer"
import Navbar from "@/components/organisms/Navbar"
import { useNavigate } from "react-router"

const Index = () => {
  const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/background.webp)",
        }}
      >
        <div className="hero-overlay backdrop-blur-sm "></div>
        <div className="hero-content text-neutral-content flex-col lg:flex-row-reverse">
          <div className="carousel w-full rounded-md">
            <div id="item1" className="carousel-item w-full">
              <img
                src="/Slideshow-1.webp"
                className="w-full h-64 object-cover object-center"
              />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img
                src="/Slideshow-2.webp"
                className="w-full h-64 object-cover object-center"
              />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img
                src="/Slideshow-3.webp"
                className="w-full h-64 object-cover object-center"
              />
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold">Abbundwerk in Wädenswil</h1>
            <p className="py-6">
              Abbundarbeiten nach Mass. Von der Balkenlagen über Dachstöcke, Binder und Elementbauten.
              <br />
              Mit Leidenschaft zu unserem Beruf und zum Holz.
              Kompetent und fachmännisch.
              <br />
              <br />
              <p className="font-bold">Nehmen sie mit uns <a onClick={() => navigate("/kontakt")} className="link">Kontakt</a> auf!</p>
            </p>
          </div>
        </div>
      </div>

      <MainContentContainer>
        <div>

        </div>
      </MainContentContainer>
      <Footer />
    </>
  )
}

export default Index
