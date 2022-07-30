import React from "react";

interface Props {
  heading: string;
  Search: {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }[];
}

const Slider: React.FC<Props> = ({ Search, heading }: Props) => {
  let movies = [...Search];
  return (
    <>
      <div className="w-full text-white mt-5 font-bold tracking-widest uppercase">
        <p className="px-4 pb-4 text-lg">{heading}</p>
        <div className="carousel carousel-center max-w-full p-4 space-x-4 bg-neutral rounded-box">
          {movies.map((item) => {
            return (
              <div
                key={item.imdbID}
                className="carousel-item cursor-not-allowed"
              >
                <section className="flex flex-col w-full group duration-200 ease-in-out hover:scale-110 hover:shadow-lg shadow-black text-black">
                  <img
                    className="group-hover:scale-105 duration-200  w-[200px]"
                    src={item.Poster}
                    alt="/"
                  />

                  <div className="w-[200px] h-[80px] px-4 group-hover:flex flex-col duration-200 hidden group-hover:scale-105 bg-white">
                    <p className="text-xs">{item.Title.slice(0, 15)}</p>
                    <div className="mt-3 flex flex-row justify-between items-center">
                      <div className="flex items-center flex-row space-x-2">
                        <div className="hover:scale-110 duration-200 ease-in-out border-2 border-black rounded-full h-[30px] w-[30px] flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            height="20px"
                            width="20px"
                          >
                            <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
                          </svg>
                        </div>
                        <div className="hover:scale-110 duration-200 ease-in-out border-2 border-black rounded-full h-[30px] w-[30px] flex items-center justify-center">
                          <svg
                            height="20px"
                            width="20px"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
                          </svg>
                        </div>
                        <div className="hover:scale-110  duration-200 ease-in-out border-2 border-black rounded-full h-[30px] w-[30px] flex items-center justify-center">
                          <svg
                            height="20px"
                            width="20px"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M128 447.1V223.1c0-17.67-14.33-31.1-32-31.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64C113.7 479.1 128 465.6 128 447.1zM512 224.1c0-26.5-21.48-47.98-48-47.98h-146.5c22.77-37.91 34.52-80.88 34.52-96.02C352 56.52 333.5 32 302.5 32c-63.13 0-26.36 76.15-108.2 141.6L178 186.6C166.2 196.1 160.2 210 160.1 224c-.0234 .0234 0 0 0 0L160 384c0 15.1 7.113 29.33 19.2 38.39l34.14 25.59C241 468.8 274.7 480 309.3 480H368c26.52 0 48-21.47 48-47.98c0-3.635-.4805-7.143-1.246-10.55C434 415.2 448 397.4 448 376c0-9.148-2.697-17.61-7.139-24.88C463.1 347 480 327.5 480 304.1c0-12.5-4.893-23.78-12.72-32.32C492.2 270.1 512 249.5 512 224.1z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <div className="hover:scale-110  duration-200 ease-in-out border-2 border-black rounded-full h-[30px] w-[30px] flex items-center justify-center">
                          <svg
                            height="20px"
                            width="20px"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                          >
                            <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Slider;
