import { useQuery, gql } from '@apollo/client';
import Character from './Character';
import React, { useState } from 'react';

const QUERY = gql`
query ($name: String) {
    characters(filter: { name: $name }) {
        results {
            id
            name
            gender
            species
            image
            origin {
                id
                name
            }
        }
    }
}
`;

const Characters = (props) => {
    const [char, setChar] = useState('rick');
    const { loading, error, data } = useQuery(QUERY, {
        variables: { name: char }
    });

    if (error) {
        return <p>Error :( {JSON.stringify(error)} </p>
    };

    return <div>
        <select onChange={e => setChar(e.target.value)} value={char}>
            <option value="rick">rick</option>
            <option value="morty">morty</option>
            <option value="summer">summer</option>
            <option value="beth">beth</option>
            <option value="jerry">jerry</option>
            <option value="birdperson">birdperson</option>
        </select>
        <div className="container-fluid mb-4">
            <div className="row justify-content-center row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                {loading ? <p>Loading...</p> :
                    data.characters.results.map(character => {
                        return <Character key={character.id} data={character} />
                    })
                }
            </div>

        </div>
    </div >;
};

export default Characters;