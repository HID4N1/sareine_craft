import { InfoPage } from "@/components/public/InfoPage";
import { getInfoPage } from "@/data/info-pages";

export default function PrivacyPage() {
  return <InfoPage {...getInfoPage("fr", "privacy")} />;
}
