import { SCROLL_OFFSET, SCROLL_BEHAVIOR } from "@/lib/constants";

export function useSmoothScroll() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - SCROLL_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: SCROLL_BEHAVIOR,
      });
    }
  };

  return { scrollToSection };
}
