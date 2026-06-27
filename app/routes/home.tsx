import type { MetaFunction } from "react-router";
import ComingSoon from "~/components/coming-soon/coming-soon";

export const meta: MetaFunction = () => [
  { title: "PixelWala Cinematic — Coming Soon" },
  { name: "description", content: "PixelWala Cinematic — Premium Photography & Cinematography. Our website is coming soon. Contact us for bookings and inquiries." },
  { name: "theme-color", content: "#0B0B0B" },
];

export default function Home() {
  return <ComingSoon />;
}
