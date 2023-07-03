function menuOnClick() {
    document.getElementById("menu-barras").classList.toggle("change");
    document.getElementById("nav-phone").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

const links = {
  link1: 'Av. Palmira Rossi, 1195 - Recreio São Jorge, Guarulhos - SP, 07144-170',
  link2: 'https://goo.gl/maps/b2n3sHHBTU1sYyZw7',
  link3: 'Estação Tucuruvi - Av. Antônio Maria Laet; Lateral do Terminal de Ônibus',
  link4: 'https://goo.gl/maps/pnVPpdUaFFsNzodE8'
} ; 

const copiarRecreio = document.getElementById("copiar-recreio");
const copiarRecreio2 = document.getElementById("copiar-recreio2");
const copiarTucuruvi = document.getElementById("copiar-tucuruvi");
const copiarTucuruvi2 = document.getElementById("copiar-tucuruvi2");

copiarRecreio.addEventListener("click", () => {
  funcaoCopia(links.link1)
});

copiarRecreio2.addEventListener("click", () => {
  funcaoCopia(links.link2)
});

copiarTucuruvi.addEventListener("click", () => {
  funcaoCopia(links.link3)
});

copiarTucuruvi2.addEventListener("click", () => {
  funcaoCopia(links.link4)
});

function funcaoCopia(link) {
  console.log('botaoClicado')
  navigator.clipboard.writeText(link)
    .then(() => {
      alert('Link copiado com sucesso!');
    })
    .catch((error) => {
      console.error('Falha ao copiar o link!: ', error);
    });
}
