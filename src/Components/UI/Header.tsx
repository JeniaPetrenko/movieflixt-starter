import styeles from "./header.module.css";
export const Header = ({ title }: { title: string }) => {
  return <h1 className={styeles.title}>{title}</h1>;
};
