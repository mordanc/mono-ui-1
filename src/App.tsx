import React from "react";
import {
  MonoButton,
  MonoCard,
  MonoApp,
  MonoSidebar,
  IMonoWindow,
  MonoTopbar,
} from "./components";

function App() {
  const a = <MonoButton text="SideNav One" func={() => {}} disable={false} />;
  const b = <MonoButton text="SideNav Two" func={() => {}} disable={false} />;
  const c = <MonoButton text="SideNav Three" func={() => {}} disable={false} />;

  const topbar = (
    <MonoTopbar>
      <h1>Topbar</h1>
      <MonoButton text="Test Button" disable={false} func={() => {}} />
    </MonoTopbar>
  );

  const cardA = (
    <div>
      <MonoCard>
        <h1>Hey im a card</h1>
        <MonoButton text="and im a button" disable={false} func={() => {}} />
      </MonoCard>
    </div>
  );
  const cardB = (
    <div>
      <MonoCard center={true}>
        <h1>Hey im a card</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
          deserunt impedit hic suscipit beatae inventore in necessitatibus
          dolorem laboriosam, esse quod doloremque modi perspiciatis corporis
          exercitationem id, illum asperiores totam, quae minima voluptas.
          Veritatis deserunt officia non natus qui. Laboriosam voluptatem ad
          sint iusto, modi deleniti tempore voluptate? Eaque sapiente dolorem
          minus obcaecati expedita. Perferendis blanditiis accusantium, esse,
          eum aliquid maxime eaque expedita ratione vero veniam itaque enim quis
          adipisci. Incidunt reprehenderit deleniti id modi natus doloremque
          asperiores alias, repellendus autem aut dolore soluta voluptatibus
          voluptas veniam dolores veritatis facilis exercitationem earum nisi.
          Magnam velit inventore sint esse reprehenderit vitae cum adipisci
          nobis! Rem nobis officia culpa, quasi, amet perspiciatis alias qui
          asperiores quaerat molestias saepe tempore maiores natus temporibus
          officiis eum, beatae aliquam. Incidunt sapiente explicabo ducimus iste
          consequatur impedit error, quibusdam est sunt nihil aliquam animi aut
          accusantium, cupiditate soluta. Quidem, voluptatem quo numquam hic
          molestiae a rem illo dolore odio commodi corporis eos nam. Laboriosam
          fugit praesentium dolorum commodi saepe! Nobis voluptates maiores in
          ea quod, praesentium quo labore consequatur modi ad autem facilis
          aliquid, error, eum animi beatae esse pariatur voluptas cumque quaerat
          necessitatibus! Iste modi maxime, deleniti eos temporibus autem
          voluptatibus ex sed incidunt atque distinctio quaerat natus quisquam
          adipisci magni error suscipit reiciendis iure accusamus dolorum, illum
          ut dignissimos architecto minima! Error, fugit. Nam corporis odio id
          voluptatem enim ipsa reiciendis quasi voluptates velit? Qui amet sunt
          assumenda rerum, porro suscipit ullam quam laudantium explicabo,
          debitis, nemo sint dignissimos animi! Est officiis adipisci quas sed
          harum. Quis eos vel adipisci! Eveniet cum ut alias officia quis ab
          molestiae aliquid facilis maiores adipisci doloribus, deleniti numquam
          itaque tenetur! Non deleniti repellendus nihil illo temporibus minus
          iusto accusantium rem in! Ex, enim maiores? Vero sunt consequuntur,
          tempora dolorum quam nostrum? Perferendis, molestias. Laboriosam eum
          exercitationem placeat adipisci cumque? Fugit quisquam cumque error
          quia, illo, qui odit voluptates totam dolorum amet iure sunt numquam
          eos aliquam soluta id. Autem architecto blanditiis, earum odio
          aspernatur dignissimos quos? Quam incidunt nobis libero debitis
          deleniti in nisi dolorum nulla! Veritatis, rem ullam error sequi omnis
          excepturi similique accusantium, animi aliquam obcaecati laudantium.
          Voluptatem, possimus corporis. Qui quidem optio eius magnam iure
          architecto necessitatibus, ratione illo excepturi consequuntur. Sequi
          vel ab libero minima quis, odio suscipit illum cum, velit nam itaque
          sapiente aperiam quam commodi tenetur assumenda tempore consequuntur
          dicta quia incidunt quod repellendus beatae! Quod odio culpa voluptas
          quo dolore vero quidem fugiat neque ipsa atque? Tempora hic odio ex
          quis quaerat magnam illo doloremque at aspernatur, officia, omnis,
          fuga minima dolore soluta fugit culpa architecto voluptas nisi autem
          accusantium. Tenetur eaque quisquam esse et dolores maiores, quia odio
          unde. Nesciunt illo quo amet quaerat cupiditate. Exercitationem quas
          corrupti labore, maiores, adipisci aut fugit sit provident amet
          laborum sint libero quibusdam alias ipsa quae assumenda id omnis unde
          saepe ab doloremque? Facilis dolores perferendis modi ducimus,
          repudiandae sit sed adipisci ipsum optio explicabo at voluptatibus,
          magni suscipit dicta veniam consequatur ipsam fugiat dolore accusamus
          omnis ut eius porro quas? Obcaecati cupiditate numquam temporibus
          totam doloremque quam quod velit ullam eum nam. Quaerat alias eum
          debitis, explicabo nesciunt reprehenderit eveniet quos illo suscipit
          autem porro animi labore sequi cumque placeat, quasi nihil sint
          accusamus quis adipisci ea velit aliquid optio! Architecto ullam hic
          perspiciatis nisi minima quae qui totam ipsam praesentium illum
          obcaecati, molestiae, quod voluptatem. Quia a reprehenderit
          accusantium sed itaque nemo, voluptatum voluptates incidunt eligendi,
          assumenda blanditiis rerum modi quo voluptatem cumque deserunt est.
          Consequatur mollitia ab ratione sit sunt molestiae cupiditate
          praesentium necessitatibus vero asperiores? Commodi excepturi maiores,
          magnam asperiores non numquam dolore, quibusdam odit neque dolor ipsum
          similique, omnis nulla totam fugiat unde vitae error. Quam iste error
          perspiciatis voluptates minima inventore ea dolorum at excepturi
          laboriosam dolore sapiente placeat, aliquid quaerat obcaecati,
          voluptate vitae. A harum aliquam libero repellat dolores consectetur
          quae nostrum cum facilis sunt repudiandae unde voluptas et, alias
          praesentium rerum explicabo ipsa nihil error. Cumque nulla odit
          laudantium tempora nobis repellendus cupiditate totam maiores officia
          maxime distinctio debitis voluptatum unde blanditiis nihil sunt
          excepturi laboriosam dolorem soluta exercitationem, adipisci eum
          voluptates quos! Nulla ipsa quaerat sunt aspernatur ullam reiciendis
          natus possimus iste, maxime, illo eaque, aliquid accusantium provident
          eos earum consectetur id ipsum.
        </p>
        <MonoButton text="and im a button" disable={false} func={() => {}} />
      </MonoCard>
    </div>
  );

  const sidebarLeft = <MonoSidebar buttons={[a, b, c]} />;
  const content: IMonoWindow[] = [
    {
      colSpan: 1,
      content: `What is Lorem Ipsum?
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    
    Why do we use it?
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    
    
    Where does it come from?
    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    
    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
    },
    { colSpan: 2, content: cardA },
    { colSpan: 3, content: cardB },
    // { colSpan: 2, content: "some content 2" },
  ];
  return (
    <MonoApp
      rightSidebar={sidebarLeft}
      leftSidebar={sidebarLeft}
      topbar={topbar}
      contentPanes={content}
      mainContentColumns={3}
      frames={true}
    />
  );
}

export default App;
