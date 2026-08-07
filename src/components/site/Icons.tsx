import type { SVGProps } from "react";

const p = (props: SVGProps<SVGSVGElement>) => ({
  width: 24, height: 24, viewBox: "0 0 24 24", fill: "none",
  stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
  ...props,
});

export const IconPhone = (props: SVGProps<SVGSVGElement>) => (
  <svg {...p(props)}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
export const IconMail = (props: SVGProps<SVGSVGElement>) => (
  <svg {...p(props)}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>
);
export const IconMapPin = (props: SVGProps<SVGSVGElement>) => (
  <svg {...p(props)}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
);
export const IconClock = (props: SVGProps<SVGSVGElement>) => (
  <svg {...p(props)}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
);
export const IconBolt = (props: SVGProps<SVGSVGElement>) => (
  <svg {...p(props)}><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg>
);
export const IconShield = (props: SVGProps<SVGSVGElement>) => (
  <svg {...p(props)}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
);
export const IconStar = (props: SVGProps<SVGSVGElement>) => (
  <svg {...p(props)}><path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" fill="currentColor"/></svg>
);
export const IconCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg {...p(props)}><path d="m5 13 4 4L19 7"/></svg>
);
export const IconArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg {...p(props)}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
);
export const IconMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg {...p(props)}><path d="M3 6h18M3 12h18M3 18h18"/></svg>
);
export const IconX = (props: SVGProps<SVGSVGElement>) => (
  <svg {...p(props)}><path d="M18 6 6 18M6 6l12 12"/></svg>
);
export const IconHome = (props: SVGProps<SVGSVGElement>) => (
  <svg {...p(props)}><path d="M3 10 12 3l9 7v10a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2V10z"/></svg>
);
export const IconBuilding = (props: SVGProps<SVGSVGElement>) => (
  <svg {...p(props)}><rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 6h.01M15 6h.01M9 10h.01M15 10h.01M9 14h.01M15 14h.01M10 22v-4h4v4"/></svg>
);
export const IconFan = (props: SVGProps<SVGSVGElement>) => (
  <svg {...p(props)}><path d="M12 12c0-3 1.5-6 4-6s4 2 4 4-2 4-4 4c-3 0-6-1.5-6-4s2-4 4-4"/><circle cx="12" cy="12" r="1.5"/></svg>
);
export const IconLightbulb = (props: SVGProps<SVGSVGElement>) => (
  <svg {...p(props)}><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c1 .8 1.5 1.5 1.5 2.3v1h5v-1c0-.8.5-1.5 1.5-2.3A7 7 0 0 0 12 2z"/></svg>
);
export const IconWrench = (props: SVGProps<SVGSVGElement>) => (
  <svg {...p(props)}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.7 2.7-2.6-2.6 2.7-2.7z"/></svg>
);
export const IconSparkle = (props: SVGProps<SVGSVGElement>) => (
  <svg {...p(props)}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>
);
