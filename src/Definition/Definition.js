import React from "react";
import "./Definition.css";

const Definition = ({ word, category, meaning }) => {
  return (
    <div className="definition-table d-flex flex-column justify-content-center">
      {meaning[0] && word && category === "en" && (
        <audio
          className="audio"
          src={meaning[0].phonetics[0] && meaning[0].phonetics[0].audio}
          controls
        >
          <h2>Your browser doesn't support audio</h2>
        </audio>
      )}

      {word === "" ? (
        <h1 className="subtitle text-center">Enter a word for searching</h1>
      ) : (
        meaning.map((item) =>
          item.meanings.map((meaning) =>
            meaning.definitions.map((definition) => (
              <div className="result">
                <h1 className="my-1">{definition.definition}</h1>
                <hr />
                {definition.example && (
                  <h2 className="def-font">
                    <span className="span">Example:</span> {definition.example}
                  </h2>
                )}
                {definition.synonyms && (
                  <h4 className="def-font">
                    <span className="span">Synonyms:</span>
                    {definition.synonyms.map((syn) => ` ${syn}, `)}
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
