const Character = ({ data }) => {
    const { name, gender, species, image, origin } = data;
    return (
        <div className="col mt-4">
            <div className="card">
                <img className="card-img-top" src={image} alt="{name}" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Species: {species}</p>
                    <p className="card-text">Gender: {gender}</p>
                    <p className="card-text">Planet: {origin.name}.</p>
                </div>
            </div>
        </div>
    );
};

export default Character;