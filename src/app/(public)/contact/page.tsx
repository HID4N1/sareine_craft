import { InfoPage } from "@/components/public/InfoPage";
import { getInfoPage } from "@/data/info-pages";

export default function ContactPage() {
  return <InfoPage {...getInfoPage("fr", "contact")} />;
}
