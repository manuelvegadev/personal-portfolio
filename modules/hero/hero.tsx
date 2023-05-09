import Image from "next/image";
import classNames from "classnames";
import { Button } from "@/components";
import { Profile } from "@/types";
import styles from "./hero.module.scss";

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
      <div className={classNames(styles["hero__video-backdrop-filter"])} />
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
            <span className={classNames(["fs-5"])}>👋 Hello, I&apos;m</span>
            <h1
              className={classNames(["fw-bold", "fst-italic", "my-1"])}
              style={{
                fontSize: "calc(2.5rem + 1.5vw)",
                textShadow: "0 0 10px rgba(0,0,0,.25)",
                marginLeft: "-.25rem",
                fontFamily: "var(--font-mono)",
              }}
            >
              {data.name.trim().replaceAll(" ", "_")}
            </h1>
            <h2
              className={classNames(["fw-semibold", "fs-4"])}
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
              "d-lg-block",
            ])}
          >
            <Image
              className={classNames([
                styles["hero__profile-photo"],
                "rounded-circle",
                "w-100",
              ])}
              src={data["photo-url"]}
              alt={"Profile picture"}
              width={322}
              height={322}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
