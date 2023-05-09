import classNames from "classnames";

export function Footer() {
  return (
    <footer className={classNames(["container"])}>
      <div className="row">
        <div className="col text-center text-white-50 py-5">
          <a
            href="https://github.com/manuelvegadev/personal-portfolio"
            className={classNames([
              "d-flex",
              "gap-2",
              "justify-content-center",
              "align-items-center",
            ])}
            target={"_blank"}
          >
            <span className={"bi bi-github"} />
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}
