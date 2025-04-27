document.addEventListener('DOMContentLoaded', () => {
    const paisSelect = document.getElementById('pais');
    const cidadeSelect = document.getElementById('cidade');
    const form = document.getElementById('form-explorar');
    const mapa = document.getElementById('mapa');
    const tituloLocal = document.getElementById('titulo-local');
    const morada = document.getElementById('morada');
    const email = document.getElementById('email');
    const infoLocal = document.querySelector('.info-local');
  
    const dados = {
      Portugal: {
        Porto: {
          mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.984382934029!2d-8.60459642447826!3d41.1566921102739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2464f6e2607545%3A0x76bf593c1c442e0d!2sRua%20da%20Alegria%20666%2C%204000-099%20Porto!5e0!3m2!1spt-PT!2spt!4v1745721107232!5m2!1spt-PT!2spt",
          morada: "Rua da Alegria, 666<br>4000-099 - Porto",
          email: "livingaround_porto@living.com"
        }
      },
      Espanha: {
        Madrid: {
          mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.354147264049!2d-3.713408024516619!3d40.42315635524909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228652eacbc5f%3A0xd95eeaac7b2a62d5!2sGran%20V%C3%ADa%2C%20123%2C%20Centro%2C%2028013%20Madrid%2C%20Espanha!5e0!3m2!1spt-PT!2spt!4v1745721224986!5m2!1spt-PT!2spt",
          morada: "Gran Via, 123<br>28013 - Madrid",
          email: "livingaround_madrid@living.com"
        }
      }
    };
  
    paisSelect.addEventListener('change', () => {
      cidadeSelect.innerHTML = '<option value="">cidade</option>';
      const cidades = Object.keys(dados[paisSelect.value] || {});
      cidades.forEach(cidade => {
        const option = document.createElement('option');
        option.value = cidade;
        option.textContent = cidade;
        cidadeSelect.appendChild(option);
      });
    });
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const pais = paisSelect.value;
      const cidade = cidadeSelect.value;
  
      if (dados[pais] && dados[pais][cidade]) {
        mapa.src = dados[pais][cidade].mapa;
        mapa.classList.remove('d-none');
        tituloLocal.innerHTML = `LIVING AROUND - ${cidade}`;
        morada.innerHTML = dados[pais][cidade].morada;
        email.innerHTML = dados[pais][cidade].email;
        infoLocal.classList.remove('d-none');
      }
    });
  });