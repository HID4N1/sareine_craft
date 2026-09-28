import { InfoPage } from "@/components/public/InfoPage";
import { getInfoPage } from "@/data/info-pages";

export default function TermsPage() {
  return <InfoPage {...getInfoPage("fr", "terms")} />;
}
