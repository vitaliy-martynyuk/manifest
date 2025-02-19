import { HomePageFooter, HomePageHeader, HomePageMain } from "./_components";

export default function Page() {
  return (
    <div className="page">
      <HomePageHeader />
      <HomePageMain />
      <HomePageFooter />
    </div>
  );
}
