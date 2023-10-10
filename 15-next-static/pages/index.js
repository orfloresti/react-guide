export default function Home({pokemones}) {
  console.log(pokemones);
  return (
    <p>Pokemones</p>
  )
}

export async function getStaticProps() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await response.json()

  return {
    props: { pokemones: data.results }
  }
}