import React from "react";

const Definition = ({ word, category, meaning }) => {
  return (
    <div className="definition-table">
      {meaning[0] && word && category === "en" && (
        <audio
          src={meaning[0].phonetics[0] && meaning[0].phonetics[0].audio}
          controls
        >
          Your browser doesnt support audio
        </audio>
      )}

      {word === "" ? (
        <h1 className="Subtitle">Enter a word for searching</h1>
      ) : (
        meaning.map((item) =>
          item.meanings.map((meaning) =>
            meaning.definitions.map((definition) => (
              <div>
                <h3>{definition.definition}</h3>
                <hr />
                {definition.example && <h2>Example: {definition.example}</h2>}
                {definition.synonyms && (
                  <h4>
                    Synonyms: {definition.synonyms.map((syn) => `${syn}, `)}
                  </h4>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definition;
