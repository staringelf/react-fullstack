import Header from "./Header";

export default function Page({children}) {
  return (
    <div>
      <Header></Header>
      <p>The Page Component!</p>
      {children}
    </div>
  );
}