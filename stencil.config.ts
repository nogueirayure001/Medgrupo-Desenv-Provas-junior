import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: "src/global/app.scss",
  globalScript: "src/global/app.ts",
  taskQueue: "async",
  outputTargets: [
    {
      type: "www",
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: "https://myapp.local/",
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        "src/global/reset.scss",
        "src/global/mixins.scss",
        "src/global/colors.scss",
      ],
    }),
  ],
};
