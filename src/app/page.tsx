import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Story from "@/components/Story";
import Schedule from "@/components/Schedule";
import Venue from "@/components/Venue";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-walnut">
      <Hero />
      <Countdown />
      <Story />
      <Schedule />
      <Venue />
      <RSVP />
      <Footer />
      <MusicPlayer />
    </main>
  );
}
