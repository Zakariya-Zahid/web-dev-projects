import { useState } from "react";

function App() {
  const darkThemeConfig = {
    bgColor: "#111",
    textColor: "white",
  };
  const lightThemeConfig = {
    bgColor: "white",
    textColor: "black",
  };
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? darkThemeConfig : lightThemeConfig;
  return (
    <>
      <body className="duration-500" style={{ backgroundColor: theme.bgColor }}>
        <header className="bg-teal-500 p-4 w-full">
          <ul className="flex justify-around items-center">
            <div>
              <h2 className="text-xl font-bold text-[#8B0A1D]">Logo</h2>
            </div>
            <div className="flex gap-7 text-xl text-[#8B0A1D]">
              <li>Home</li>
              <li>About</li>
              <li>Pricing</li>
              <li>Contact</li>
            </div>
            <button
              onClick={() => setIsDark(!isDark)}
              style={{ backgroundColor: theme.bgColor, color: theme.textColor }}
              className=" px-3 py-2 rounded-2xl"
            >
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
          </ul>
        </header>

        <main
          style={{
            backgroundColor: theme.bgColor,
            color: theme.textColor,
          }}
          className="border box-border mt-5 p-4"
        >
          <div id="paragraph" className="p-4 font-serif">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores delectus officia placeat dignissimos eaque optio vero
              nulla tenetur aspernatur voluptatibus, adipisci nesciunt corrupti
              eius sed vitae. Pariatur at aliquam est? Nam sit, eius qui fugit
              reprehenderit quasi quis expedita, esse asperiores incidunt
              veritatis! Aspernatur voluptatum similique, odio tempore iusto
              aut. Iusto iure repellendus, placeat odit corporis perferendis
              molestiae a similique? Earum labore esse voluptatibus soluta
              adipisci voluptates repudiandae harum quibusdam recusandae
              voluptate, ex ea possimus, placeat, laudantium ratione cum dolor
              beatae tenetur provident modi! Odit placeat ab nemo dolorum
              tempora. Omnis repellendus nulla nesciunt reprehenderit laudantium
              tempore necessitatibus amet nobis aliquid optio at velit
              reiciendis exercitationem nostrum quos esse, dolorum consectetur
              unde aperiam beatae odit! Aut ratione laudantium accusamus at.
              Inventore, ipsum delectus laudantium, eaque aliquam est repellat
              deserunt ipsa sapiente voluptas nesciunt natus dolorem blanditiis
              ratione quibusdam accusantium architecto tempore, tenetur officia
              tempora cumque? Nisi voluptatibus veritatis sequi at. Beatae
              doloribus totam hic fugiat nam ad officiis eius pariatur. Quasi
              ab, deleniti non voluptatibus id molestiae repudiandae cum rem quo
              fugit labore atque quis, quaerat quidem suscipit accusamus itaque?
              Quis, molestiae sint vero, nemo eligendi veniam debitis atque
              illo, perspiciatis tempora quidem recusandae placeat quam odit
              eaque illum? Saepe iste quisquam impedit corrupti in fuga eaque
              dicta aperiam libero. Voluptatem corrupti iste sapiente, error
              dolore laboriosam reprehenderit non provident assumenda earum
              inventore quia ex quos molestiae, et eligendi nihil accusamus!
              Officiis, modi? Necessitatibus culpa impedit corrupti deserunt,
              sint provident! Impedit, vel! Eos earum recusandae harum eveniet,
              ex, rerum rem praesentium ut id sed exercitationem corrupti, et
              soluta dolores placeat porro voluptatem accusamus quae veritatis.
              Vero assumenda accusamus at iusto. Optio maxime quod, suscipit
              fugiat sunt iste ullam aut laborum nesciunt numquam perspiciatis
              quas sed, recusandae esse laboriosam eaque totam error, dolorum
              eligendi. Aliquam, ad temporibus nesciunt ex nulla repellendus.
            </p>
          </div>
        </main>
      </body>
    </>
  );
}

export default App;
