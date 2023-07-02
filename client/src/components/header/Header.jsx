import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">The Mystic</span>
        <span className="headerTitleLg"></span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/6040174/pexels-photo-6040174.jpeg"
        alt=""
      />
    </div>
  );
}
