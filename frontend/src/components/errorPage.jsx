import "../styles/errorPage.css"
import { Grape } from "lucide-react"

export default function ErrorPage() {

const card = document.querySelector("div")


  document.addEventListener("mousemove", (e) => {
    rotateCard(e, card);
  });

  function rotateCard(event, element) {
//get mouse position
    const x = event.clientX
    const y = event.clientY

    const middleX = window.innerWidth / 2
    const middleY = window.innerHeight / 2

    const offsetX = ((x - middleX) / middleX) * 10
    const offsetY = ((y - middleY) / middleY) * 10

    element.style.setProperty("--rotateX", -1 * offsetY + "deg")
    element.style.setProperty("--rotateY", offsetX + "deg")
  }
  return (
    <>
      <section className="error-page">
        <div className="error-content">
        <h2 className="error-header">Page does not exist</h2>
        <div className="grape-container">


        <p className="error-message">Here, have a grape and try again!</p>
        <Grape width={45} height={45} className="grape" />
        </div>

        </div>
      </section>
    </>
  )
}
