import Image from "next/image";

function primeiroJSX() {
  return(
    <div>
      Gabriel Moura - Introdução ao React.js
    </div>
  )
}

export default function Home() {
  return (
    <div className="App">
      {primeiroJSX()}
    </div>
  );
}
