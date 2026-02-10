import { AUTH_URLS } from "./urls/auth";
import { COURSES_URL } from "./urls/courses";

export const matchPrefix = (path: string, prefixes: string[]) => {
  return prefixes.some((p) => path === p || path.startsWith(p + "/"));
};

type Rule = {
  match: string[];
  guestOnly?: boolean;
  authOnly?: boolean;
  redirectTo: string;
};

export const rules: Rule[] = [
  {
    match: [AUTH_URLS.login, AUTH_URLS.signup],
    guestOnly: true,
    redirectTo: COURSES_URL.courses_page,
  },
  {
    match: [AUTH_URLS.logout, COURSES_URL.courses_page],
    authOnly: true,
    redirectTo: AUTH_URLS.login,
  },
];
