document.addEventListener('DOMContentLoaded', function () {
    const pokemonInput = document.getElementById('PokemonInput'); // Certifique-se de que o ID está correto
    const fetchPokemonButton = document.getElementById('fetchpokemonButton'); // Certifique-se de que o ID está correto
    const pokemonDetails = document.getElementById('PokemonDetails'); // Certifique-se de que o ID está correto

    fetchPokemonButton.addEventListener('click', function () {
        const pokemonNameOrId = pokemonInput.value.trim().toLowerCase(); // Corrigido para .value

        if (pokemonNameOrId === '') {
            alert('Por favor, digite o nome ou ID do Pokémon.');
            return;
        }

        pokemonDetails.innerHTML = '';

        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Pokémon não encontrado');
                }
                return response.json();
            })
            .then(data => {
                const { name, id, types, abilities, sprites } = data;
                const pokemonName = name.charAt(0).toUpperCase() + name.slice(1);
                const pokemonType = types.map(type => type.type.name).join(", ");
                const pokemonId = id;
                const pokemonAbilities = abilities.map(ability => ability.ability.name).join(', '); // Corrigido para adicionar espaços após as vírgulas
                const pokemonImage = sprites.front_default;

                pokemonDetails.innerHTML = `
                    <h2>${pokemonName} (#${pokemonId})</h2>
                    <p><strong>Tipo:</strong> ${pokemonType}</p> <!-- Corrigido para usar a interpolação de variáveis -->
                    <p><strong>Habilidades:</strong> ${pokemonAbilities}</p>
                    <img src="${pokemonImage}" alt="${pokemonName} Image" class="Pokemon-img">
                `;
            })
            .catch(error => {
                console.error('Erro ao buscar informações do Pokémon:', error);
                pokemonDetails.innerHTML = `<p>Pokémon não encontrado. Verifique o nome ou o ID e tente novamente.</p>`;
            });
    });
});
