import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">My</span>
        <span className="headerTitleLg" contenteditable="true">Blog</span>
      </div>
      <img
        className="headerImg"
        src="./img/nature.jpg"
        alt=""
      />
    </div>
  );
}
