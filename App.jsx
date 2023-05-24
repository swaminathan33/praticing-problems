import React, { useState } from "react";
import axios from "axios";
import Videos from "./Components/Videos";

const App = () => {
  const [value, setValue] = useState("");
  const [term, setTerm] = useState("");
  const [iframe, setIframe] = useState("");

  const [titles, setTitles] = useState();

  const key = "AIzaSyAFq9mGC7tbO-FwzdVXBc3Jrb26iPVrfT8";
  const url = `https://www.googleapis.com/youtube/v3/search?q=${term}&key=${key}&part=snippet&type=video`;
  const urlHead = "https://www.youtube.com/embed/";
  const urlBack = "FYIDBhtSuzw";

  const api = () => {
    axios.get(url).then((response) => {
      console.log(response);
      const result = response.data.items.map((doc) => ({
        ...doc,
      }));
      setTitles(result);
    });
    console.log("accessing api....");
  };

  const search = () => {
    setTerm(value);
    api();
  };

  const selected = (url, e) => {
    e.preventDefault();
    console.log(url);
    setIframe(url);
  };

  return (
    <div className="text-center">
      <input
        placeholder="search"
        className="border border-sky-500 font-bold outline-none mt-2 rounded p-2 w-72"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div>
        <button
          onClick={search}
          className="bg-sky-400 text-white mt-2 px-3 py-1 rounded-md"
        >
          submit
        </button>
      </div>
      {titles
        ? titles.map((n, id) => {
            return (
              <div className="flex ">
                <div className="w-3/4">
                  {id == 0 ? (
                    <iframe
                      width="560"
                      height="315"
                      src={urlHead + url}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  ) : (
                    ""
                  )}
                </div>
                <div className="shadow-slate-300 shadow-xl p-4 rounded-lg w-1/4 flex flex-col me-16">
                  <div className="me-16">
                    <img
                      width={300}
                      height={200}
                      src={n.snippet.thumbnails.high.url}
                    />
                    <a
                      href="#"
                      className="hover:underline"
                      onClick={(e) => selected(n.id.videoId, e)}
                    >
                      <p className="w-72  text-start" key={id}>
                        {n.snippet.title}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        : "dfsd"}
    </div>
  );
};

export default App;

//
//
