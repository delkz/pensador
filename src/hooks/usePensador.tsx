import { useEffect, useState } from 'react'

interface pensadorType {
  termoDePesquisa: string;
  frases: frasesType[];
  total: number;
}
interface frasesType {
  autor: string;
  texto: string;
}
function usePensador() {

  const [frase, setFrase] = useState("");
  const [autor, setAutor] = useState("");
  const [loading, setLoading] = useState(true);

  const autores = [
    "Fernando Pessoa",
    "William Shakespeare",
    "Desconhecido",
    "Clarice Lispector",
    "Maria Julia Paes de Silva",
    "Friedrich Nietzsche",
    "Augusto Cury",
    "Luís de Camões",
    "Roberto Shinyashiki",
    "Mario Quintana",
    "Confúcio",
    "Carlos Drummond de Andrade",
    "Pitágoras",
    "Dalai Lama",
    "Aristóteles",
    "Haile Selassie",
    "Oscar Wilde",
    "Platão",
    "Machado de Assis",
    "Oliver Wendell Holmes Sr.",
    "Albert Einstein",
    "Charles Chaplin",
    "Stubby Currence",
    "John Wooden",
    "Thich Nhat Hanh",
    "D. Elhers",
    "Fernando Teixeira de Andrade",
    "Leonardo da Vinci",
    "Gloria Hurtado",
    "Joseph Addison",
    "Paulo Coelho",
    "Antoine de Saint-Exupéry",
    "Roger Bussy-Rabutin",
    "Georges Bernanos",
    "Toquinho e Mutinho",
    "Evelyn Beatrice Hall",
    "Geraldo Eustáquio de Souza",
    "Sócrates",
    "Myrtes Mathias",
    "Nemo Nox",
    "Lilian Tonet",
    "Vinicius de Moraes",
    "Cora Coralina",
    "Amyr Klink",
    "Waldemar Valle Martins",
    "Martin Luther King",
    "Sarah Westphal",
    "Garth Henrichs",
    "Santo Agostinho",
    "Paulo Roberto Gaefke",
    "Sêneca",
    "Vladimir Maiakóvski",
    "Rui Barbosa",
    "John Dryden",
    "Oswaldo Montenegro",
    "Oliver Goldsmith",
    "William James",
    "Maurice Switzer",
    "Sigmund Freud",
    "Voltaire",
    "Mahatma Gandhi",
    "Jo. Cooke",
    "Leon Tolstói",
    "Henry Ford",
    "Khalil Gibran",
    "John Ruskin",
    "Benjamin Franklin",
    "Cynthia Kersey",
    "Victor Hugo",
  ]


  useEffect(() => {
    getFrase();

  }, [])

  const getFrase = () => {
    setLoading(true);

    function getRndInteger(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const randIndex = getRndInteger(0, autores.length);

    fetch(`https://pensador-api.vercel.app/?term=${autores[randIndex]}&max=7`).then(function (response) {
      return response.json();
    }).then(function (data: pensadorType) {
      const selectedIndex = getRndInteger(0, data.total - 1);
      if (data.frases[selectedIndex]) {
        setFrase(data.frases[selectedIndex].texto);
        setAutor(data.frases[selectedIndex].autor);
        setLoading(false);
      } else {
        getFrase();
      }
    });

  }


  return [{ autor, frase, loading, getFrase }]
}

export default usePensador
