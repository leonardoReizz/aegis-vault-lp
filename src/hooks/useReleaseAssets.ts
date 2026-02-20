import { useEffect, useState } from "react";

const API_URL = "https://api.github.com/repos/leonardoReizz/aegis-vault/releases/latest";
const FALLBACK = "https://github.com/leonardoReizz/aegis-vault/releases/latest";

export interface ReleaseLinks {
  macArm: string;
  macIntel: string;
  windows: string;
  linux: string;
}

export function useReleaseAssets(): ReleaseLinks {
  const [links, setLinks] = useState<ReleaseLinks>({
    macArm: FALLBACK,
    macIntel: FALLBACK,
    windows: FALLBACK,
    linux: FALLBACK,
  });

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const assets: { name: string; browser_download_url: string }[] = data.assets ?? [];
        const find = (match: (name: string) => boolean) =>
          assets.find((a) => match(a.name))?.browser_download_url ?? FALLBACK;

        setLinks({
          macArm: find((n) => n.endsWith("aarch64.dmg")),
          macIntel: find((n) => n.endsWith("x64.dmg")),
          windows: find((n) => n.endsWith(".msi")),
          linux: find((n) => n.endsWith(".deb")),
        });
      })
      .catch(() => {});
  }, []);

  return links;
}
