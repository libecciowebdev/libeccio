import {
  forwardRef,
  useEffect,
  useState,
  type AnchorHTMLAttributes,
  type ComponentType,
} from "react";

type RouteConfig = {
  head?: () => unknown;
  component: ComponentType;
};

export function createFileRoute(_path: string) {
  return <T extends RouteConfig>(config: T): T => config;
}

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
  activeOptions?: { exact?: boolean };
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { to, activeOptions, ...props },
  ref,
) {
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname || "/");
  }, []);

  const exact = activeOptions?.exact ?? false;
  const active = exact
    ? pathname === to
    : to === "/"
      ? pathname === "/"
      : pathname === to || pathname.startsWith(`${to}/`);

  return (
    <a
      ref={ref}
      href={to}
      data-status={active ? "active" : undefined}
      {...props}
    />
  );
});
