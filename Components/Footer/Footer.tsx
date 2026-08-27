import { Mail, MapPin } from "lucide-react";
import FollowMe from "./FollowMe";

export default function Footer() {
  return (
    <footer className="w-full pb-4 border-t border-(--border) Container flex flex-col md:flex-row gap-5 items-center justify-between" id="contact">
        <p className="text-nowrap flex items-end gap-1 text-[14px]">
            <MapPin />
            ایران ، کرج
        </p>
        <FollowMe />
        <p className="text-nowrap flex items-end gap-1 text-[14px]">
            <Mail />
            zhiyanjoo1382@gmail.com
        </p>
    </footer>
  );
}
