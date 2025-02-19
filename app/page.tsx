import { HomePageHeader } from "./_components";

export default function Page() {
  return (
    <div className="page">
      <HomePageHeader />
      <main className="page__main-content">
        <section className="page__plans-wrapper" />
      </main>
      <footer className="page__footer-wrapper" />
    </div>
  );
}
