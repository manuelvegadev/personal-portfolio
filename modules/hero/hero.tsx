import classNames from "classnames";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";

const fontSans = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
const fontMono = JetBrains_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export function Hero({ data }) {
  return (
    <div className={"hhh"} style={{ paddingTop: "4rem" }}>
      <video
        src="/vid/back.mov"
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          zIndex: -1,
          width: "100%",
          filter: "blur(30px)",
          transform: "scale(-1, 1) translateY(-50%)",
        }}
      />
      <div className={"container"}>
        <section
          className={classNames([
            "row",
            "align-content-center",
            "align-items-center",
          ])}
          style={{
            padding: "10rem 0",
          }}
        >
          <div className={classNames(["col", "col-5"])}>
            <span className={classNames(["fs-5"])}>Hello, I&apos;m</span>
            <h1
              className={classNames([
                "fw-bold",
                "fst-italic",
                "my-1",
                fontMono.className,
              ])}
              style={{
                fontSize: "calc(2.75rem + 1.5vw)",
                textShadow: "0 0 10px rgba(0,0,0,.25)",
                marginLeft: "-.25rem",
              }}
            >
              {data.name.trim().replaceAll(" ", "_")}
            </h1>
            <h2
              className={classNames(["fw-semibold", "fs-3"])}
              style={{
                color: "white",
                textShadow: "0 0 10px rgba(0,0,0,.25)",
              }}
            >
              {data.headline}
            </h2>
            <p className={classNames(["fs-6", "my-4"])}>{data.about}</p>

            <div className={"d-flex gap-2 w-100 fs-4"}>
              {data.links.map((link, index) => {
                return link.name && link.url ? (
                  <a
                    key={index}
                    href={link.url}
                    className={classNames([
                      "px-2",
                      "border",
                      "border-1",
                      "border-white",
                      "border-opacity-25",
                      "rounded-3",
                      "align-items-center",
                      "d-inline-flex",
                    ])}
                    style={{ aspectRatio: "1" }}
                  >
                    <i className={`bi bi-${link.name.toLowerCase()}`}></i>
                  </a>
                ) : null;
              })}
              <button
                className={classNames([
                  "d-flex",
                  "align-items-center",
                  "justify-content-center",
                  "lh-1",
                  "bg-white",
                  "text-dark",
                  "border-0",
                  "d-inline-flex",
                  "py-2",
                  "px-3",
                  "rounded-3",
                  "gap-2",
                ])}
                style={{ fontSize: ".75em", cursor: "pointer" }}
              >
                <i className="bi bi-whatsapp"></i>Contact me!
              </button>
            </div>
          </div>
          <div
            className={classNames(["col", "col-4", "offset-2", "text-center"])}
          >
            <img
              className={classNames(["rounded-circle", "w-100"])}
              src={data["photo-url"]}
              alt={"Profile picture"}
              style={{
                boxShadow: "0 0 10px rgba(0,0,0,.25)",
                aspectRatio: "1/1 !important",
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
