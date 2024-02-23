export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <video width="900" autoPlay loop muted className="z-0">
        <source 
          src="/bruneca.mp4"
          type="video/mp4"
        />
      </video>
      <main className="absolute z-10 text-center">
        <div>
          <h1 className="bg-white">
            [23/2 09:39] Tônhao: Aniversário do homem mais estudioso/gado da história desse grupo
          </h1>
          <h1 className="bg-white mt-3">
            [23/2 09:39] Tônhao: Ow
          </h1>
          <h1 className="bg-white mt-3">
            [23/2 09:39] Tônhao: @Bruno
          </h1>  
          <h1 className="bg-white mt-3">
            [23/2 09:39] Tônhao: O grande jogador de dota 2 
          </h1>
          <h1 className="bg-white mt-3">
            [23/2 09:39] Tônhao: O calvo mais gostoso do Brasil
          </h1>
        </div>
      </main>
    </div>
  );
}