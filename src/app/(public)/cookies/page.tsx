import { InfoPage } from "@/components/public/InfoPage";
import { getInfoPage } from "@/data/info-pages";

export default function CookiesPage() {
  return <InfoPage {...getInfoPage("fr", "cookies")} />;
}
