import { getPagePaths } from "./utils"

const base = { signIn: "/sign-in", dashboard: "/dashboard", myPage: "/my-page" }

const path = {
  myPage: {
    business: "business",
    company: "company",
    taxStatement: "tax-statement",
  },
}

export const pageRoute = {
  signIn: base.signIn,
  dashboard: base.dashboard,
  myPage: {
    base: base.myPage,
    ...getPagePaths(base.myPage, path.myPage),
  },
}
