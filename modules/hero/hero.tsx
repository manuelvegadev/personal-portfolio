import classNames from "classnames";
import { JetBrains_Mono } from "next/font/google";
import { Profile } from "@/types";
import styles from "./hero.module.scss";
import { Button } from "@/components";

const fontMono = JetBrains_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export function Hero({ data }: { data: Profile }) {
  return (
    <div className={classNames(styles.hero)}>
      <video
        className={classNames(styles.hero__video)}
        src={"/vid/back.mov"}
        poster={"/img/back-cover.jpg"}
        autoPlay
        loop
        muted
      />
      <div className={"container"}>
        <section
          className={classNames([
            "row",
            "align-content-center",
            "align-items-center",
            styles.hero__row,
          ])}
        >
          <div
            className={classNames([
              "col",
              "col-10",
              "col-lg-5",
              "offset-1",
              "offset-md-0",
            ])}
          >
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
            <p
              className={classNames(["fs-6", "my-4"])}
              style={{
                textShadow: "0 0 5px rgba(0,0,0,.5)",
              }}
            >
              {data.about}
            </p>

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
                    aria-label={"Link to " + link.name}
                  >
                    <i className={`bi bi-${link.name.toLowerCase()}`} />
                  </a>
                ) : null;
              })}
              <Button>
                <i className="bi bi-whatsapp" />
                Contact me!
              </Button>
            </div>
          </div>
          <div
            className={classNames([
              "col",
              "col-4",
              "offset-2",
              "text-center",
              "d-none",
              "d-md-block",
            ])}
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
