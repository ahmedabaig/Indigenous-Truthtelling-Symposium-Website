import BisanOwda from "../components/art-pieces/bisan-owda";
import RefaatAlAreer from "../components/art-pieces/refaat-al-areer";
import ShireenAbuAkleh from "../components/art-pieces/shireen-abu-akleh";
import Pin from "../components/pin";

function EduPieces() {
  return (
    <div className="flex flex-col px-24 mb-32">
      <h2 className="mt-12 mb-24 text-pink-300 italic text-7xl/relaxed text-center">Indigenous Art for Education Pieces</h2>
      <BisanOwda />
      <RefaatAlAreer />
      <ShireenAbuAkleh />
      <p className="text-center text-pink-300 c mb-24 text-4xl/relaxed">
        <span className="font-extrabold italic">Phase ll Coming in Summer 2026: </span><br></br>
        Interactive Mosaic Tiles - come learn and honor the memory of each individual martyr who was lost during the genocide. Glory to our martyrs.
      </p>
      <div className="mb-16">
        <h2 className="text-8xl/relaxed italic text-yellow-300 text-center mb-6">How to use the Indigenous Art for Education Pieces?</h2>
        <p className="text-creme text-4xl/relaxed text-center">In the history of indigenous liberation solidarity movements, art has been a powerful tool of creative expression and of resistance. Students, educators, and people of conscience have used art as a means of challenging colonial domination. Here are some suggestions on how to use these pieces:</p>
      </div>
      <Pin color="#7B9F49">
        <span className="font-bold">Project Our Art:</span> Thousands of Artists and art lovers share their most moving pieces with the use of projectors. Feel free to project our art on the side of a building, on campus, in your own living room or wherever else you see fit!
      </Pin>
      <Pin color="#F37E6A" shift="right" className="self-end">
        <span className="font-bold">Project Our Art:</span> Click the Link below to see a list of cost effective options to print our Art pieces on 5x5, 7x8, or 8x10 foot canvas that include a metal stand.
      </Pin>
      <Pin color="#F1BE4B">
        For financial assistance for you and your organization, click the link below to see if you qualify to receive a print of our art:
      </Pin>
    </div>
  );
}

export default EduPieces;