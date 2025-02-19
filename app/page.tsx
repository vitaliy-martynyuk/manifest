import { HomePageHeader, HomePageMain } from "./_components";

export default function Page() {
  return (
    <div className="page">
      <HomePageHeader />
      <HomePageMain />
      <footer className="page__footer-wrapper" />
    </div>
  );
}
