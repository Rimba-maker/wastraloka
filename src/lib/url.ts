// Prefix root paths with the deploy base ("/" locally, "/wastraloka" on GitHub Pages).
export const u = (p: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + p;
